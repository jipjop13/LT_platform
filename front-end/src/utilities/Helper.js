import moment from 'moment';
import 'moment-duration-format';

class Helper {

    static sortByKey(array, key) {
        return array.sort((a, b) => {
            let x = a[key];
            let y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    static secondsToStr(seconds) {
        let duration = moment.duration(seconds, 'seconds');
        let prefix = "";
        if (seconds < 60)
            prefix = "0:";
        return prefix + duration.format("m:ss.ms");
    }

}

export default Helper;