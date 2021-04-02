import React, { useState, useEffect } from 'react';
import { Animated, FlatList, TouchableOpacity, Text, Dimensions, View, TextComponent } from 'react-native';

import { CirclePass } from './circlePass';
import Color from '../../../assets/colors';
import { Touchable } from './touchable';

export class Touchables extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            err: false,
            numbers: [],
            valueSelect: [],
        }
    }

    componentDidMount() {
        this._getNumbers()
    }

    _randomNumbers() {
        let indexs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (var j, x, i = indexs.length; i; j = Math.floor(Math.random() * i), x = indexs[--i], indexs[i] = indexs[j], indexs[j] = x);
        return indexs;
    }

    _getNumbers() {
        let indexs = this._randomNumbers()
        this.setState({
            numbers: [
                { um: indexs[0], dois: indexs[1] },
                { um: indexs[2], dois: indexs[3] },
                { um: indexs[4], dois: indexs[5] },
                { um: indexs[6], dois: indexs[7] },
                { um: indexs[8], dois: indexs[9] },
                { um: false }
            ]
        })
    }


    // const [valueAnimate] = useState(new Animated.Value(100));

    // const _animation = (value, delay) => {
    //     Animated.timing(valueAnimate, {
    //         toValue: value,
    //         duration: delay,
    //         useNativeDriver: false,
    //     }).start();
    // }

    // _animation(0, 1500)

    // useEffect(() => {
    //     if (opacity)
    //         _animation(100, 500)
    //     else
    //         _animation(0, 1500)
    // }, [opacity])

    _removeItem() {
        if (this.state.valueSelect.length == 1) this.setState({ valueSelect: [] })
        else this.state.valueSelect.splice(1, 1)
        this.forceUpdate()
    }

    _onChange(numbers) {
        if (this.state.valueSelect.length == 4) return this.setState({ err: true }, () => this.setState({ err: false }))
        let valueSelect = this.state.valueSelect
        valueSelect.push({ primay: numbers.um, secundary: numbers.dois })
        this.setState({ valueSelect })
        this.forceUpdate()
    }

    render() {
        return (
            <>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', height: 50 }}>
                    <View style={{ flexDirection: 'row', flex: 1, height: '100%' }}>
                        <FlatList
                            horizontal
                            style={{ width: '100%', height: '100%' }}
                            data={this.state.valueSelect}
                            renderItem={({ item, index }) =>
                                <CirclePass
                                    index={index}
                                    limit={this.state.err}
                                />
                            }
                        />
                    </View>
                    <Text style={{ color: Color.BLUE, fontWeight: 'bold', fontSize: 25, paddingLeft: 8 }}>60</Text>
                </View>
                <FlatList
                    numColumns={3}
                    data={this.state.numbers}
                    style={{ width: '100%', flexDirection: 'row' }}
                    renderItem={({ item, index }) =>
                        <Touchable
                            item={item}
                            index={index}
                            remove={() => this._removeItem()}
                            addValue={item => this._onChange(item)}
                        />
                    }
                />
            </>
        )
    }
}