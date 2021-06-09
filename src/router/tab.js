import React, { useState, useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Animate } from 'cyllid/src/services';
import Colors from 'cyllid/src/assets/colors';
import { HomeInitial, Invest, User } from '../screens';
import Bola from 'cyllid/src/assets/img/redonda.svg';
import { CircleSelect, IconButtons } from './commons';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

export const TabNav = ({ }) => {

    const [indexSelect, setSelect] = useState(0);
    const distance = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        (async () =>
            setTimeout(() => Animate.smooth(indexSelect, distance, 800), 85)
        )();
    }, [indexSelect])

    const tabBarOptions = {
        style: styles.tab,
        showLabel: false,
        activeTintColor: 'white',
    }

    const screens = [
        {
            name: HomeInitial,
            icon: { name: 'wallet', lib: 'Entypo' },
        },
        {
            name: Invest,
            icon: { name: 'account-balance', lib: 'MaterialIcons' },
        },
        {
            name: User,
            icon: { name: 'user', lib: 'AntDesign' },
        },
    ]

    const distanceSelect = distance.interpolate({
        inputRange: [0, 1],
        outputRange: [(width / screens.length) * 0 + 8, (width / screens.length) * 1 + 8]
    })

    //quando ele navega de uma lado para o outro e passa por um item do meio ele tem que sumir tbm, fazer isso

    return (
        <View style={styles.container}>
            <Tab.Navigator
                initialRouteName='Home'
                tabBarOptions={tabBarOptions}
            >
                {screens.map((item, index) =>
                    <Tab.Screen
                        key={index}
                        name={`${item.name}`}
                        component={item.name}
                        listeners={{ tabPress: () => setSelect(index) }}
                    />
                )}
            </Tab.Navigator>
            <Animated.View style={styles.containerButtons}>
                <Animated.View style={{ ...styles.containerButtonsLeft, width: distanceSelect }} />
                <View style={styles.itemSelect}>
                    <Bola width={125} height={50} />
                    <CircleSelect
                        item={screens[indexSelect]}
                        select={indexSelect}
                    />
                </View>
                <View style={styles.containerButtonsRight} />
                <View style={styles.containerIcons}>
                    {
                        screens.map((item, index) =>
                            <IconButtons
                                item={item}
                                index={index}
                                width={width}
                                screens={screens}
                                select={screens[indexSelect].icon}
                            />
                        )
                    }
                </View>
            </Animated.View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        bottom: 0,
    },
    tab: {
        opacity: 0,
        zIndex: 10,
        borderTopWidth: 0,
    },
    containerButtons: {
        bottom: 0,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: Colors.DARK,
    },
    itemSelect: {
        left: -2,
        alignItems: 'center',
    },
    containerButtonsRight: {
        left: -3,
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    containerButtonsLeft: {
        width: 100,
        height: '100%',
        backgroundColor: 'white',
    },
    containerIcons: {
        position: 'absolute',
        flexDirection: 'row',
    }
})