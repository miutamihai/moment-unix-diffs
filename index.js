const moment = require('moment')

const from = moment()

const week = () => moment(from).add(1, 'week')

const day = () => moment(from).add(1, 'day')

const sixHours = () => moment(from).add(6, 'hours')

const oneHour = () => moment(from).add(1, 'hour')

const thirtyMinutes = () => moment(from).add(30, 'minutes')

const tenMinutes = () => moment(from).add(10, 'minutes')

const oneMinute = () => moment(from).add(1, 'minute')

const diff = to => moment(to.diff(from, 'milliseconds')).valueOf()

console.log('One week diff is ', diff(week(from)))
console.log('One day diff is ', diff(day(from)))
console.log('Six hours diff is ', diff(sixHours(from)))
console.log('One hour diff is ', diff(oneHour(from)))
console.log('Thirty minutes diff is ', diff(thirtyMinutes(from)))
console.log('Ten minutes diff is ', diff(tenMinutes(from)))
console.log('One minute diff is ', diff(oneMinute(from)))
