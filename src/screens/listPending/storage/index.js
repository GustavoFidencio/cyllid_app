import { Executor, RequestUsersPending } from 'cyllid/src/factory/request';

export class StorageListPending {

    static getUsersPending() {
        return new Promise((resolve, reject) => {
            Executor.run(new RequestUsersPending())
                .then(res => resolve(res.data))
                .catch(err => reject(err.response));
        })
    }
}