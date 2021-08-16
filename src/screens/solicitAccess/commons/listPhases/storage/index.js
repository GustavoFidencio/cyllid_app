import HapticFeedback from "react-native-haptic-feedback";

import { StorageAuth } from 'cyllid/src/screens/login/storage';
import { StorageSolicitAccess } from 'cyllid/src/screens/solicitAccess/storage';

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
                    return resolve({ name: this._toCaptalize(val[0]), surname: val[1] });
                case 2:
                    return resolve({ ...user, cpf: val[0], email: val[1] });
                case 4:
                    return resolve({ ...user, username: val[0], password: val[1] });
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

    static validName(name, err = false) {
        if (name.indexOf(' ') != -1) {
            !err && HapticFeedback.trigger("notificationError");
            return 'Informe somente seu primeiro nome';
        } else if (name.length < 3) {
            !err && HapticFeedback.trigger("notificationError");
            return 'Mínimo 3 caracteres';
        }
        return false;
    }

    static validSobName(sobName, err = false) {
        if (sobName.length > 28) {
            !err && HapticFeedback.trigger("notificationError");
            return 'Abrevie um pouco seu nome'
        } else if (sobName.length < 3) {
            !err && HapticFeedback.trigger("notificationError");
            return 'Mínimo 3 caracteres';
        };
        return false;
    }

    //important
    static validCpf(cpf, err = false) {
        return new Promise((resolve, reject) => {
            if (cpf.length != 11) {
                !err && HapticFeedback.trigger("notificationError");
                return reject('CPF incompleto');
            }
            StorageSolicitAccess.checkCpf(cpf)
                .then(() => reject('CPF já cadastrado na plataforma'))
                .catch(err => {
                    if (err.status == 404) return reject(false);
                    else return reject('Número de CPF inválido');
                })
        })
    }

    static validEmail(email, err = false) {
        return new Promise((resolve, reject) => {
            if (email.length < 3) {
                !err && HapticFeedback.trigger("notificationError");
                return 'Mínimo 3 caracteres';
            }
            StorageSolicitAccess.checkEmail(email)
                .then(() => resolve('Email já cadastrado na plataforma'))
                .catch(err => {
                    if (err.status == 404) return reject(false);
                    else return reject('Email inválido');
                })
            return false;
        })
    }

    static validUser(user, err = false) {
        return new Promise((resolve, reject) => {
            if (user.length < 3) {
                !err && HapticFeedback.trigger("notificationError");
                return 'Mínimo 3 caracteres';
            }
            StorageAuth.checkUser(user)
                .then(() => resolve('Nome de usuário ja cadastrado'))
                .catch(() => reject(false))
            return false;
        })
    }

    static validPass(pass, err = false) {
        return new Promise((resolve, reject) => {
            if (pass.length != 6) {
                !err && HapticFeedback.trigger("notificationError");
                return reject('Senha deve ter 6 dígitos');
            }
            return reject(false);
        })
    }
}