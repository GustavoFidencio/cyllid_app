import React from 'react';
import { Text, View, SafeAreaView } from 'react-native'

import Color from 'cyllid/src/assets/colors';

export const Invest = ({ }) => {

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Color.DARK,
        }}>
            <View style={{
                flex: 1,
            }}>
                <Text
                    style={{
                        color: 'white'
                    }}
                >
                    Invest
                </Text>
            </View>
        </SafeAreaView>
    )
}