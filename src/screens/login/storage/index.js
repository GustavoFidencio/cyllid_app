import { Executor, RequestCheckUser } from 'cyllid/src/factory/request';

export class StorageAuth {

    static checkUser() {
        return new Promise((resolve, reject) => {
            Executor.run(new RequestCheckUser('gustavo'))
                .then(() => {
                    console.log('deu bom ');
                    resolve()
                })
                .catch(err => {
                    console.log(err);
                    reject()
                })
        })
    }

}
