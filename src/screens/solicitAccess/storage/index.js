import { Executor, RequestSolicitAccess } from 'cyllid/src/factory/request';

export class StorageSolicitAccess {

    static solicitAccess(user, val) {
        let data = {
            ...user,
            password: val[1],
            username: val[0],
        };
        console.log(data);
        return new Promise((resolve, reject) => {
            Executor.run(new RequestSolicitAccess(data))
                .then(res => resolve(res))
                .catch(err => reject(err.response));
        })
    }
}
