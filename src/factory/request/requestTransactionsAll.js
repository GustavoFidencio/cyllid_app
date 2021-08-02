import { Request } from './request';
import Routes from 'cyllid/src/assets/routes';

export class RequestTransactionsAll extends Request {

    constructor() {
        const url = Routes.transactionsAll;
        const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
        super(url, "GET", headers, null)
    }
}