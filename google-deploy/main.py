import cv2
import numpy as np
import base64
import utils
from flask import Flask, request, jsonify

def run(b64, widthImg=400, heightImg=600, questions=10, choices=5, ans=[1,1,3,1,0,2,1,2,1,4]):
    decoded_data = base64.b64decode(b64)
    np_data = np.fromstring(decoded_data, np.uint8)
    img = cv2.imdecode(np_data, cv2.IMREAD_UNCHANGED)

    # Preprocessing
    img = cv2.resize(img, (widthImg, heightImg))
    imgContours = img.copy()
    imgFinal = img.copy()
    imgBiggestContours = img.copy()
    imgGray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    imgBlur = cv2.GaussianBlur(imgGray, (5,5),1)
    imgCanny = cv2.Canny(imgBlur,10,50)

    ret, thresh = cv2.threshold(imgCanny, 1, 255, cv2.THRESH_OTSU)

    #find the contours in the image
    contours, heirarchy = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    #countours, hierarchy = cv2.findContours(imgCanny, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    cv2.drawContours(imgContours,contours,-1, (0,255,0),1)
    # FIND RECTANGLES
    rectCon = utils.rectCountour(contours)
    biggestContour = utils.getCornerPoints(rectCon[0])
    # print(biggestContour.shape)
    gradePoints = utils.getCornerPoints(rectCon[3])
    #print(biggestContour)

    if biggestContour.size != 0 and gradePoints.size != 0:
        cv2.drawContours(imgBiggestContours, biggestContour, -1, (0,255,0),20)
        cv2.drawContours(imgBiggestContours, gradePoints, -1, (255,0,0),20)

        biggestContour = utils.reorder(biggestContour)
        gradePoints = utils.reorder(gradePoints)

        pt1 = np.float32(biggestContour)
        pt2 = np.float32([[0, 0], [widthImg, 0], [0, heightImg], [widthImg, heightImg]])
        matrix = cv2.getPerspectiveTransform(pt1,pt2)
        imgWarpColored = cv2.warpPerspective(img, matrix, (widthImg, heightImg))

        ptG1 = np.float32(gradePoints)
        ptG2 = np.float32([[0, 0], [325, 0], [0, 150], [325, 150]])
        matrixG = cv2.getPerspectiveTransform(ptG1, ptG2)
        imgGradeDisplay = cv2.warpPerspective(img, matrixG, (325, 150))
        # cv2.imshow("Grade", imgGradeDisplay)

        #APPLY THRESHOLD
        imgWarpGray = cv2.cvtColor(imgWarpColored, cv2.COLOR_BGR2GRAY)
        imgThresh = cv2.threshold(imgWarpGray,125,255,cv2.THRESH_BINARY_INV)[1]

        boxes = utils.splitBoxes(imgThresh)
        # cv2.imshow("Test", boxes[13])
        # print("Pixels Count 0:", cv2.countNonZero(boxes[0]))
        # print("Pixels Count 1:", cv2.countNonZero(boxes[1]))


        # GETTING NO ZERO PIXEL VALUES OF EACH BOX
        myPixelVal = np.zeros((questions, choices))
        countC = 0
        countR = 0

        for image in boxes:
            totalPixels = cv2.countNonZero(image)
            myPixelVal[countR][countC] = totalPixels
            countC += 1
            if (countC == choices): countR += 1; countC = 0
        # print(myPixelVal)

        # FINDING INDEX VALUES OF THE MARKINGS
        myIndex = []
        for x in range(0,questions):
            arr = myPixelVal[x]
            # print("arr:", arr)
            myIndexVal = np.where(arr==np.amax(arr))
            # print(myIndexVal[0])
            myIndex.append(myIndexVal[0][0])
        # print(myIndex)

        # GRADING
        grading=[]
        for x in range(0, questions):
            if ans[x] == myIndex[x]:
                grading.append(1)
            else: grading.append(0)

        # print('Grading:',grading)

        score = (sum(grading)) # FINAL GRADE
    return [score, grading]

app = Flask(__name__)
@app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == 'POST':

        file = request.files.get('file')
        if file is None or file.filename == '':
            return jsonify({'error': 'no file'})

        try:
            img_b64 = file.read()
            score, grading = run(b64=img_b64)
            data = {'score': int(score), 'grading':grading}
            return jsonify(data)
        except Exception as e:
            return jsonify({'error': str(e)})

    return 'OK'

if __name__ == '__main__':
    app.run(debug=True)