import styles from './styles';

import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';

export class Login extends React.PureComponent {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <SafeAreaView style={styles.containerSafeArea}>
                <StatusBar backgroundColor={'#030336'} barStyle="light-content" />
                <View style={styles.containerSeparation}>
                    <View style={styles.containerApresentation}>
                        <Text style={styles.textNameApp}>Cyllid</Text>
                        <View style={styles.containerDescApp}>
                            <Text style={styles.textDescApp}>Online, simples e prático.</Text>
                        </View>
                    </View>
                    <View style={{ height: 250, width: '100%', backgroundColor: 'green' }}>

                    </View>

                </View>
            </SafeAreaView>
        )
    }
}