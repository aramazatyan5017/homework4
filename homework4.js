
  
  const stringMultiply = function(string, number){
    str = "";
    while(number > 0){
      str = str + string;
      number = number - 1;
    }
    return str;
  
  };
  
  //Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height. 
  
  const triangleStars = function(number){
    let i = 0;
  	let num = number * 2 - 1;
    while(i < number){
      console.log(stringMultiply(" ", i) + stringMultiply("*", num));
      num = num - 2;
      i = i + 1;
    }
  }; 
  
  // Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.
  
  const multiToSingle = function(array){
    let a = 0;
    let b = 0;
    let arr = [];
    while(a < array.length){
      while(b < array[a].length){
        arr[arr.length] = array[a][b];
        b = b + 1;
      }
      a = a + 1;
      b = 0;
    }
  
    return arr;
  
  
  };
  
    /* Create a function 'findMinMax' that returns the largest number from the given array
	if the second argument is true.  It returns the smallest number in the given array if the second argument is false. */
  
     const findMinMax = function(array, condition) {
        let control = 1;
        let element = array[0];
        if(condition){
            while(control < array.length){
                if(array[control] > element){
                    element = array[control];
                }
                control = control + 1;
            }

        }else{
            while(control < array.length){
                if(array[control] < element){
                    element = array[control];
                }
                control = control + 1;
            }
        }
        return element;

    };
	
	
	// Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.	
	
  
   const forEach = function(array, f){
	let i = 0;
    while(i < array.length){
      console.log(f(array[i]));
      i = i + 1;
    }
  
  };
  
  console.log(forEach([1,2,3,4,5], function(val){
	  return (val * 2);
  }));
  
  // Create a function 'sum' that takes an array of numbers and returns their sum.
  
   const sum = function(array){
     let i = 0;
	 let sum = 0;
	 while(i < array.length){
		 sum = sum + array[i];
		 i = i + 1;
	 }
	 return sum;
  
  };
  
  // Write a function 'reverse' that reverses the given string. 
  
  const reverse = function(str){
	  let i = str.length - 1;
	  let nstr = "";
	  while(i >= 0){
		  nstr = nstr + str[i];
		  i = i - 1;
	  }
	  
	  return nstr;
	  
  };
  
  // Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen.
  
  const checkerboard = function(size){
	  let i = 0;
	  while(i < size){
		  if(i % 2 === 0){
			  console.log(stringMultiply("* ", size));
		  } else{
			  console.log(" " + stringMultiply("* ", size));
		  }
		  i = i + 1;
	  }
  };
  

  
 
  
  
  
  
	
	
	
	
	