import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import BaseScreen from './base';
import PocketContext from '../contexts/pocketContext';

const AddPocketScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [limit, setMax] = useState('');
  const [balance, setCurrent] = useState('');
  const [color, setColor] = useState('');
  const { dispatch } = useContext(PocketContext);

  const handleSave = () => {
    dispatch({
      type: 'ADD',
      pocket: { id: Date.now(), name, balance, limit },
    });
    console.log('save');
  };

  return (
    <BaseScreen>
      <View>
        <Text>Enter in your new pocket details</Text>
        <TextInput
          label='Name'
          mode={'outlined'}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          label='Description'
          mode={'outlined'}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TextInput
          keyboardType={'number-pad'}
          label='Max amount'
          mode={'outlined'}
          value={limit}
          onChangeText={(text) => setMax(text)}
        />
        <TextInput
          keyboardType={'number-pad'}
          defaultValue={'0.00'}
          label='Current amount'
          mode={'outlined'}
          value={balance}
          onChangeText={(text) => setCurrent(text)}
        />
        <TextInput
          label='Color'
          mode={'outlined'}
          value={color}
          onChangeText={(text) => setColor(text)}
        />
        <Button
          mode={'contained-tonal'}
          style={{ marginTop: 16 }}
          onPress={handleSave}>
          Save pocket
        </Button>
      </View>
    </BaseScreen>
  );
};
export default AddPocketScreen;
