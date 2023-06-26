# App GABARITE 👨‍🏫
O aplicativo gabarite é um app voltado para o âmbito escolar no qual objetiva-se realizar correções de atividades no formato de cartão resposta. Através de reconhecimento de padrões poderá ser realizado correções de forma rápida comparando um cartão resposta
gabarito com o cartão resposta dos alunos.

## Dependências ✅
- node version 18.16.0 
- npm version 9.6.6
- react-native 0.71.8

## Entrega 1
para executar projeto no navegador:
```sh
npm install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
```

para executar navegação de telas:
```sh
npm install @react-navigation/native
```
```sh
npm install react-native-screens react-native-safe-area-context@4.5.0
```
```sh
npm install @react-navigation/native-stack
```
## Entrega 2
para rodar o json server
```sh
npm install -g json-server
```
para rodar o middler de autenticação
```sh
npm install json-server-auth
```
para acessar a câmera
```sh
npx expo install expo-camera
```
para deixar acessível o localhost
```sh
npm install ngrok -g
```
## Como rodar o App 🚀
1 - Execute o seguinte código:
```sh
npm run server
```
para subir o `json-server` juntamente com middler de autenticação  
Obs: já existe um script definido para isso no arquivo `package.json`  
  
2 - Utilize o ngrok para se comunicar com o localhost, local onde está rodando o `json-server`  
```sh
npx ngrok http 4231
```
O ngrok irá gerar um link público na internet o `Forwarding`. Será necessário copiar esse link e de forma manual colá-lo no método `fetch` presente nas telas de Login e Signup. Atentar-se para não alterar as rotas /login e /register.

3 - Por fim suba a aplicação com expo
```sh
npm run start
```
  
ou  
```sh
npm run android
```
para executar no emulador.
