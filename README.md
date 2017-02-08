#React Native/Redux
Repositório de estudo do curso [The Complete React Native and Redux](https://www.udemy.com/the-complete-react-native-and-redux-course/)

> Updates neste README acontecerão de acordo com o avanço no conteúdo do curso

###Setup
Softwares necessários para a construção e/ou execução
* [Java SDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* [Python 2.7](https://www.python.org/downloads/) ou superior (*Não pode ser 3+*)
* [Android Studio](https://developer.android.com/studio/index.html)
* [NodeJS](https://nodejs.org/en/download/)

Necessária a instalação do [react-native-cli](https://npmjs.com/package/react-native-cli)
```
npm -i -g react-native-cli
```

Os pacotes são separados por projeto, sendo instalados pelo comando
```
npm install
```

###Startup
iOS
```
react-native run-ios
```

Android
```
react-native run-android
```

###React vs React Native
**React**
* Sabe como um componente deve se comportar
* Sabe como fazer diversos componentes trabalharem em conjunto

**React Native** 
* Sabe como obter o output de um componente e renderizar na tela
* Provê os componentes básicos, como imagens, textos, etc

###Componente Funcional vs Componente de Classe
**Componente Funcional**
* Usado para dados estáticos
* Não possuem capacidade para manipular dados dinâmicos
* Fácil de escrever

**Componente de Classe**
* Usado para dados dinâmicos
* Manipulam qualquer tipo de data dinâmica, como resultados de requests a APIs, eventos do usuário, etc
* Sabem quando vão renderizados
* Maior volume de código

###Redux

**Reducer:** Uma função que retorna algum tipo de dados
**Action:** Objeto Javascript que informa ao reducer como alterar os dados
**State:** Dados da aplicação (inputs, etc)
**Store:** Objeto composto pelo *Reducer* e pelo *State*, responsável por armazenar os dados