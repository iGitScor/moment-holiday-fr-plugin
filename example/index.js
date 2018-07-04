import '../dist/mh-plugin';

import moment from 'moment';

const day = moment("1-4-2018", "DD-MM-YYYY");
console.log(day.isHoliday());
