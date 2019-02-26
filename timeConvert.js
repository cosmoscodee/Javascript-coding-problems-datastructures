/* Have the function TimeConvert(num) take the num parameter being passed and return
 the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3).
 Separate the number of hours and minutes with a colon.
*/

function timeConvert(numOfTime) {
  if(numOfTime < 60) {
    return "0:"+numOfTime;
  }
  else {
    var number = Math.floor(numOfTime/60);
		var remainder = numOfTime%60;
		return ""+number+":"+remainder;
  }
}
