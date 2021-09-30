import { StyleSheet, View } from 'react-native';
import React, { memo } from 'react';

import Color from 'cyllid/src/assets/colors';
import { TextClean } from 'cyllid/src/helpers';

export const TextEntrada = memo(() =>
    <View style={styles.containerLabel} >
        <TextClean style={styles.textTitle}>
            Entrada
        </TextClean>
    </View >
)

const styles = StyleSheet.create({
    containerLabel: {
        height: 60,
        width: 120,
        marginRight: -5,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    textTitle: {
        fontSize: 26,
        color: Color.BLUE,
        fontFamily: 'Nunito-Bold',
    },
})