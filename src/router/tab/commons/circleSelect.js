import LottieView from 'lottie-react-native';
import { Animated, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState, memo } from 'react';

import { Animate } from 'cyllid/src/services';
import User from 'cyllid/src/assets/videos/user.json';
import Wallet from 'cyllid/src/assets/videos/wallet.json';
import Ballance from 'cyllid/src/assets/videos/account_ballance.json';

export const CircleSelect = memo(({ select, item }) => {

    const screens = [
        { component: User, name: 'User' },
        { component: Wallet, name: 'Wallet' },
        { component: Ballance, name: 'Ballance' },
    ];
    const [icon, setIcon] = useState('Wallet');
    const bottom = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animate.smooth(0, bottom, 500)
        setTimeout(() => Animate.smooth(70, bottom, 800), 220);
    }, [select])

    useEffect(() => {
        setTimeout(() => {
            switch (item.icon.name) {
                case 'account-balance':
                    return setIcon('Ballance')
                case 'user':
                    return setIcon('User')
                default:
                    return setIcon('Wallet')
            }
        }, 100)
    }, [item])

    return (
        <Animated.View style={{ ...styles.container, bottom }}>
            {screens.map((item, index) =>
                item.name == icon &&
                <LottieView
                    autoPlay
                    key={index}
                    loop={false}
                    source={item.component}
                />
            )}
        </Animated.View>
    )
})

const styles = StyleSheet.create({
    container: {
        width: 55,
        height: 55,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
})