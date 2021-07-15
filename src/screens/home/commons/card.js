import React, { useRef, memo } from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Icon, TextClean } from 'cyllid/src/helpers';

export const Card = memo(({ color, name, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.container, borderColor: color }}>
            <Icon
                size={30}
                color={color}
                style={styles.icon}
                lib={'MaterialIcons'}
                name={'attach-money'}
            />
            <TextClean style={{ ...styles.text, color: color }}>
                {name}
            </TextClean>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 110,
        padding: 13,
        marginLeft: 15,
        borderWidth: 1,
        borderRadius: 11,
    },
    icon: {
        flex: 1
    },
    text: {
        fontSize: 20,
        fontFamily: 'Nunito-Regular',
    }
})