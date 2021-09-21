import { Animated, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState, memo } from 'react';

import { Animate } from 'cyllid/src/services';
import Image from 'cyllid/src/assets/img/undrawHiking';

export const Ilustrator = memo(({ show }) => {

    const [height, setHeight] = useState(100);
    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animate.default(show ? 1 : 0, valueAnimate, show ? 800 : 200)
    }, [show]);

    return (
        <Animated.View
            onLayout={e => {
                var { height } = e.nativeEvent.layout;
                if (height > 210) height = 210;
                setHeight(height - 10)
            }}
            style={{ ...styles.container, opacity: valueAnimate }}
        >
            <Image height={height} />
        </Animated.View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})