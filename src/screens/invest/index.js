import React from 'react';
import { Text, View, SafeAreaView } from 'react-native'

import Color from 'cyllid/src/assets/colors';

export const Invest = ({ }) => {

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: Color.DARK,
            }}
        >
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        color: 'white',
                        fontFamily: 'Nunito-Bold',
                    }}
                >
                    Em Breve!
                </Text>
            </View>
        </SafeAreaView>
    )
}