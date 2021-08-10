import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { TextClean } from 'cyllid/src/helpers';

export const TermsList = memo(({ term }) =>
    <View style={styles.container}>
        <TextClean lines={5} style={styles.version}>
            {term.number}
        </TextClean>
        <TextClean style={styles.version}>
            Para o uso do aplicativo você confirma que:
        </TextClean>
        <View style={styles.containerLaws}>
            {
                term.law.map((item, index) =>
                    <View key={index} style={styles.containerRow}>
                        <Text>
                            <View style={styles.containerCircle}>
                                <View style={styles.circle} />
                            </View>
                            <TextClean style={styles.labelLaws} lines={10}>
                                {item}
                            </TextClean>
                        </Text>
                    </View>
                )
            }
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    version: {
        fontSize: 16,
        color: 'black',
        marginBottom: 15,
        fontFamily: 'Nunito-Regular',
    },
    containerLaws: {
        paddingHorizontal: 5,
    },
    containerRow: {
        flexDirection: 'row',
    },
    containerCircle: {
        width: 15,
        height: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 4,
        height: 4,
        borderRadius: 90,
        backgroundColor: 'black',
    }
})