export class StoragePhases {

    static effectDates(name, setErr, index) {
        if (name[index]) {
            let error = name;
            name[index] = false;
            setErr(error);
        }
    }

    static _toCaptalize(name) {
        let newName = name[0].toUpperCase() + name.substr(1);
        return newName;
    }

    static setUser(val, state) {
        let user = state;
        return new Promise(resolve => {
            switch (Object.keys(state).length) {
                case 0:
                    return resolve({ name: this._toCaptalize(val[0]), surname: val[1] })
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
        let error = [false, false];
        if (name.length < 3) error[0] = 'Mínimo 3 caracteres';
        else if (name.indexOf(' ') != -1) error[0] = 'Informe somente seu primeiro nome';
        if (sobName.length < 3) error[1] = 'Mínimo 3 caracteres';
        else if (sobName.length > 28) error[1] = 'Abrevie um pouco seu nome';
        if (!error[0] && !error[1]) next([name, sobName]);
        return error;
    }

    static validName(name, errs, setErr) {
        let error = errs;
        if (name.indexOf(' ') != -1) {
            error[0] = 'Informe somente seu primeiro nome';
        }
        setErr(error);
    }

    static validSobName(sobName, errs, setErr) {
        let error = errs;
        if (sobName.length > 28) {
            error[1] = 'Abrevie um pouco seu nome';
        }
        setErr(error);
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