import moment from 'moment';
import 'moment-duration-format';

class Helper {

    static sortByKey(array, key) {
        if (!array)
            return [];
        return array.sort((a, b) => {
            let x = a[key];
            let y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    static secondsToStr(seconds, showMs = true) {
        let number = parseFloat(seconds);
        let duration = moment.duration(number, 'seconds');
        let prefix = "";
        if (seconds < 60)
            prefix = "0:";
        if (seconds < 10)
            prefix += "0";
        let format = null;
        if (showMs) {
            format = duration.format("m:ss.SSS");
        } else {
            format = duration.format("m:ss");
        }
        return prefix + format;
    }

}

export default Helper;