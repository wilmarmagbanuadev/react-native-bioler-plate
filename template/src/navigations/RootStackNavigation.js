import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { HomeScreen,AboutScreen } from '../screens';

const Stack = createStackNavigator();

const RootStackNavigation = () => { 

    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Group screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                    />   
                     <Stack.Screen
                        name="AboutScreen"
                        component={AboutScreen}
                    />        
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStackNavigation;