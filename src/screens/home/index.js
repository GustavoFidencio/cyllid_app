import React from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native'

import Color from 'cyllid/src/assets/colors';
import { TextClean } from 'cyllid/src/helpers';

export const HomeInitial = ({ }) => {

    return (
        <SafeAreaView style={{
            flex: 1,
            paddingHorizontal: 13,
            backgroundColor: Color.DARK,
        }}>
            <View style={{
                marginTop: 20,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <TextClean
                    style={{
                        color: 'white',
                        fontSize: 20,
                        fontFamily: 'Nunito-Bold',
                    }}
                >
                    Giovane
                </TextClean>
                <TextClean
                    style={{
                        fontSize: 20,
                        color: 'white',
                        fontFamily: 'Nunito-Bold',
                    }}
                >
                    Jun/21
                </TextClean>
            </View>
            <View
                style={{
                    marginTop: 30
                }}
            >
                <TextClean
                    style={{
                        fontSize: 18,
                        color: 'white',
                        fontFamily: 'Nunito',
                    }}
                >
                    Seu saldo hoje:
                </TextClean>
                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <TextClean
                        style={{
                            fontSize: 13,
                            color: Color.BLUE,
                            fontFamily: 'Nunito-Bold',
                            top: 3,
                        }}
                    >
                        R$
                    </TextClean>
                    <TextClean
                        style={{
                            left: 5,
                            fontSize: 30,
                            color: Color.BLUE,
                            fontFamily: 'Nunito-Black',
                        }}
                    >
                        4.513,20
                    </TextClean>
                </View>
            </View>
            <ScrollView
            >
                <View
                    style={{
                        width: 170,
                        height: 120,
                        borderRadius: 15,
                        // backgroundColor: 'rgba(256,256,256, .8)',
                        backgroundColor: '#181548'
                    }}
                >

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}