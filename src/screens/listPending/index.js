import styles from './styles';

import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StatusBar, TouchableOpacity, FlatList } from 'react-native';

import { ItemList } from './commons';
import Color from 'cyllid/src/assets/colors';
import { StorageListPending } from './storage';
import { TextClean, Icon, Load, } from 'cyllid/src/helpers';

export class ListPending extends React.PureComponent {

    constructor(props) {
        super();
        this.state = {
            users: [],
            isLoad: true,
            select: false,
            listSelect: [],
        }

        this._desc = this._desc.bind(this);
        this._getUser = this._getUser.bind(this);
        this._number = this._number.bind(this);
    }

    componentDidMount() {
        this._getUser()
    }

    _getUser() {
        StorageListPending.getUsersPending()
            .then(users => {

                this.setState({ users })
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => this.setState({ isLoad: false }))
    }

    _number() {
        if (this.state.select) {
            if (this.state.listSelect.length == 0) return `Nenhum `;
            return this.state.listSelect.length;
        }
        return '';
    }

    _desc() {
        if (this.state.select) {
            if (this.state.listSelect.length > 1) return `usuários selecionados`;
            return `usuário selecionado`;
        }
        return 'Usuários pendentes'
    }

    render() {
        const { users, select, isLoad, listSelect } = this.state;
        return (
            <SafeAreaView style={styles.safeArea} >
                <StatusBar backgroundColor={Color.DARK} barStyle="light-content" />
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.goBack}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Icon size={23} name={'left'} lib={'antdesign'} />
                        <TextClean style={styles.textGoBack}>
                            Menu
                        </TextClean>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.backgroundSelect}
                        onPress={() => this.setState({ setSelect: !select })}
                    >
                        <TextClean style={styles.textSelect} >
                            {
                                select ?
                                    'Cancelar'
                                    :
                                    'Selecionar'
                            }
                        </TextClean>
                    </TouchableOpacity>
                    {
                        isLoad ?
                            <View style={styles.containerLoad}>
                                <Load size={42} />
                            </View>
                            :
                            <>
                                <View style={styles.containerDesc}>
                                    <TextClean style={styles.indexSelect}>
                                        {this._number()}
                                    </TextClean>
                                    <TextClean style={styles.titleScreen}>
                                        {this._desc()}
                                    </TextClean>
                                </View>
                                <FlatList
                                    data={users}
                                    style={styles.list}
                                    keyExtractor={(_, index) => String(index)}
                                    renderItem={({ item }) =>
                                        <ItemList
                                            item={item}
                                            select={select}
                                            setId={id => {
                                                let teste = [...listSelect, id]
                                                this.setState({ listSelect: teste })
                                            }}
                                        />
                                    }
                                    ItemSeparatorComponent={() => <View style={styles.separatorComponent} />}
                                />
                            </>
                    }
                </View>
            </SafeAreaView>
        )
    }
}