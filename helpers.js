const chalk = require('chalk');
const _ = require('lodash');
const log = console.log

module.exports = {
  validateArg: argVal => {
    const matches = argVal.match(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/)
    if( !matches) {
      log(chalk.red(`Invalid parameter format: ${argVal}`));
      return false;
    }

    const dateObj = {
      date: parseInt(matches[1]),
      month: parseInt(matches[2]),
      year: parseInt(matches[3]),
    };

    // Check for invalid dates
    if(
      dateObj.date > module.exports.getDaysInMonth(dateObj.month, dateObj.year) 
      || dateObj.month < 1 
      || dateObj.month > 12
    ) {
      log(chalk.red(`Invalid date: ${argVal}`));
      return false;
    }
    
  
    return dateObj;
  },

  isLeapYear: year => year % 4 === 0 && ( year % 100 === 0 ? year % 400 === 0 : true ),

  getDaysInMonth: (month, year) => {
    let daysInMonth = 0
    if (month === 2) { // February
      if (module.exports.isLeapYear(year)) {
        daysInMonth = 29;
      } else {
        daysInMonth = 28;
      }
    } else if (
      month === 4 || month === 6 ||
      month === 9 || month === 11) {
      daysInMonth = 30;
    } else {
      daysInMonth = 31;
    }
    return daysInMonth;
  },

  compareDates: (date1, date2) => {
    if(_.isEqual(date1, date2)) {
      return 0;
    }

    if(date1.year === date2.year) {
      if(date1.month === date2.month) {
        return date1.date > date2.date ? 1 : -1;
      } else {
        return date1.month > date2.month ? 1 : -1;
      }
    } else {
      return date1.year > date2.year ? 1 : -1;
    }
  },

  countDaysBetween: ( date1, date2 ) => date2.date - date1.date + 1,

  increaseDate: (date, interval) => {
    const newDate = _.clone(date);
    if(interval === 'year') {
      newDate.year += 1;
    } else if(interval === 'month') {
      if( newDate.month === 12) {
        newDate.year += 1;
        newDate.month = 1;
      } else {
        newDate.month += 1;
      }
    } else if(interval === 'day') {
      if( newDate.date === module.exports.getDaysInMonth(newDate.month, newDate.year)) {
        if( newDate.month === 12) {
          newDate.year += 1;
          newDate.month = 1;
        } else {
          newDate.month += 1;
        }
        newDate.date = 1;
      } else {
        newDate.date += 1;
      }
    }
    return newDate;
  }
}