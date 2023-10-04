import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { FlashList } from '@shopify/flash-list';

import BaseScreen from './base';
import Constants from '../constants';
import PocketListItem from '../components/PocketListItem';
import PocketContext from '../contexts/pocketContext';

const HomeScreen = ({ navigation }) => {
  const { pockets } = useContext(PocketContext);

  return (
    <BaseScreen>
      <View style={styles.list}>
        <FlashList
          data={pockets}
          renderItem={({ item }) => (
            <PocketListItem
              pocket={item}
              onPress={() =>
                navigation.navigate({
                  name: Constants.routes.transactions,
                  params: { pocket: item.name },
                })
              }
            />
          )}
          estimatedItemSize={10}
          ListFooterComponent={() => (
            <Button
              mode={'text'}
              onPress={() => navigation.navigate(Constants.routes.addPocket)}>
              Add pocket
            </Button>
          )}
        />
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  headline: {
    marginBottom: 16,
  },
  list: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
