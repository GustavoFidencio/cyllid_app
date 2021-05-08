import { Executor, RequestCheckUser, RequestValidPassword } from 'cyllid/src/factory/request';

export class StorageAuth {

    static checkUser(name) {
        return new Promise((resolve, reject) => {
            Executor.run(new RequestCheckUser(name))
                .then(() => resolve())
                .catch(err => reject(err))
        })
    }

    static validPassword(name, password) {
        console.log(name, password);
        return new Promise((resolve, reject) => {
            Executor.run(new RequestValidPassword(name, password))
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    }

}
