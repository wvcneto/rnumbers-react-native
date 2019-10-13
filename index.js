import React from 'react'; //Import ES6
var {Text, View, Button, AppRegistry} = require('react-native'); //Require CommomJS

const gerarNumero = () => {
  var num = Math.random();
  num = Math.floor(num * 10);
  alert(num);
};

const App = () => {
  return (
    <View>
      <Text>Primeira APP ReactNative</Text>
      <Button title="Gerar um número randômico." onPress={gerarNumero} />
    </View>
  );
};

AppRegistry.registerComponent('rnumbers', () => App);
