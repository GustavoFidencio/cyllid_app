import { Animated, Easing } from 'react-native';

export class Animate {

    static default(toValue, state, duration = 1500, useNativeDriver = false, onComplete) {
        Animated.timing(state, {
            toValue,
            duration,
            onComplete,
            useNativeDriver,
        }).start();
    }

    static smooth(toValue, state, duration = 1500, onComplete, useNativeDriver = false) {
        Animated.timing(state, {
            toValue,
            duration,
            onComplete,
            useNativeDriver,
            easing: Easing.out(Easing.exp),
        }).start();
    }

    static elastic(toValue, state, duration = 1500, useNativeDriver = false, onComplete) {
        Animated.timing(state, {
            toValue,
            duration,
            onComplete,
            useNativeDriver,
            easing: Easing.bounce,
        }).start();
    }

    static elasticPersonalizado(toValue, state, duration = 1500, useNativeDriver = false, onComplete) {
        Animated.timing(state, {
            toValue,
            duration,
            onComplete,
            useNativeDriver,
            easing: Easing.inOut(Easing.elastic(1)),
        }).start();
    }
}