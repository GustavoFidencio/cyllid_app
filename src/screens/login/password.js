import styles from './styles';

import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Keyboard, FlatList } from 'react-native';

import Color from '../../assets/colors';
import { AnimatedUser } from './helper';
import { InputValidation } from '../../helpers';

export class Password extends React.PureComponent {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.containerSafeArea}>
                <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
                <View style={{
                    ...styles.containerSeparation,
                    alignItems: 'center',
                    paddingHorizontal: 16
                }}>
                    <View style={{ width: '100%', }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}> Olá Giovane! </Text>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}> É um prazer ter você aqui com a gente :) </Text>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}> Nos informe sua senha e comece agora mesmo! </Text>
                    </View>

                    {/* <AnimatedUser>
                        <Text style={{ color: 'white', fontSize: 20 }}> teste </Text>
                    </AnimatedUser> */}
                    <View style={{ height: 200, width: '100%', flexDirection: 'row' }}>
                        <InputValidation
                            title={'Senha'}
                            placeholder={'123456'}
                        />
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 35, paddingLeft: 8 }}>60</Text>
                    </View>
                    <FlatList
                        data={[
                            { um: 5, dois: 4 },
                            { um: 9, dois: 2 },
                            { um: 1, dois: 0 },
                            { um: 3, dois: 8 },
                            { um: 6, dois: 7 },
                        ]}
                        renderItem={() => {
                            return (
                                <View>
                                </View>
                            )
                        }}

                    />


                </View>
            </SafeAreaView>
        )
    }
}