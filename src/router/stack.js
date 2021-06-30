import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Animated, SafeAreaView, StyleSheet } from 'react-native';

import { TabNav } from './tab';
import Color from 'cyllid/src/assets/colors'
import {
    Login,
    Splash,
    Password,
    SolicitAccess
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

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='SolicitAccess'
                screenOptions={_getScreenOptions}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ cardStyleInterpolator: _animatedBottom }}
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
                    name="TabNav"
                    component={TabNav}
                />
                <Stack.Screen
                    name="SolicitAccess"
                    component={SolicitAccess}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.DARK
    }
})