
convertFahrToCelsius = (parameter) => {
    if (parameter == null){
        let nullInfo = 'Please input a value for Conversion';
        return nullInfo;
    }
    else {
        let F = Number(parameter);
        let C = (F-32)*(5/9).toFixed(4);
        let regex = /[a-zA-Z]/;
        regexResult = regex.test(parameter);
        if(regexResult == true && typeof parameter !=='object' && typeof parameter !=='boolean' && parameter !== null){
            return (`${JSON.stringify(parameter)}, is not a valid number but a/an string`);
        }
        else if(Array.isArray(parameter) === true ){
            return (`${JSON.stringify(parameter)}, is not a valid number but a/an array`)
        }
        else if(typeof parameter === 'object' && typeof parameter !== null && !Array.isArray(parameter) ){
            return (`${JSON.stringify(parameter)},  is not a valid number but a/an object`)
        }
        
        
        else if(typeof parameter == 'number'){
            return C.toFixed(4);
        }
         if(parameter == true || parameter == false)  {
            return (`${JSON.stringify(parameter)}, is not a valid number but a/an Boolean`)
        }
        
    } 
}
// console.log(convertFahrToCelsius());


checkYuGiOh = (n) => {
    if (n == null){
        let nullInfo = `invalid parameter: ${JSON.stringify(n)}`;
           return nullInfo;
         }
    else{     
        let regex = /[a-zA-Z]/;
        regexResult = regex.test(n)
        if (regexResult === true && typeof n !== 'object' || Array.isArray(n) === true || typeof n === 'object' && typeof n !== null && !Array.isArray(n)) {
          let invalidResponse = `invalid parameter: ${JSON.stringify(n)}`;
            return invalidResponse;
        }
        else {
            let num = Number(n);
            let outcome = [];

            let i;
            for( i = 1;i <= num;i++){
                if (i % 2 == 0 && i % 3 !== 0 && i % 5 !== 0) {
                   outcome.push('yu')
                }
                else if (i % 3 == 0 && i % 2 !== 0 && i % 5 !== 0) {
                  outcome.push('gi')
                  }
                 else if (i % 5 == 0 && i % 3 !== 0 && i % 2 !== 0) {
                  outcome.push('oh')
                  }
                 else if (i % 5 == 0 && i % 3 == 0 && i % 2 !== 0) {
                  outcome.push('gi-oh')
                 }
                 else if (i % 5 == 0 && i % 3 !== 0 && i % 2 == 0) {
                  outcome.push('yu-oh')
                 }
                 else if (i % 5 !== 0 && i % 3 == 0 && i % 2 == 0) {
                  outcome.push('yu-gi')
                 }
                 else if (i % 5 == 0 && i % 3 == 0 && i % 2 == 0) {
                  outcome.push('yu-gi-oh')
                    }
                 else {
                  outcome.push(i)
                    }
                        
                    }
                    return outcome;
        }
     }
    }
//  console.log(checkYuGiOh());
