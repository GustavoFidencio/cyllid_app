import * as React from 'react';
import { Animated } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login, Splash, Password, Home } from '../screens';

const Stack = createStackNavigator();

export class StackNav extends React.PureComponent {

    constructor() {
        super();
    }

    _getScreenOptions() {
        return {
            headerTitle: false,
            headerTransparent: true,
        }
    }

    animatedBottom({ current, next, inverted, layouts: { screen } }) {
        const progress = Animated.add(
            current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolate: 'clamp',
            }),
            next ?
                next.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                    extrapolate: 'clamp',
                })
                :
                0
        );

        return {
            cardStyle: {
                transform: [{
                    translateY: Animated.multiply(
                        progress.interpolate({
                            extrapolate: 'clamp',
                            inputRange: [0, 1, 2],
                            outputRange: [screen.height, 0, screen.height * -.3],
                        }), inverted
                    ),
                }]
            }
        };
    };

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Splash'
                    screenOptions={this._getScreenOptions()}
                >
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ cardStyleInterpolator: this.animatedBottom }}
                    />
                    <Stack.Screen
                        name="Splash"
                        component={Splash}
                    />
                    <Stack.Screen
                        name="Password"
                        component={Password}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}