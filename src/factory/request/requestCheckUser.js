import { Request } from './request';
import Routes from 'cyllid/src/assets/routes';

export class RequestCheckUser extends Request {

    constructor(username) {
        const url = Routes.checkUser;
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        let data = { username };
        super(url, "POST", headers, data)
    }
}