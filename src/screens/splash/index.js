import styles from './styles';

import React from 'react';
import { Text, SafeAreaView, StatusBar, View } from 'react-native';

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
        let token = false;
        this.setState({ auth: token });
    }

    _nextAction() {
        if (this.state.auth) {

        } else {
            setTimeout(() => this.props.navigation.replace('Login'), 1000)
        }
    }

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: Color.DARK, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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