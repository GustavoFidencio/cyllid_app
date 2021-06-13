import React from 'react';
import { Text, View, SafeAreaView } from 'react-native'

import Color from 'cyllid/src/assets/colors';

export const HomeInitial = ({ }) => {

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
                    Home
                </Text>
            </View>
        </SafeAreaView>
    )
}