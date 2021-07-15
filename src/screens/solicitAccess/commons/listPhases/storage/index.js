export class StoragePhases {

    static effectDates(name, setErr, index) {
        if (name[index]) {
            let error = name;
            name[index] = false;
            setErr(error);
        }
    }

    static setUser(val, state) {
        let user = state;
        return new Promise(resolve => {
            switch (Object.keys(state).length) {
                case 0:
                    return resolve({ name: val[0], surname: val[1] })
                case 2:
                    return resolve({ ...user, cpf: val[0], email: val[1] })
                case 4:
                    return resolve({ ...user, username: val[0], password: val[1] })
            }
        })
    }

    static deleteInfo(state, index) {
        let data = state;
        if (index == 1) {
            delete data.name
            delete data.surname
        } else {
            delete data.cpf
            delete data.email
        }
        return data;
    }

    //basic/Access
    static validBasic(name, sobName, next) {
        let error = [false, false]; //nome nao pode ter espaço
        if (name.length < 3) error[0] = true;
        if (sobName.length < 3) error[1] = true;
        if (!error[0] && !error[1]) next([name, sobName]);
        return error;
    }

    //important
    static validImportant(cpf, email, next) {
        let error = [false, false];
        if (cpf.length != 14) error[0] = true;
        if (email.length < 3) error[1] = true;
        if (!error[0] && !error[1]) next([cpf, email]);
        return error;
    }
}