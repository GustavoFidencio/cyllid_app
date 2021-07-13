import styles from './styles';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, Animated } from 'react-native'

import { Animate } from 'cyllid/src/services';
import { WelcomeAnimate, HelloAnimate, ListPhases } from './commons';

export const SolicitAccess = () => {

    const [show, setShow] = useState(false);
    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => Animate.default(110, valueAnimate, 4800, _setShow), []);

    const _setShow = () => setShow(true);

    return (
        <SafeAreaView style={styles.safeArea}>
            <HelloAnimate faded={valueAnimate} />
            <WelcomeAnimate faded={valueAnimate} />
            <ListPhases
                show={show}
            />
        </SafeAreaView>
    )
}