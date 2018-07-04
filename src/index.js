(function () {
  const initialize = moment => {
    moment.fn.easterStamp = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      var a = Y % 19;
      var b = Math.floor(Y / 100);
      var c = Y % 100;
      var d = Math.floor(b / 4);
      var e = b % 4;
      var f = Math.floor((b + 8) / 25);
      var g = Math.floor((b - f + 1) / 3);
      var h = (19 * a + b - d - g + 15) % 30;
      var i = Math.floor(c / 4);
      var k = c % 4;
      var l = (32 + 2 * e + 2 * i - h - k) % 7;
      var m = Math.floor((a + 11 * h + 22 * l) / 451);
      var n0 = (h + l + 7 * m + 114);
      var n = Math.floor(n0 / 31) - 1;
      var p = n0 % 31 + 1;
      var date = new Date(Y, n, p);
      return moment(date);
    };

    const holidays = [{
      name: 'easterDay',
      diff: 0
    }, {
      name: 'easterMonday',
      diff: 1
    }, {
      name: 'ascension',
      diff: 39
    }, {
      name: 'pentecost',
      diff: 50
    }, {
      name: 'newYearsDay',
      day: '1-1-'
    }, {
      name: 'laborDay',
      day: '1-5-'
    }, {
      name: '8thMay',
      day: '8-5-'
    }, {
      name: 'nationalDay',
      day: '14-7-'
    }, {
      name: 'assumption',
      day: '15-8-'
    }, {
      name: 'toussaint',
      day: '1-11-'
    }, {
      name: 'armistice',
      day: '11-11-'
    }, {
      name: 'christmas',
      day: '25-12-'
    }];

    holidays.forEach(holiday => {
      if (holiday.hasOwnProperty('diff')) {
        moment.fn[holiday.name] = function (Y) {
          if (Y === undefined) {
            Y = this.year();
          }
          return moment.fn.easterStamp(Y).add(holiday.diff, 'days');
        };
      } else if (holiday.hasOwnProperty('day')) {
        moment.fn[holiday.name] = function (Y) {
          if (Y === undefined) {
            Y = this.year();
          }
          return moment(`${holiday.day}${Y}`, 'DD-MM-YYYY');
        };
      }
    });

    moment.fn.getHoliday = function () {
      for (var key of holidays) {
        if (moment.fn.hasOwnProperty(key.name)) {
          if (this.isSame(moment.fn[key.name].call(this), 'days')) {
            return key;
          }
        }
      }
      return null;
    };

    moment.fn.isHoliday = function () { return (this.getHoliday() !== null) };
    moment.fn.isWeekEnd = function () { return (this.day() === 0 || this.day() === 6) };
    moment.fn.isWorkingDay = function () { return (!this.isWeekEnd() && !this.isHoliday()) };

    return moment;
  };

  if (typeof define === 'function' && define.amd) {
    define('moment-ferie-fr', ['moment'], function (moment) {
      return this.moment = initialize(moment);
    });
  } else if (typeof module !== 'undefined') {
    module.exports = initialize(require('moment'));
  }
}).call();
