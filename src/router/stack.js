import * as React from 'react';
import { Animated, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { TabNav } from './tab';
import Color from 'cyllid/src/assets/colors'
import {
    Input,
    Login,
    Terms,
    Splash,
    Password,
    SolicitAccess,
} from '../screens';

const Stack = createStackNavigator();

export const StackNav = () => {

    const _getScreenOptions = {
        headerTitle: false,
        headerTransparent: true,
    }

    const _animatedBottom = ({ current, next, inverted, layouts: { screen } }) => {
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

    const _noneArrow = () => <View></View>

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Splash'
                screenOptions={_getScreenOptions}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ header: _noneArrow }}
                    options={{ cardStyleInterpolator: _animatedBottom }}
                />
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ header: _noneArrow }}
                />
                <Stack.Screen
                    name="Terms"
                    component={Terms}
                    options={{ header: _noneArrow }}
                />
                <Stack.Screen
                    name="Password"
                    component={Password}
                    options={{ header: _noneArrow }}
                />
                <Stack.Screen
                    name="TabNav"
                    component={TabNav}
                    options={{ header: _noneArrow }}
                />
                <Stack.Screen
                    name="SolicitAccess"
                    component={SolicitAccess}
                    options={{ header: _noneArrow }}
                />
                <Stack.Screen
                    name="Input"
                    component={Input}
                    options={{ header: _noneArrow }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}