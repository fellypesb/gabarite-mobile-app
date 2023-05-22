import { styles } from './styles';
import { StyledButton } from '../../../components/StyledButton';

import {
    Text,
    View,
    Image
} from 'react-native';

export function Newfix({ navigation }){
    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.text}>
                    A seguir, escanei o cartão resposta <Text style={styles.textSpan}>gabarito</Text> contendo todas as <Text style={styles.textSpan}>respostas</Text> corretas da atividade que será <Text style={styles.textSpan}>corrigida</Text>
                </Text>
            </View>

            <Image 
                source={require('../../../assets/IconNewFix.png')} 
                style={styles.cardImage}
            />

            <View style={styles.containerButton}>
                <StyledButton 
                    type='primary'
                    content='abrir câmera'
                    width='178'
                />
                <StyledButton 
                    type='secundary'
                    content='voltar'
                    width='123'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    );
}