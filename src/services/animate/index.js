import { Animated, Easing } from 'react-native';

export class Animate {

    static default(value, state, time = 1500) {
        return new Promise(resolve => {
            Animated.timing(state,
                {
                    duration: time,
                    toValue: value,
                    useNativeDriver: false,
                }
            ).start(() => resolve());
        })
    }

    static smooth(value, state, time = 1500) {
        return new Promise(resolve => {
            Animated.timing(state,
                {
                    duration: time,
                    toValue: value,
                    useNativeDriver: false,
                    easing: Easing.out(Easing.exp),
                }
            ).start(() => resolve());
        })
    }

    static elastic(value, state, time = 1500) {
        return new Promise(resolve => {
            Animated.timing(state,
                {
                    duration: time,
                    toValue: value,
                    useNativeDriver: false,
                    easing: Easing.bounce
                }
            ).start(() => resolve());
        })
    }

}
