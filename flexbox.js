import React, {useState} from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

function App(){
  const [nome, setNome] = useState('Renato');
  const [idade, setIdade] = useState(20);

  function entrar(){
    setNome('Sujeito Programador')
    setIdade(25);

  }

 return(
    <View style={style.area}>

            <View style={{ 
              flex:1, 
              backgroundColor: '#121212', 
              flexDirection: 'row', 
              justifyContent: 'center', 
              alignItems: 'flex-end' 
              }}>

              <View style={{ height:100, width: 50, backgroundColor: 'red'}}></View>
              <View style={{ height:50, width: 50, backgroundColor: 'blue'}}></View>
              <View style={{ height:50, width: 50, backgroundColor: 'yellow'}}></View>
              

            </View>
              

            <View style={{ flex:6, backgroundColor: '#DDD' }}>

            <Button title="Mudar nome" onPress={entrar} />

            <Text style={[style.titulo, style.textoAlinhado]}>{nome}</Text>
            <Text style={style.titulo}>{idade}</Text>
            <Text style={style.subTitulo}>Sou um texto 3</Text>

            </View>


            <View style={{ flex:1, backgroundColor: '#121212' }}></View>


     </View>
  );
}

const style = StyleSheet.create({
  area:{
    marginTop: 0,
    flex:1,
    backgroundColor: '#121212'
  },
  titulo:{
    fontSize: 20,
    color: '#FF0000'
  },
  subTitulo:{
    color: '#00FF00',
    fontSize: 17,
    marginTop: 15
  },
  textoAlinhado:{
    textAlign: 'center'
  }
});


export default App;