import qs from 'qs';

export class Request {

    constructor(url, method, header, params) {
        // console.log(url);
        // console.log(header);
        // console.log(method);
        this._url = url;
        this._method = method;
        this._header = header;
        this._params = params ? qs.stringify(params) : null;
        // console.log(this._params);
    }

    get url() {
        return this._url;
    }

    get method() {
        return this._method;
    }

    get header() {
        return this._header;
    }

    get params() {
        return this._params;
    }
}