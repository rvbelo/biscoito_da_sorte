import { PROPERTY_TYPES } from '@babel/types';
import React from 'react';
import { View, Text, Image } from 'react-native';

function App(){

let nome = 'Mateus Sujeito'
let img = 'https://sujeitoprogramador.com/reactlogo.png';

  return(
    <View>
      
      <Text>Olá Mundo!!!!</Text>
      <Text style={{ color: '#FF0000', fontSize: 25, margin: 15}}>Meu Primeiro App</Text>
      <Text style={{ fontSize: 18, color: 'blue'}}>Sujeito Programador</Text>
      
      <Image
      source={{ uri: 'https://sujeitoprogramador.com/reactlogo.png' }}
      style={{ width: 300, height: 300}}
      />

      <Image
      source={{ uri: img}}
      style={{ width: 300, height: 300}}
      />
      
      <Text style={{ fontSize: 19}}>
        {nome}
      </Text>

      <Logo Largura={350} altura={150} fulano="Renato Vieira" />

    </View>
  )
}

export default App;

function Logo(props){
  let img = 'https://sujeitoprogramador.com/reactlogo.png';
  return(
    <View>
    <Image source={{ uri: img}} Style={{ width: props.largura, height: props.altura}} />
    <Text>{props.fulano}</Text>
    </View>
  );
}