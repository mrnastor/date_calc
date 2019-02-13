const _ = require('lodash');
const { validateArg, compareDates, increaseDate, countDaysBetween, getDaysInMonth } = require('./helpers.js');


module.exports.date_calc = (param1 , param2) => {
    const date1 = validateArg(param1)
    const date2 = validateArg(param2)
    if ( date1 && date2) {
        // Quick return 0 if they are equal
        if(_.isEqual(date1, date2)) {
            return 0;
        }

        let totalDays = 0;
        let fromDate = null;
        let toDate = null;
        let finalDate = null

        // Allow case when date1 is newer than date2 arg
        if(compareDates(date1, date2) > 0) {
            fromDate = _.clone(date2);
            finalDate = date1;
        } else {
            fromDate = _.clone(date1);
            finalDate = date2;
        }

        do {
            let endOfMonth = _.clone(fromDate);
            endOfMonth.date = getDaysInMonth(endOfMonth.month, endOfMonth.year);

            if(compareDates(endOfMonth, finalDate) > 0) {
                toDate = finalDate;
            } else {
                toDate = endOfMonth;
            }

            totalDays += countDaysBetween(fromDate, toDate);
            fromDate = increaseDate(toDate, 'day');
        } while(compareDates(finalDate, toDate) !== 0);

        return totalDays - 2;
    }

    return -1;
}