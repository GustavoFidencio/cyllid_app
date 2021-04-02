import styles from './styles';

import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Keyboard, FlatList } from 'react-native';

import Color from '../../assets/colors';
import { AnimatedUser } from './helper';
import { Touchables } from './passwordHelper';

export class Password extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            password: ''
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.containerSafeArea}>
                <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
                <View style={{ flex: 1, alignItems: 'center' }}>
                    {/* <View style={{ width: '100%', }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}> Olá Giovane! </Text>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}> É um prazer ter você aqui com a gente :) </Text>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}> Nos informe sua senha e comece agora mesmo! </Text>
                    </View> */}

                    {/* <AnimatedUser>
                        <Text style={{ color: 'white', fontSize: 20 }}> teste </Text>
                    </AnimatedUser> */}
                    {/* <View style={{ height: 200, width: '100%', flexDirection: 'row' }}> */}
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'white' }}>Senha</Text>
                        <Text style={{ color: Color.BLUE }}>Esqueceu sua senha?</Text>
                    </View>
                    <Touchables
                        onChange={password => this.setState({ password })}
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonNext}
                    onPress={() => this.setState({ error: !this.state.error })}
                >
                    <Text style={styles.textAvancar}> Avançar </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}