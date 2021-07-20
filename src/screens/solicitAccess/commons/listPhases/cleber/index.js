import styles from './styles';

import React from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';

import { StoragePhases } from '../storage';
import { TextClean, Icon, InputValidation } from "cyllid/src/helpers";

export class Basic extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            sobName: '',
            isErr: [false, false],
        };
        this.refName = React.createRef();
        this.refSobName = React.createRef();
        this._validRegisters = this._validRegisters.bind(this);
    };

    _validRegisters() {
        const { name, sobName, isErr } = this.state;
        if (isErr[0] || isErr[1] && isErr[0]) this.refName.current.focus()
        else if (isErr[1]) this.refSobName.current.focus()
        else {
            let isErr = StoragePhases.validBasic(name, sobName, this.props.next);
            this.setState({ isErr });
        }
    };

    componentDidMount() {
        this.refName.current.focus();
    }

    render() {
        const { valueAnimate, back } = this.props;
        const { name, sobName, isErr } = this.state;

        const opacity = valueAnimate.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1]
        });

        return (
            <Animated.View style={{ ...styles.container, opacity }} >
                <TouchableOpacity
                    onPress={back}
                    style={styles.goBack}
                >
                    <Icon size={40} name={'left'} lib={'antdesign'} />
                </TouchableOpacity>
                <View style={styles.containerInputs}>
                    <InputValidation
                        ref={this.refName}
                        value={name}
                        title={'Nome'}
                        error={isErr[0]}
                        placeholder={'Ex: Giovane'}
                        setValue={name => this.setState({ name })}
                        setShow={show => {
                            if (!show) StoragePhases.validName(name, isErr, isErr => this.setState({ isErr }))
                        }}
                    />
                    <InputValidation
                        error={isErr[1]}
                        value={sobName}
                        title={'Sobrenome'}
                        ref={this.refSobName}
                        placeholder={'Ex: Santos Silva'}
                        setValue={sobName => this.setState({ sobName })}
                        setShow={show => {
                            if (!show) StoragePhases.validSobName(sobName, isErr, isErr => this.setState({ isErr }))
                        }}
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonNext}
                    onPress={this._validRegisters}
                >
                    <TextClean style={styles.textAvancar}>
                        Avançar
                    </TextClean>
                </TouchableOpacity>
            </Animated.View>
        )
    }
}