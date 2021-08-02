import { Request } from './request';
import Routes from 'cyllid/src/assets/routes';

export class RequestCheckCpf extends Request {

    constructor(cpf) {
        const url = Routes.checkCpf;
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        let data = { cpf };
        super(url, "POST", headers, data)
    }
}