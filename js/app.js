//scrivere numeri da 1 a 100

for (let i = 0; i < 100; i++) {
    const num = i + 1
    // IF multipli di 3 e 5 
    // - stampiamo la parola "FizzBuzz"
    const fizz = (num % 3) == 0 //resto = 0 quindi numero è divisibile
    const buzz = (num % 5) == 0 // quando resto divisione per 5 = 0 allora è divisibile

    if (fizz && buzz) { 
    console.log (`FizzBuzz`)
    } else if (buzz) {
    console.log (`Buzz`)
    } else if (fizz) {
    console.log(`Fizz`)
    } else {
    console.log (num)
    }

}


// IF multipli di 5
// - stampiamo la parola "Buzz"
// IF multipli di 3
// - stampiamo la parola "Fizz"
// ALTRIMENTI:
// - stampiamo la cifra 


//RICORDIAMO CHE NELL'IF CI VA SEMPRE UNA CONDIZIONE BOOLEANA -- QUINDI DI VERO O FALSO