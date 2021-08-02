import { Executor, RequestSolicitAccess, RequestCheckCpf, RequestCheckEmail } from 'cyllid/src/factory/request';

export class StorageSolicitAccess {

    static solicitAccess(user, val) {
        let data = {
            ...user,
            password: val[1],
            username: val[0],
        };
        return new Promise((resolve, reject) => {
            Executor.run(new RequestSolicitAccess(data))
                .then(res => resolve(res))
                .catch(err => reject(err.response));
        })
    }

    static checkCpf(cpf) {
        return new Promise((resolve, reject) => {
            Executor.run(new RequestCheckCpf(cpf))
                .then(res => resolve(res))
                .catch(err => reject(err.response));
        })
    }

    static checkEmail(email) {
        return new Promise((resolve, reject) => {
            Executor.run(new RequestCheckEmail(email))
                .then(res => resolve(res))
                .catch(err => reject(err.response));
        })
    }
}