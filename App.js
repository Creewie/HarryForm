import { useState} from 'react';
import { StyleSheet, Text, View, Button , Alert, TextInput, Switch} from 'react-native';

import MyTextInput from './MyTextInput';
import MyButton from './MyButton';
import MySwitch from './MySwitch';

export default function App() {

  const [name, setName] = useState("")
  const [surName, setSurName] = useState("")
  const [powerLVL, setPowerLVL] = useState("")
  const [interests, setInterests] = useState("")
  const [pet, setPet] = useState("")
  const [sex, setSex] = useState(false)

  function sendData(){
    let info = `Imię: ${name}\nNazwisko: ${surName}\nPoziom magiczny: ${powerLVL}\nZainteresowania: ${interests}\nWyjątkowe zwierzątko: ${pet}\n${sex?'Wysłano sową':'Wysłano nudną pocztą'}`
    alert(info)
    console.log(info)
  }

  return (
    <View style={styles.container} >
    
    <MyTextInput 
      label="Imię"
      value={name}
      onChangeText={setName}
      placeholder="Wprowadź swoje imię:"
      />

    <MyTextInput 
      label="Nazwisko"
      value={surName}
      onChangeText={setSurName}
      placeholder="Wprowadź swoje nazwisko:"
      />

    <MyTextInput 
      label="Poziom mocy magicznej"
      value={powerLVL}
      onChangeText={setPowerLVL}
      placeholder="Wprowadź swój poziom mocy magicznej: (0-∞)"
      />

    <MyTextInput 
      label="Zainteresowania"
      value={interests}
      onChangeText={setInterests}
      placeholder="Wprowadź swoje zainteresowania:"
      />
      <MyTextInput 
      label="Wymyślny towarzysz"
      value={pet}
      onChangeText={setPet}
      placeholder="Gryf, Hydra, Lisz a może Centaur?"
      />

    <View style={{marginBottom:10, gap:5, alignItems:'center'}}>
    <Text>Wysłać list sową?</Text>
    <MySwitch value={sex} onClick={()=>{setSex(!sex)}}/>
    </View>
    
    <MyButton label='Aplikuj!' onPress={sendData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    margin: 'auto',
    justifyContent: 'center',
    maxWidth:350,
  },
});