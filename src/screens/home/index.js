import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native'

import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon } from 'cyllid/src/helpers';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const HomeInitial = ({ }) => {

    return (
        <>
            <SafeAreaView
                style={{
                    flexGrow: 0, backgroundColor: 'white'
                }}
            />
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: Color.DARK,
                // backgroundColor: 'white',

            }}>
                <StatusBar backgroundColor={Color.DARK} barStyle="dark-content" />
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <View
                        style={{
                            paddingBottom:15,
                            paddingHorizontal: 13,
                            backgroundColor: 'white',
                            borderBottomLeftRadius:40,
                            borderBottomRightRadius:40,
                        }}
                    >

                        <View style={{
                            width: '100%',
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <TextClean
                                style={{
                                    fontSize: 20,
                                    color: Colors.DARK,
                                    fontFamily: 'Nunito-Bold',
                                }}
                            >
                                Giovane
                            </TextClean>
                            <TextClean
                                style={{
                                    fontSize: 20,
                                    color: Colors.DARK,
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
                                    color: Colors.DARK,
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
                                        top: 3,
                                        fontSize: 13,
                                        color: Color.BLUE,
                                        fontFamily: 'Nunito-Bold',
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
                    </View>


                </View>
                <View >
                    <ScrollView
                        horizontal
                        style={{
                            top: 5,
                            height: 165
                        }}
                        showsHorizontalScrollIndicator={false}
                    >
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            // colors={['#3CE8A4', '#1AD46D']}
                            colors={['#1AD46D', '#1c6639']}
                            style={{
                                width: 220,
                                height: 120,
                                marginLeft: 13,
                                borderWidth: 1,
                                borderRadius: 11,
                                flexDirection: 'row',
                                borderColor: 'white',
                                alignItems: 'flex-end',
                                backgroundColor: 'green',
                            }}
                        >
                            <TextClean
                                style={{
                                    opacity: .5,
                                    fontSize: 42,
                                    color: 'white',
                                    fontFamily: 'Nunito-Black',
                                    left: 8
                                }}
                            >
                                Entrada
                            </TextClean>
                            <Icon
                                style={{
                                    top: 0,
                                    right: 10,
                                    opacity: .2,
                                    position: 'absolute',
                                }}
                                size={100}
                                lib={'Feather'}
                                color={'white'}
                                name={'trending-up'}
                            />
                        </LinearGradient>

                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#C91920', '#951B22']}
                            style={{
                                width: 220,
                                height: 120,
                                marginLeft: 13,
                                borderWidth: 1,
                                marginRight: 13,
                                borderRadius: 11,
                                flexDirection: 'row',
                                borderColor: 'white',
                                alignItems: 'flex-end',
                                backgroundColor: 'green',
                            }}
                        >
                            <TextClean
                                style={{
                                    opacity: .5,
                                    fontSize: 42,
                                    color: 'white',
                                    fontFamily: 'Nunito-Black',
                                    left: 8
                                }}
                            >
                                Saida
                            </TextClean>
                            <Icon
                                style={{
                                    // fontSize: 30
                                    right: 10,
                                    position: 'absolute',
                                    opacity: .2
                                    // backgroundColor:'purple'
                                }}
                                size={100}
                                lib={'Feather'}
                                color={'white'}
                                name={'trending-down'}
                            />
                        </LinearGradient>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    )
}