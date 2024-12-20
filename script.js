//task1

let number = 1;
while (number <= 10) {
    console.log(number);
    number++
};


//task2

let number2 = 1;
 while (number2 <= 10) {
    if (number2 === 5) {
        number2++
        continue;
    } else if (number2 === 8) {
        break;
    }  
    console.log(number2);
    number2++;
 };


 //task3

 let number3 = 1;
 do {
    console.log(number3);
    number3++;
 } while (number3 <= 5);

 //do-while snachala vypolnyaet kod zatem proveryaet uslovie, poetomu hot odna iteraciya srabotaet.
 //v dannom kode otlichiya while i do-while net, tak kak uslovie verno

 //task4

let input;

 while (true) {
    let input = prompt("Vvedite chislo 10 dlya vyhoda");
     if (input === "10") {
        console.log("YES");
        break;
     } else {
        console.log("NO! You input: " + input);
     }
 };


 //task5

for (let num = 1; num <= 10; num++) {
    console.log(num)
};


//task6

let i = 1;
for (;;) {
    console.log(i);
    i++
    if (i > 100) {
        break;
    };

};

//task7

let numbers =[1,2,3,4,5]

for (num=0; num < numbers.length; num++) {
    console.log(numbers[num]);
};


//task8

//while - dlya schetchika
//for - dlya perebora massiva


//task9

for (let n=10; n>=1; n--) {
    console.log(n)
};


//task10

for (let i = 1; i <=10; i++) {
   
    if (i%2 === 1) {
        continue;
    } 
    console.log(i);
}
