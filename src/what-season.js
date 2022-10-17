const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
class InvalidDate extends Error{
  constructor(message){
    super(message);
    this.name="InvalidDate";
  }
}
function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!';
  }else if(Object.prototype.toString.call(date) !== '[object Date]'||!date.getMonth|| Object.getOwnPropertyNames(date).length!==Object.getOwnPropertyNames(new Date()).length){
    throw new InvalidDate('Invalid date!');
  }
  if(date.getMonth()>1&&date.getMonth()<=4)return "spring";
  else if(date.getMonth()>4&&date.getMonth()<=7)return "summer";
  else if(date.getMonth()>7&&date.getMonth()<=10)return "autumn";
  else if(date.getMonth()==0||date.getMonth()==1||date.getMonth()==11)return "winter";
}
module.exports = {
  getSeason
};
