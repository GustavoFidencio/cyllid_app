import { Animated, Easing } from 'react-native';

export class AnimatePromise {

    static default(toValue, state, duration = 1500, useNativeDriver = false) {
        return new Promise(resolve => {
            Animated.timing(state,
                {
                    toValue,
                    duration,
                    useNativeDriver,
                }
            ).start(() => resolve());
        })
    }

    static smooth(toValue, state, duration = 1500, useNativeDriver = false) {
        return new Promise(resolve => {
            Animated.timing(state,
                {
                    duration,
                    toValue,
                    useNativeDriver,
                    easing: Easing.out(Easing.exp),
                }
            ).start(() => resolve());
        })
    }

    static elastic(toValue, state, duration = 1500, useNativeDriver = false) {
        return new Promise(resolve => {
            Animated.timing(state,
                {
                    duration,
                    toValue,
                    useNativeDriver,
                    easing: Easing.bounce,
                }
            ).start(() => resolve());
        })
    }

    static elasticPersonalizado(toValue, state, duration = 1500, useNativeDriver = false) {
        return new Promise(resolve => {
            Animated.timing(state,
                {
                    duration,
                    toValue,
                    useNativeDriver,
                    easing: Easing.inOut(Easing.elastic(1)),
                }
            ).start(() => resolve());
        })
    }

}