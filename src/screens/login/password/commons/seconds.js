import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Color from 'cyllid/src/assets/colors';

export class Seconds extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            value: 60
        }
        this.interval
    }

    _progress() {
        this.interval = setInterval(() => {
            if (this.state.value == 0) {
                this.props.refresh()
                this._refreshProgress()
                clearInterval(this.interval);
            } else {
                this.setState({ value: this.state.value - 1 })
            }
        }, 1000);
    }

    _refreshProgress() {
        this.setState({ value: 60 })
        this._progress();
    }

    componentDidMount() {
        this._progress();
    }

    render() {
        return (
            <Text style={styles.labelTiming}>
                {this.state.value}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    labelTiming: {
        fontSize: 25,
        paddingLeft: 8,
        color: Color.BLUE,
        fontWeight: 'bold',
    },
})