import { Executor, RequestBalance, RequestTransactionsAll } from 'cyllid/src/factory/request';

export class StorageHome {

    static toCaptalize(name) {
        let newName = name[0].toUpperCase() + name.substr(1);
        return newName;
    }

    static getBalance() {
        return new Promise((resolve, reject) => {
            Executor.run(new RequestBalance())
                .then(res => resolve(res.data))
                .catch(err => reject(err.response));
        })
    }

    static getTransactionsAll() {
        return new Promise((resolve, reject) => {
            Executor.run(new RequestTransactionsAll())
                .then(res => {
                    console.log(res.data);
                    resolve(res.data)
                })
                .catch(err => {
                    console.log(err);
                    reject(err.response)
                });
        })
    }
}