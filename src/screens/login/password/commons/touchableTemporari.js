import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import { CirclePass } from './circlePass';
import { Touchable } from './touchable';
import { StorageAuth } from '../../storage';
import Color from 'cyllid/src/assets/colors';
import { Load, Icon } from 'cyllid/src/helpers';
import { StorageTerms } from 'cyllid/src/screens/terms/storage';

export const TouchableTemporari = ({ navigation, user }) => {

    const [err, setError] = useState(false);
    const [isLoad, setLoad] = useState(false);
    const [valueSelect, setSelect] = useState('');

    const _deleteVal = () => setSelect(valueSelect.substring(0, valueSelect.length - 1))

    useEffect(() => {
        if (valueSelect.length == 6) _checkPassword()
    }, [valueSelect])

    const _onChange = (numbers) => {
        if (valueSelect.length == 0) setSelect(`${numbers}`)
        else setSelect(`${valueSelect}${numbers}`)
    }

    const _checkPassword = () => {
        setLoad(true)
        StorageAuth.validPassword(user, valueSelect)
            .then(() =>
                StorageTerms.getTerms()
                    .then(term => navigation.reset({ index: 0, routes: [{ name: 'Terms', params: { term } }] }))
                    .catch(err => navigation.reset({ index: 0, routes: [{ name: 'TabNav' }] }))
            )
            .catch(err => {
                setError(err);
                setSelect('');
            })
            .finally(() => setLoad(false))
    }

    return (
        <>
            <View style={styles.containerList}>
                <FlatList
                    horizontal
                    data={valueSelect}
                    style={styles.listCircles}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={(_, index) => <CirclePass key={index + 1} />}
                />
                {
                    isLoad && <Load size={30} />
                }
            </View>
            <View style={styles.containerButtons} >
                {
                    Array(10).fill("").map((item, index) =>
                        <Touchable
                            err={err}
                            key={index}
                            item={item}
                            index={index}
                            disabled={isLoad}
                            addValue={_onChange}
                        />
                    )
                }
                <TouchableOpacity
                    onPress={_deleteVal}
                    style={styles.buttonExclude}
                    disabled={valueSelect.length == 0}
                >
                    <Icon size={30} lib={'Feather'} color={'white'} name={'delete'} />
                </TouchableOpacity>
            </View>
        </>
    )
}

const WIDTH = Dimensions.get('window').width;

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
})