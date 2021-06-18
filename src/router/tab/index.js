import React, { useState, useRef, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Animated, StyleSheet, Dimensions, SafeAreaView, Vibration } from 'react-native';

import { Animate } from 'cyllid/src/services';
import Colors from 'cyllid/src/assets/colors';
import { HomeInitial, Invest, User } from '../../screens'
import { CircleSelect, IconButtons } from './commons';
import Curve from 'cyllid/src/assets/img/redonda.svg';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

export const TabNav = () => {

    const [indexSelect, setSelect] = useState(0);
    const distance = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Vibration.vibrate([100, 1000])
        setTimeout(() => Animate.smooth(indexSelect, distance, 800), 85)
    }, [indexSelect])

    const tabBarOptions = {
        style: styles.tab,
        showLabel: false,
    }

    const screens = [
        { name: HomeInitial, icon: { name: 'wallet', lib: 'Entypo' } },
        { name: Invest, icon: { name: 'account-balance', lib: 'MaterialIcons' } },
        { name: User, icon: { name: 'user', lib: 'AntDesign' } },
    ]

    const distanceSelect = distance.interpolate({
        inputRange: [0, 1],
        outputRange: [(width / screens.length) * 0 + 8, (width / screens.length) * 1 + 8]
    })

    return (
        <View style={styles.container}>
            <Tab.Navigator
                initialRouteName='Home'
                tabBarOptions={tabBarOptions}
            >
                {/* //separar isso em outro arquivo com memo pra nao renderizar varias vezes */}
                {screens.map((item, index) =>
                    <Tab.Screen
                        key={index}
                        name={`${item.name}`}
                        component={item.name}
                        listeners={{ tabPress: () => setSelect(index) }}
                    />
                )}
            </Tab.Navigator>
            <>
                <Animated.View style={styles.containerButtons}>
                    <Animated.View style={{ ...styles.containerButtonsLeft, width: distanceSelect }} />
                    <View style={styles.itemSelect}>
                        <Curve width={125} height={50} />
                        <CircleSelect
                            select={indexSelect}
                            item={screens[indexSelect]}
                        />
                    </View>
                    <View style={styles.containerButtonsRight} />
                    <View style={styles.containerIcons}>
                        {screens.map((item, index) =>
                            <IconButtons
                                key={index}
                                item={item}
                                width={width}
                                screens={screens}
                                indexSelect={indexSelect}
                            />
                        )}
                    </View>
                </Animated.View>
                <SafeAreaView style={styles.safeArea} />
            </>
        </View>
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
        zIndex: 9999,
        borderTopWidth: 0,
        position: 'absolute'
    },
    containerButtons: {
        bottom: 0,
        height: 50,
        width: '100%',
        flexDirection: 'row',
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
    },
    safeArea: {
        flexGrow: 0,
        backgroundColor: 'white',
    }
})