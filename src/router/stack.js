import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login, Splash, Password } from '../screens';

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
                    initialRouteName='Password'
                    screenOptions={this._getScreenOptions()}
                >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Password" component={Password} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}