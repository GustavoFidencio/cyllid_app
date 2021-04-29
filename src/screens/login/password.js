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
            password: '',

        }
    }

    render() {
        return (
            <View style={{ paddingHorizontal: 16, flex: 1, backgroundColor: Color.DARK }}>
                <SafeAreaView style={styles.containerSafeArea}>
                    <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
                    <View style={{ justifyContent: 'center' }}>
                        {/* <View style={{ width: '100%', }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}> Olá Giovane! </Text>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}> É um prazer ter você aqui com a gente :) </Text> */}
                        {/* </View> */}

                        {/* <AnimatedUser>
                        <Text style={{ color: 'white', fontSize: 20 }}> teste </Text>
                    </AnimatedUser> */}
                        {/* <View style={{ height: 200, width: '100%', flexDirection: 'row' }}> */}
                        <Text style={styles.labelInstrucion}>
                            Agora insira sua senha!
                    </Text>
                        <View
                            style={styles.containerLabels}>
                            <Text style={styles.labelPassword}>
                                Senha
                        </Text>
                            <Text style={styles.labelExchangePassword}>
                                Esqueceu sua senha?
                        </Text>
                        </View>
                        <Touchables
                            onChange={password => this.setState({ password })}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.buttonNext}
                        onPress={() => this.setState({ error: !this.state.error })}
                    >
                        <Text style={styles.textAvancar}>
                            Avançar
                    </Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        )
    }
}