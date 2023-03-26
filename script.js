// Завдання 1

// function getArea() {
//     let num = prompt("Введіть радіус");
//     if (num > 0) {
//         let pow = Math.pow(num, 2);
//         let area = pow * Math.PI;
//         let res = Math.round(area)
//         console.log(res);
//     } else if (num < 0) {
//         console.log("Введіть додатнє число");
//     } else if (isNaN(num)) {
//         console.log(" Повинно бути числове значення.");
//     } else{
//         console.log("Будь ласка, введіть число!");
//     }
// }
// getArea();


// Завдання 2

// function getSqrt() {
//     let num = prompt("Введіть число");
//     if (num > 0) {
//         let sqrt = Math.sqrt(num);
//         console.log(`Квадратний корінь з ${num} дорівнює ${sqrt}`);
//     } else if (num < 0) {
//         console.log("Введіть додатнє число");
//     } else if (isNaN(num)) {
//         console.log(" Повинно бути числове значення.");
//     } else {
//         console.log("Будь ласка, введіть число!");
//     }
// }
// getSqrt()

// Завдання 3

let MyMath = {
    PI() {
        return 3.14;
    },
    pow(num1,num2) {
        let result = 1;
        for (i = 1; i <= num2; i++) {
            result *= num1;
        }
        return result
    },
    
    abs(num) {
        if (num < 0) {
            return -num
        } else {
            return num
        }
    },
    max() {
        let maxNum = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            if (arguments[i] > maxNum) {
                maxNum = arguments[i];
            }
        }
        return maxNum;
    },
    min() {
        let minNum = arguments[0];
        for(let i = 1; i < arguments.length; i++) {
          if(arguments[i] < minNum) {
            minNum = arguments[i];
          }
        }
        return minNum;
      }

}

console.log(MyMath.pow(5,2));