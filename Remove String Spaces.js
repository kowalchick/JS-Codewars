//Remove String Spaces
//Simple, remove the spaces from the string, then return the resultant string.


function noSpace(x){
    return x.split(' ').join('');
    }
    noSpace("Ala ma kota");
    
    //2nd solution with RegExp
    
    
    // function noSpace(x){
    // return x.replace(/ /g, "");
    // }
    // noSpace("Ala ma kota");