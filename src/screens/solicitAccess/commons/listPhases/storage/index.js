export class StoragePhases {

    //basic
    static validBasic(name, sobName, next) {
        let error = [false, false];
        if (name.length < 3) error[0] = true;
        if (sobName.length < 3) error[1] = true;
        if (!error[0] && !error[1]) next();
        return error;
    }

    static effectDates(name, setErr, index) {
        if (name[index]) {
            let error = name;
            name[index] = false;
            setErr(error);
        }
    }


}