import moment from 'moment';

export class DateService {

    static dataCalendary(data) {
        return moment(data).format("DD/MM/YY")
    }

    static hoursAndMinutes(data) {
        return moment(data).format("HH:mm")
    }

    static estrada(data) {
        return moment(data).format("DD/MM/YY HH:mm")
    }

}