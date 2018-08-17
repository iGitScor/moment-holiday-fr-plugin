# Moment French holidays plugin

Plugin for [Moment.js](https://momentjs.com/docs/) to manage week-end and holidays (FR)

## Installing

```shell
npm i moment-holiday-fr-plugin [--save]
```

## Usage

### Holiday check

```javascript
import moment from 'moment';
import 'moment-holiday-fr-plugin';

const isWeekend = moment().isWeekEnd();
const isHoliday = moment().isHoliday();
const isWorkingDay = moment().isWorkingDay();
```

### Date helper

```javascript
import moment from 'moment';
import 'moment-holiday-fr-plugin';

const lastWorkingDay = moment().lastWorkingDay();
const nextWorkingDay = moment().nextWorkingDay();
```

## Contributing

If you'd like to contribute, please fork the repository and use a feature
branch. All contributions are welcome. Please make a pull request and make sure things still pass after running `npm test`.
Ensure you've read the [contribution guidelines](CONTRIBUTING.md) for more information and respect the [code of conduct](CODE_OF_CONDUCT.md)

## Licensing

The code in this project is licensed under MIT license.
