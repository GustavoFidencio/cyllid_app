import { Request } from './request';
import Routes from 'cyllid/src/assets/routes';

export class RequestAcceptTerm extends Request {

    constructor(id) {
        const url = `${Routes.acceptTerm}/${id}`;
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        super(url, "PATCH", headers, null)
    }
}