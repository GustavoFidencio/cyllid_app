import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { Executor, RequestPendentTerms, RequestAcceptTerm } from 'cyllid/src/factory/request';

export class StorageTerms {

    static getTerms() {
        return new Promise((resolve, reject) => {
            Executor.run(new RequestPendentTerms())
                .then(({ data }) => resolve(data))
                .catch(err => reject(err.response))
        })
    }

    static setAcceptTerm(id) {
        console.log('estou no storage');
        return new Promise((resolve, reject) => {
            Executor.run(new RequestAcceptTerm(id))
                .then(({ data }) => {
                    console.log(data);
                    resolve()
                })
                .catch(err => {
                    console.log(err.response, 'termoo');
                    reject(err.response)
                })
        })
    }
}