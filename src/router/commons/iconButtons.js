import { Animated, StyleSheet } from 'react-native';
import React, { useEffect, useRef, memo } from 'react';

import { Icon } from 'cyllid/src/helpers';
import { Animate } from 'cyllid/src/services';

export const IconButtons = memo(({ screens, item, width, select, index }) => {

    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (select.name == item.icon.name)
            Animate.default(0, opacity, 300)
        else
            Animate.default(1, opacity, 800)
    }, [select])

    return (
        <Animated.View
            key={index}
            style={{ ...styles.container, width: width / screens.length, opacity }}
        >
            <Icon
                size={30}
                color={'gray'}
                lib={item.icon.lib}
                name={item.icon.name}
            />
        </Animated.View>
    )
})

const styles = StyleSheet.create({
    container: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})