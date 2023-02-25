import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('AboutScreen')}>HomeScreen</Text>
    </View>
  );
}
