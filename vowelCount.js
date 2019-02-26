// vowelCount('ABDCE');  / 2
// You can count the Vowel in array

function vowelCount(str) {
	var str = str.split('');
	var count = 0;
	var regexp = /[A,E,I,O,U]/gi;
	for(var i=0; i<str.length; i++) {
    	if(str[i].match(regexp)) {
	    count++;
		}
	}
	return count;
}
