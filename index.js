const moment = require('moment')

const from = moment()

const week = () => moment(from).add(1, 'week')

const day = () => moment(from).add(1, 'day')

const sixHours = () => moment(from).add(6, 'hours')

const oneHour = () => moment(from).add(1, 'hour')

const thirtyMinutes = () => moment(from).add(30, 'minutes')

const fifteenMinutes = () => moment(from).add(15, 'minutes')

const tenMinutes = () => moment(from).add(10, 'minutes')

const fiveMinutes = () => moment(from).add(5, 'minutes')

const oneMinute = () => moment(from).add(1, 'minute')

const twoSeconds = () => moment(from).add(2, 'seconds')

const diff = to => moment(to.diff(from, 'milliseconds')).valueOf()

console.log('One week diff is ', diff(week(from)))
console.log('One day diff is ', diff(day(from)))
console.log('Six hours diff is ', diff(sixHours(from)))
console.log('One hour diff is ', diff(oneHour(from)))
console.log('Thirty minutes diff is ', diff(thirtyMinutes(from)))
console.log('Fifteen minutes diff is ', diff(fifteenMinutes(from)))
console.log('Ten minutes diff is ', diff(tenMinutes(from)))
console.log('Five minutes diff is ', diff(fiveMinutes(from)))
console.log('One minute diff is ', diff(oneMinute(from)))
console.log('Two seconds diff is ', diff(twoSeconds(from)))
