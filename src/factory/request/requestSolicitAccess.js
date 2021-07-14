import { Request } from './request';
import Routes from 'cyllid/src/assets/routes';

export class RequestSolicitAccess extends Request {

    constructor(data) {
        const url = Routes.validPassword;
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        super(url, "POST", headers, data)
    }
}