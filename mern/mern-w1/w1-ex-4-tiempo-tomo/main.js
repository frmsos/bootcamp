Number.prototype.isPrime = function() {
        for( let i=2; i<this; i++ ) {
            if( this % i === 0 ) {            
                return false;
            }
        }
        return true;
    }

    


var { performance } = require('perf_hooks');
var start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
for(primeCount=0; primeCount < 1e4; primeCount++ ) { 
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

//1- cambiando de while a for se obtienen 272ms a diferencia de los 27seg
//2- la iteracion lleva bastante tiempo

// recursive
var { performance } = require('perf_hooks');
var start = performance.now();
function rFib( n ) {
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
    }
    rFib(20);

    console.log(`Fb recursive took ${performance.now() - start} milliseconds to run`);





    // iterative
    var { performance } = require('perf_hooks');
    var start = performance.now();
    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
    }
    iFib(20);
    
    console.log(`Fb iterative took ${performance.now() - start} milliseconds to run`);


    //3 la forma recursiva tomo mas tiempo

    var { performance } = require('perf_hooks');
    var start = performance.now();

    const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
    const reversed1 = story.split("").reverse().join("");
    console.log(reversed1);

    console.log(`Reverse string 1st took ${performance.now() - start} milliseconds to run`);

    var { performance } = require('perf_hooks');
    var start = performance.now();

    var reversed2 = "";
    var j=0;
    for(let i = story.length -1; i>=0 ;i--){
        reversed2 += story[i];
    }
    console.log(reversed2);

    console.log(`Reverse string with iteration took ${performance.now() - start} milliseconds to run`);