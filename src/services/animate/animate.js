import { Animated, Easing } from 'react-native';

export class Animate {

    static default(toValue, state, duration = 1500, useNativeDriver = false, onComplete) {
        Animated.timing(state, {
            toValue,
            duration,
            useNativeDriver,
            onComplete: () => onComplete
        }).start();
    }

    static smooth(toValue, state, duration = 1500, onComplete, useNativeDriver = false) {
        Animated.timing(state, {
            toValue,
            duration,
            useNativeDriver,
            easing: Easing.out(Easing.exp),
            onComplete: () => onComplete,
        }).start();
    }

    static elastic(toValue, state, duration = 1500, useNativeDriver = false, onComplete) {
        Animated.timing(state, {
            toValue,
            duration,
            useNativeDriver,
            easing: Easing.bounce,
            onComplete: () => onComplete,
        }).start();
    }

    static elasticPersonalizado(toValue, state, duration = 1500, useNativeDriver = false, onComplete) {
        Animated.timing(state, {
            toValue,
            duration,
            useNativeDriver,
            onComplete: () => onComplete,
            easing: Easing.inOut(Easing.elastic(1)),
        }).start();
    }
}