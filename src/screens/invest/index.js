import React from 'react';
import { Text, View } from 'react-native'

import Color from 'cyllid/src/assets/colors';

export const Invest = ({ }) => {

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
                Invest
            </Text>
        </View>
    )
}