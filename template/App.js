import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './src/redux/Store';
import AuthProvider from './src/navigations/AuthProvider';
import RootStackNavigation from './src/navigations/RootStackNavigation';
import { enableScreens } from 'react-native-screens';
import { SafeAreaView, StatusBar } from 'react-native';

enableScreens();

export default function App() {
  return (
    <Provider store={Store}>
        <AuthProvider>
          <SafeAreaView style={{flex: 1}}>
              <StatusBar />
              <RootStackNavigation />
          </SafeAreaView>
        </AuthProvider>
    </Provider>
  );
};