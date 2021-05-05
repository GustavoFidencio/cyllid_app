import { Executor, RequestCheckUser } from 'cyllid/src/factory/request';

export class StorageAuth {

    static checkUser(name) {
        return new Promise((resolve, reject) => {
            Executor.run(new RequestCheckUser(name))
                .then(() => resolve())
                .catch(err => reject(err))
        })
    }
}
