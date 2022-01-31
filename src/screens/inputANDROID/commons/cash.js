import React, { useState, memo } from 'react';
import CurrencyInput from 'react-native-currency-input';
import { StyleSheet, View, Animated, TextInput, Text } from 'react-native';

import { TextClean } from 'cyllid/src/helpers';

export const Cash = memo(() => {

    const [val, setVal] = useState('0,00');

    // const _renderCash = () => {

    //     let value = String(val)
    //     let end = value.length - 1

    //     console.log(value.length);


    //     console.log(value.substring(0, end - 1));

    //     return (
    //         <Text
    //             style={{
    //                 fontSize: 28,
    //                 color: 'white',
    //                 fontFamily: 'Nunito-Black',
    //             }}
    //         >
    //             {
    //                 `${value.substring(0, end - 1)},${value[end - 1]}${value[end]}`
    //             }
    //         </Text>
    //     )
    // }

    return (
        <Animated.View style={styles.container}>
            <View style={styles.containerAlign}>
                <TextClean style={styles.textMoney}>
                    +
                </TextClean>
                <TextClean style={styles.textMoney}>
                    R$
                </TextClean>


                {/* <CurrencyInput
                    value={val}
                    delimiter={"."}
                    separator={","}
                    onChangeValue={_setVal}
                    style={styles.textNumberMoney}
                /> */}
                {/* <View
                    style={{
                        left: 10,
                        height: 60,
                        minWidth: 100,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'pink',
                    }}
                > */}
                <TextInput
                    value={val}
                    maxLength={7}
                    defaultValue={val}
                    keyboardType={'numeric'}

                    // onChange={({ nativeEvent }) => {
                    //     console.log(nativeEvent);
                    // }}

                    onKeyPress={({ nativeEvent: { key: keyValue } }) => {
                        console.log(keyValue);

                    }}

                    onChangeText={text => {

                        let value = String(text)
                        if (value.length < 4) return
                        setVal(text)
                    }}
                    style={{
                        left: 10,
                        zIndex: 2,
                        fontSize: 28,
                        color: 'white',
                        fontFamily: 'Nunito-Regular',
                    }}
                />
                {/* <View>
                        {_renderCash()}
                    </View> */}

                {/* </View> */}



            </View>
        </Animated.View >
    )
});

const styles = StyleSheet.create({
    container: {
        top: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15
    },
    textMoney: {
        fontSize: 28,
        color: 'white',
        textAlignVertical: 'center',
        fontFamily: 'Nunito-Black',
    },
    textNumberMoney: {
        left: 10,
        fontSize: 28,
        color: 'white',
        minWidth: 80,
        // fontFamily: 'Nunito-Black',
    },
    containerAlign: {
        flexDirection: 'row',
    }
})