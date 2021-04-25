import styles from './styles';

import React from 'react';
import { CyllidAnimated } from './helper/cyllidAnimated';
import { Text, SafeAreaView, StatusBar, View } from 'react-native';

import Color from '../../assets/colors';


export class Splash extends React.PureComponent {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: Color.DARK, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
                <CyllidAnimated
                    finaly={() => setTimeout(() => this.props.navigation.replace('Login'), 1000)}
                />
            </SafeAreaView>
        )
    }
}