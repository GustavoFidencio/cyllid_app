import { Executor, RequestBalance, RequestTransactionsAll } from 'cyllid/src/factory/request';

export class StorageInput {

    static getTags() {
        //////fazer a request das tags
        return new Promise((resolve, reject) => {
            Executor.run(new RequestBalance())
                .then(res => resolve(res.data))
                .catch(err => reject(err.response));
        })
    }
}