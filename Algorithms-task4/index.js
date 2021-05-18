
convertFahrToCelsius = (parameter) => {
    if (parameter == null){
        console.log('Please input a value for conversion')
    }
    else {
        let regex = /[a-zA-Z]/;
        regexResult = regex.test(parameter);
        if(regexResult == true && typeof parameter !=='object' && parameter !== null){
            console.log(`${parameter} is not a valid number but a/an string`);
        }
        else if(Array.isArray(parameter) === true){
            console.log(`${parameter} is not a valid number but a/an array`)
        }
        else if(typeof parameter === 'object' && typeof parameter !== null && !Array.isArray(parameter) ){
            console.log(parameter, ` is not a valid number but a/an object`)
        }
        else{
            let F = Number(parameter);
            let C = (F-32)*(5/9);
            console.log(C.toFixed(4) + ' ' + '\u00B0C');
        }
    }
}
convertFahrToCelsius();
  
  
checkYuGiOh = (n) => {
    if (n == null){
        let nullInfo = 'Please input a value';
        console.log(nullInfo);
    }
    else{
        let regex = /[a-zA-Z]/;
        regexResult = regex.test(n)
        if (regexResult === true && typeof n !== 'object' || Array.isArray(n) === true || typeof n === 'object' && typeof n !== null && !Array.isArray(n)) {
        const invalidReponse = `invalid parameter.${n}`;
            console.log(invalidReponse);
        }
        else{
            let num = Number(n);
            let outcome = [];
            let i;
            for ( i = 1; i <= num; i++) {
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
              console.log(outcome);
        
            }
        
          }
        
        
        }
checkYuGiOh();
