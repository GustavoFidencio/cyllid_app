import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login } from '../screens';

const Stack = createStackNavigator();

export class StackNav extends React.PureComponent {
    constructor() {
        super();
    }

    _getScreenOptions() {
        return {
            headerTitle: false,
            headerTransparent: true,
            headerTintColor: 'white',
        }
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Login'
                    screenOptions={this._getScreenOptions()}
                >
                    <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}