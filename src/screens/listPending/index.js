import styles from './styles';

import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Color from 'cyllid/src/assets/colors';
import { StorageListPending } from './storage';
import { TextClean, Icon, Load, } from 'cyllid/src/helpers';

export const ListPending = ({ navigation }) => {

    const [users, setUsers] = useState([]);
    const [isLoad, setLoad] = useState(true);

    useEffect(() => _getUser(), [])

    const _getUser = () => {
        StorageListPending.getUsersPending()
            .then(res => {
                setUsers(res)
                // console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoad(false);
            })
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.goBack}
                    onPress={() => navigation.goBack()}
                >
                    <Icon size={23} name={'left'} lib={'antdesign'} />
                    <TextClean
                        style={{
                            fontSize: 17,
                            color: Color.BLUE,
                            fontFamily: 'Nunito-Bold',
                            // textAlign: 'center'
                        }}
                    >
                        Menu
                    </TextClean>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        right: 10,
                        // top: 10,
                        padding: 5,
                        borderRadius: 30,
                        position: 'absolute',
                        paddingHorizontal: 10,
                        backgroundColor: 'white',

                    }}
                    onPress={() => console.log('opa')}
                >
                    <TextClean
                        style={{
                            color: Color.DARK,
                            fontFamily: 'Nunito-Bold',

                        }}
                    >
                        Selecionar
                    </TextClean>
                </TouchableOpacity>


                {
                    isLoad ?
                        <View
                            style={{
                                width: '100%',
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Load
                                size={42}
                            />
                        </View>
                        :
                        <>
                            <TextClean
                                style={{
                                    fontSize: 20,
                                    color: 'white',
                                    marginTop: 40,
                                    fontFamily: 'Nunito-Bold',
                                    // textAlign: 'center'
                                }}
                            >
                                Usuários Pendentes
                            </TextClean>
                            <FlatList
                                style={{
                                    width: '100%',
                                    marginTop: 15,
                                    // backgroundColor: 'purple',
                                }}
                                data={users}
                                keyExtractor={(_, index) => String(index)}
                                renderItem={({ item }) => {
                                    const { cpf, email, full_name } = item;
                                    return (
                                        <View
                                            style={{
                                                height: 60,
                                                width: '100%',
                                                // backgroundColor: 'red',
                                                alignItems: 'center',
                                                flexDirection: 'row',
                                            }}
                                        >
                                            <Icon
                                                size={20}
                                                style={{
                                                    opacity: .9,
                                                    marginHorizontal: 15,
                                                }}
                                                name={'user'}
                                                color={'white'}
                                            />
                                            <View style={{ flex: 1 }}>
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        // backgroundColor: 'purple',
                                                        justifyContent: 'space-between'
                                                    }}
                                                >
                                                    <TextClean
                                                        style={{
                                                            opacity: .9,
                                                            fontSize: 16,
                                                            color: 'white',
                                                            fontFamily: 'Nunito-Bold',
                                                        }}
                                                    >
                                                        {full_name}
                                                    </TextClean>
                                                    <TextClean
                                                        style={{
                                                            opacity: .3,
                                                            fontSize: 12,
                                                            color: 'white',
                                                            fontFamily: 'Nunito-Bold',
                                                        }}
                                                    >
                                                        {cpf}
                                                    </TextClean>
                                                </View>
                                                <TextClean
                                                    style={{
                                                        opacity: .75,
                                                        fontSize: 13,
                                                        color: 'white',
                                                        fontFamily: 'Nunito-Regular',
                                                    }}
                                                >
                                                    {email}
                                                </TextClean>
                                            </View>
                                        </View>
                                    )
                                }
                                }
                                ItemSeparatorComponent={() =>
                                    <View
                                        style={{
                                            height: .5,
                                            width: '100%',
                                            backgroundColor: 'gray',
                                        }}
                                    />
                                }
                            />
                        </>
                }
            </View>
        </SafeAreaView>
    )
}