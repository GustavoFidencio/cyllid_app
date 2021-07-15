import React from 'react';
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';

import { TextClean, Icon } from 'cyllid/src/helpers';

export const Options = ({ text, onPress, bottom = false }) =>
    <View style={bottom && styles.padding}>
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <View style={styles.containerContent}>
                <TextClean style={styles.text}>
                    {text}
                </TextClean>
                <View>
                    <Icon
                        size={24}
                        name={'right'}
                        lib={'antdesign'}
                    />
                </View>
            </View>
        </TouchableOpacity>
        {
            !bottom &&
            <View style={styles.line} />
        }
    </View>

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: '100%',
        paddingHorizontal: 15,
        backgroundColor: '#242156',
    },
    text: {
        fontSize: 14,
        color: '#C4C4C4',
    },
    line: {
        height: .3,
        bottom: 0,
        opacity: .7,
        marginLeft: 15,
        width: width - 30,
        position: 'absolute',
        backgroundColor: '#C4C4C4',
    },
    containerContent: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    padding: {
        paddingBottom: 25,
    }
})
