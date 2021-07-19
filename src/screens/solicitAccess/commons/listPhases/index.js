import React, { useRef, memo, useState, useEffect } from 'react';
import { Animated, StyleSheet, Dimensions, View } from 'react-native';

import { Progress } from '../';
import { Basic } from './basic';
import { Important } from './important';
import { AccessApp } from './accessApp';
import { StoragePhases } from './storage';
import { Animate } from 'cyllid/src/services';
import { StorageSolicitAccess } from '../../storage';

const phases = [
    { Comp: Basic },
    { Comp: Important },
    { Comp: AccessApp }
];

const { width } = Dimensions.get('window');

export const ListPhases = memo(({ show, navigation }) => {

    const [user, setUser] = useState({});
    const scrollX = useRef(new Animated.Value(0)).current;
    const valueAnimate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (show) setTimeout(() => Animate.smooth(100, valueAnimate, 800), 600)
    }, [show])

    useEffect(() => {
        setTimeout(() => Animate.smooth(100, scrollX), 5500);
        //tentar fazer isso executar somente quando realmente aparece... trocar o show por { show && .... }
    }, [])

    const _solicitAccess = val => {
        StorageSolicitAccess.solicitAccess(user, val)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const _next = (index, val) => {
        if (index != phases.length) _setUser(val, index);
        else _solicitAccess(val);
    }

    const _back = async (index) => {
        if (index == 0) navigation.goBack();
        else {
            setUser(await StoragePhases.deleteInfo(user, index));
            Animate.smooth(index * 100, scrollX)
        }
    }

    const _setUser = async (val, index) => {
        setUser(await StoragePhases.setUser(val, user));
        Animate.smooth((index + 1) * 100, scrollX)
    }

    const transform = [{
        translateX: scrollX.interpolate({
            inputRange: [100, 300],
            outputRange: [0, -width * 2],
            extrapolate: 'clamp'
        })
    }];

    return (
        show &&
        <View style={{ width }}>
            <Progress
                scroll={scrollX}
                valueAnimate={valueAnimate}
            />
            <Animated.View style={{ ...styles.containerPhases, transform }} >
                {phases.map((item, index) =>
                    <item.Comp
                        key={index}
                        back={() => _back(index)}
                        next={val => _next(index + 1, val)}
                        valueAnimate={index == 0 && valueAnimate}
                    />
                )}
            </Animated.View>
        </View>
    )
})

const styles = StyleSheet.create({
    containerPhases: {
        height: '100%',
        width: width * 3,
        overflow: 'hidden',
        flexDirection: 'row',
    }
})