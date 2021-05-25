import { Request } from './request';
import Routes from 'cyllid/src/assets/routes';

export class RequestDataUser extends Request {

    constructor() {
        const url = Routes.dataUser;
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        super(url, "GET", headers, null)
    }
}