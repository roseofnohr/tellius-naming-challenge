import { React, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const allChars = [
    'ike',
    'titania',
    'boyd',
    'oscar',
    'rhys',
    'shinon',
    'gatrie',
    'soren',
    'mia',
    'ilyana',
    'rolf',
    'mist',
    'marcia',
    'lethe',
    'mordecai',
    'volke',
    'kieran',
    'nephenee',
    'brom',
    'zihark',
    'sothe',
    'jill',
    'astrid',
    'makalov',
    'stefan',
    'tormod',
    'muarim',
    'devdan',
    'tanith',
    'reyson',
    'ulki',
    'janaff',
    'calill',
    'tauroneo',
    'ranulf',
    'haar',
    'bastian',
    'lucia',
    'geoffrey',
    'largo',
    'elincia',
    'nasir',
    'ena',
    'tibarn',
    'naesala',
    'giffca',
    'micaiah',
    'edward',
    'leonardo',
    'nolan',
    'laura',
    'aran',
    'meg',
    'volug',
    'fiona',
    'vika',
    'nailah',
    'rafiel',
    'leanne',
    'nealuchi',
    'heather',
    'lyre',
    'kyza',
    'sigrun',
    'sanaki',
    'skrimir',
    'oliver',
    'caineghis',
    ' kurthnaga',
    'renning',
    'gareth',
    'pelleas',
    'lehran',
    'the black knight',
  ];
  const [unnamed, setUnnamed] = useState([
    'ike',
    'titania',
    'boyd',
    'oscar',
    'rhys',
    'shinon',
    'gatrie',
    'soren',
    'mia',
    'ilyana',
    'rolf',
    'mist',
    'marcia',
    'lethe',
    'mordecai',
    'volke',
    'kieran',
    'nephenee',
    'brom',
    'zihark',
    'sothe',
    'jill',
    'astrid',
    'makalov',
    'stefan',
    'tormod',
    'muarim',
    'devdan',
    'tanith',
    'reyson',
    'ulki',
    'janaff',
    'calill',
    'tauroneo',
    'ranulf',
    'haar',
    'bastian',
    'lucia',
    'geoffrey',
    'largo',
    'elincia',
    'nasir',
    'ena',
    'tibarn',
    'naesala',
    'giffca',
    'micaiah',
    'edward',
    'leonardo',
    'nolan',
    'laura',
    'aran',
    'meg',
    'volug',
    'fiona',
    'vika',
    'nailah',
    'rafiel',
    'leanne',
    'nealuchi',
    'heather',
    'lyre',
    'kyza',
    'sigrun',
    'sanaki',
    'skrimir',
    'oliver',
    'caineghis',
    ' kurthnaga',
    'renning',
    'gareth',
    'pelleas',
    'lehran',
    'the black knight',
  ]);
  const [charname, setCharName] = useState('Enter names here!');
  const [score, setScore] = useState(0);
  const [named, setNamed] = useState([]);

  const removingNames = () => {
    let index = unnamed.indexOf(charname);
    if (index !== -1) {
      setUnnamed(unnamed.toSpliced(index, 1));
      setScore(score + 1);
      setNamed([...named, charname]);
    }
  };
  const allCharacters = () => {
    alert(allChars.tostring());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}> {score} / 73 </Text>
      <Text style={styles.paragraph}>Fire Emblem Tellius Naming Challenge</Text>
      <Text style={styles.subheading}> Made by roseofnohr on Tumblr </Text>
      <Text style={styles.text}>
        {' '}
        Name as many playable characters from Fire Emblem Path of Radiance and
        Radiant Dawn as you can!
      </Text>
      <Text style={styles.note}>
        {' '}
        Let me know if anyone's missing/if there are any issues. Press the 'Give
        up?' button to trigger a pop-up with all character names.{' '}
      </Text>
      <TextInput
        style={styles.input}
        onClick={(e) => setCharName('')}
        onChangeText={(e) => setCharName(e.toLowerCase())}
        value={charname}
        onSubmitEditing={(e) => removingNames()}
      />
      <Text style={styles.names}> Already named: {named.toString()} </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          alert(allChars.toString());
        }}>
        <Text style={styles.buttonText}> Give up? </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  note: {
    fontSize: 15,
    fontFamily: 'Courier',
    textAlign: 'center',
    paddingTop: 10,
  },
  buttonText: {
    fontFamily: 'Courier',
    color: 'white',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Courier',
    textAlign: 'center',
    paddingTop: 20,
  },
  names: {
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Courier',
    color: '#7851a9',
    fontWeight: 'bold',
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Courier',
    color: '#7851a9',
  },
  subheading: {
    fontSize: 20,
    fontweight: 'bold',
    textAlign: 'center',
    fontFamily: 'Courier',
    paddingTop: 15,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    alignItems: 'center',
    fontFamily: 'Courier',
  },
  button: {
    backgroundColor: '#7851a9',
    fontFamily: 'Courier',
    textAlign: 'center',
    borderRadius: 25,
    padding: 10,
  },
  score: {
    fontSize: 30,
    position: 'absolute',
    top: 0,
    right: 0,
    fontFamily: 'Courier',
    fontWeight: 'Bold',
    color: '#7851a9',
  },
});
