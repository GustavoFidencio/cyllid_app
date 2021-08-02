import { Request } from './request';
import Routes from 'cyllid/src/assets/routes';

export class RequestCheckEmail extends Request {

    constructor(email) {
        const url = Routes.checkEmail;
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        let data = { email };
        super(url, "POST", headers, data)
    }
}