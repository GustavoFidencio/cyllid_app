import styles from './styles';

import React from 'react';
import { Text, SafeAreaView, StatusBar, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Color from '../../assets/colors';
import { CyllidAnimated, NameUser } from './helper';

export class Splash extends React.PureComponent {

    constructor() {
        super();
        this.state = {
            auth: '',

        }
        this.nextAction = this._nextAction.bind(this);
    }

    componentDidMount() {
        this._checkToken();
    }

    _checkToken() {
        AsyncStorage.getItem('token')
            .then(auth => this.setState({ auth }))
    }

    _nextAction() {
        if (false) {
            // if (this.state.auth) {
            this.props.navigation.replace('Home')
        } else {
            this.props.navigation.replace('Login')
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
                <CyllidAnimated
                    finaly={this.nextAction}
                />
                {/* <NameUser

                /> */}
            </SafeAreaView>
        )
    }
}