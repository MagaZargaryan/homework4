
//a function called 'triangleStars' that prints an upside-down triangle
const star=function(a){
	if(a===0){
	return '';
	}
	return star(a-1)+'*';
};
const space=function(b){
	if(b===0){
	return '';
	}
	return space(b-1)+' ';
};
const triangleStars=function(c){
	const looper = function(n){
		if (n===0)
			return;
		console.log(space(c-n)+star(2*n-1));
		looper(n-1);
	}
	return looper(c);
};



//create a function called pow that  returns base to the power of n
const pow=function(base,n){
	if(n===0){
		return 1;
	}
	else {
		return base*pow(base,n-1)
	}
}



//Create a function called checkerboard that will draw an n by n checkerboard on the screen. 
const checkerBoard = function(number) {
    const repeat = function(number) {
      if (number < 1) { 
        return "";
      }
      return "* " + repeat(number-1);
    };
    const realNumber = repeat(number)
    const draw = function(isStar, number) {
      if (number < 1) {
        return "";
      }
      if(isStar) {
        console.log(" " + realNumber);
      } else {
        console.log(realNumber);
      }
      draw(!isStar, number-1)
    };
    draw(true, number);
  };




//Write a function that reverses a string with recursion
const reverse=function(str){
      if(str.length===1) {
    return str;
  }
   const lastCharacter=str[str.length-1];
   return  lastCharacter+ reverse(str.substring(0, str.length - 1))
  };
  


