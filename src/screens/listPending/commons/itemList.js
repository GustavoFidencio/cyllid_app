import React, { memo, useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon, CheckBox } from 'cyllid/src/helpers';

export const ItemList = memo(({ item, select, setId }) => {

    const { full_name, cpf, email, id } = item;
    const [enable, setEnable] = useState(false);

    return (
        <TouchableOpacity
            disabled={!select}
            style={styles.container}
            onPress={() => {
                if (!enable) setId(id)
                else console.log('tem que tirar o id');
                setEnable(!enable)
            }}
        >
            {
                select ?
                    <View style={styles.icon}>
                        <CheckBox
                            val={enable}
                            setEnable={setEnable}
                            background={Color.DARK}
                        />
                    </View>
                    :
                    <Icon
                        size={20}
                        name={'user'}
                        color={'white'}
                        style={styles.icon}
                    />
            }
            <View style={styles.flex}>
                <View style={styles.containerText}>
                    <TextClean style={styles.textFullName}>
                        {full_name}
                    </TextClean>
                    <TextClean style={styles.textCpf}>
                        {cpf}
                    </TextClean>
                </View>
                <TextClean style={styles.textEmail}>
                    {email}
                </TextClean>
            </View>
        </TouchableOpacity>
    )
})


const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        opacity: .9,
        marginHorizontal: 15,
    },
    textEmail: {
        opacity: .75,
        fontSize: 13,
        color: 'white',
        fontFamily: 'Nunito-Regular',
    },
    textCpf: {
        opacity: .3,
        fontSize: 12,
        color: 'white',
        fontFamily: 'Nunito-Bold',
    },
    textFullName: {
        opacity: .9,
        fontSize: 16,
        color: 'white',
        fontFamily: 'Nunito-Bold',
    },
    containerText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flex: {
        flex: 1
    }
})