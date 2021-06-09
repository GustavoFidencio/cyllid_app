import React from 'react';
import { Text, View } from 'react-native'

import Color from 'cyllid/src/assets/colors';

export const HomeInitial = ({ }) => {

    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.DARK,
        }}>
            <Text
                style={{
                    color: 'white'
                }}
            >
                Home
            </Text>
        </View>
    )
}