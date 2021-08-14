
import React, { useState, memo } from 'react';
// import Picker from 'react-native-date-picker';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';

import Color from 'cyllid/src/assets/colors';
import { TextClean, Icon } from 'cyllid/src/helpers';

export const DatePicker = ({ }) => {

    const [date, setDate] = useState(new Date())

    return (
        <View style={styles.containerMoney}>
            {/* <Picker
                date={date}
                onDateChange={setDate}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({

})