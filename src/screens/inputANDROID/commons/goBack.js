import React, { memo } from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon } from 'cyllid/src/helpers';

export const GoBack = memo(({ navigation }) =>
    <TouchableOpacity
        style={styles.goBack}
        onPress={() => navigation.goBack()}
    >
        <Icon size={23} name={'left'} lib={'antdesign'} />
        <TextClean style={styles.textGoBack}>
            Home
        </TextClean>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    textGoBack: {
        fontSize: 17,
        color: Color.BLUE,
        fontFamily: 'Nunito-Bold',
    },
    goBack: {
        left: 5,
        top: 5,
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'row',
    },
});