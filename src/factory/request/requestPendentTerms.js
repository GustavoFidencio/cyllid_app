import { Request } from './request';
import Routes from 'cyllid/src/assets/routes';

export class RequestPendentTerms extends Request {

    constructor() {
        const url = Routes.pendentTerms;
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        super(url, "GET", headers, null)
    }
}