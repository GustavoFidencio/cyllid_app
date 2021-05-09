import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { FlatList, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import { CirclePass } from './circlePass';
import Color from '../../../assets/colors';
import { Touchable } from './touchable';
import { StorageAuth } from '../storage';
import { TextClean, Load } from 'cyllid/src/helpers';

const WIDTH = Dimensions.get('window').width;

export class TouchableTemporari extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            err: false,
            numbers: [],
            isLoad: false,
            valueSelect: '',
        }
        this._deleteVal = this._deleteVal.bind(this);
        this._onChange = this._onChange.bind(this);
        // this._removeItem = this._removeItem.bind(this);
        this._checkPassword = this._checkPassword.bind(this);
    }

    _deleteVal() {
        const { valueSelect } = this.state;
        this.setState({ valueSelect: valueSelect.substring(0, valueSelect.length - 1) })
    }

    // _removeItem() {
    //     if (this.state.valueSelect.length == 1) this.setState({ valueSelect: [] })
    //     else this.state.valueSelect.splice(1, 1)
    //     this.forceUpdate()
    // }

    _onChange(numbers) {
        if (this.state.valueSelect.length <= 5) {
            this.setState({ valueSelect: this.state.valueSelect += numbers })
            this.forceUpdate()
            if (this.state.valueSelect.length == 6)
                this._checkPassword()
        }
    }

    async _checkPassword() {
        this.setState({ isLoad: true })
        let user = await AsyncStorage.getItem('user')
        StorageAuth.validPassword(user, this.state.valueSelect)
            .then(res => {
                console.log(res);
                this.props.navigation.replace('Home');
            })
            .catch(err => {
                this.setState({ err: !this.state.err, valueSelect: '' })
            })
            .finally(() => this.setState({ isLoad: false }))
    }

    render() {
        return (
            <>
                <View style={styles.containerList}>
                    <FlatList
                        horizontal
                        style={styles.listCircles}
                        data={this.state.valueSelect}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={() =>
                            <CirclePass
                            // limit={this.state.err}
                            />
                        }
                    />
                    {
                        this.state.isLoad &&
                        <Load size={30} />
                    }
                </View>
                <View style={styles.containerButtons} >
                    {
                        Array(10).fill("").map((item, index) => {
                            return (
                                <Touchable
                                    item={item}
                                    index={index}
                                    err={this.state.err}
                                    disabled={this.state.isLoad}
                                    addValue={this._onChange}
                                />
                            )
                        })
                    }
                </View>
                <TouchableOpacity
                    onPress={this._deleteVal}
                    style={styles.buttonExclude}
                >
                    <TextClean style={styles.textButton}>
                        X
                    </TextClean>
                </TouchableOpacity>
            </>
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
    containerList: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    listCircles: {
        width: '100%',
        height: '100%',
    },
    listTouchable: {
        width: '100%',
        flexDirection: 'row',
    },
    containerButtons: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonExclude: {
        right: 0,
        height: 80,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: (WIDTH - 64) / 3,
    },
    textButton: {
        fontSize: 30,
        color: Color.BLUE,
        fontWeight: 'bold',
    }
})