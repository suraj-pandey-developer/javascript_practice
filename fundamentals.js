console.log("server is runnning")
console.log(this)

function maxi() {
    return 1+2 ;
}

var v = 10 ;
console.log(v);
console.log(maxi);
console.log(maxi());

// ---------------- equlity operator ------------------
/*
    diff b/w == and ===
        both of them checks type, but in == if types are not same it convert the types from one type to another type(coercion) but 
        strictly equlity operator it doesn't do any type conversion
*/


// some problems

console.log("1 == '1' : ", 1 == "1");
// 1 == '1' :  true because of type coercion

console.log('1 == "sanket" : ', 1== "sanket")
// 1 == "sanket" :  false  ==>  why? cause "sanket" after coercion it is not a number type so it will became NaN and after comparsion it will return false

console.log(NaN == NaN);
// my observation cause the type of NaN is same so it will call strict equality operator 

// in strict equality operator there is a rule x and y , if either x is NaN or y is NaN it will return false always no matter what is other value;
// if x is -0  and y is +0 then it will return true;