import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { Executor, RequestCheckUser, RequestValidPassword, RequestDataUser } from 'cyllid/src/factory/request';

export class StorageAuth {

    static checkUser(name) {
        return new Promise((resolve, reject) => {
            Executor.run(new RequestCheckUser(name))
                .then(() => resolve())
                .catch(err => reject(err))
        })
    }

    static validPassword(name, password) {
        return new Promise((resolve, reject) => {
            Executor.run(new RequestValidPassword(name, password))
                .then(res => {
                    console.log(res.data);
                    this.setToken(res.data)
                        .finally(() =>
                            this.getDataUser()
                                .then(() =>
                                    resolve()
                                )
                        )
                })
                .catch(err => reject(err))
        })
    }

    static setToken({ access_token, expires_in, refresh_token }) {
        console.log(access_token, expires_in, refresh_token);
        return new Promise(async resolve => {
            axios.defaults.headers.common['Authorization'] = access_token;
            await AsyncStorage.multiSet([
                ['token', access_token],
                ['expires_in', expires_in],
                ['refresh_token', refresh_token],
            ])
            resolve()
        })
    }

    static getDataUser() {
        console.log('get data user iniciando ');
        return new Promise((resolve, reject) => {
            Executor.run(new RequestDataUser())
                .then(res => {
                    console.log(res);
                    resolve()
                })
                .catch(err => reject(err.response));
        })
    }
}
