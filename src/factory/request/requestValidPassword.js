import { Request } from './request';
import Routes from 'cyllid/src/assets/routes';

export class RequestValidPassword extends Request {

    constructor(username, password) {
        const url = Routes.validPassword;
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        let data = {
            password,
            username,
            grant_type: 'password',
            client_id: 'cyllid_mobile',
            client_secret: '10f4d90c1964ee44aea12cd9bb6028a0',
        };
        super(url, "POST", headers, data)
    }
}