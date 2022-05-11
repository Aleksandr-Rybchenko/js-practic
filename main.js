//ЗАДАЧА 1 НА КРАТНОСТЬ ЧИСЛА
// let userNumber = +prompt("введите свое число")    //просим пользователя ввести число
// if (isNaN(userNumber)){  //проверям число ли наш промпт
//   userNumber = +prompt("необходимо ввести число") //просим пользователя снова ввести число
// }
// if (userNumber % 2 === 0){  //проверям кратное ли число
//   alert("ваше число четное") //выводим сообщение
//
// }else if (userNumber % 2 === 1){ //делаем специально ошибку чтоб показать что число не четное
//   alert("ваше число не четное") //сообщение
// }
// else {  // а здесь выводится сообщение, если ни одно с выше указаных условий не прошло проверку
//   alert("ошибка, это не число")
// }


//ЗАДАЧА 2 программа которая будет по имени приветствовать пользователя, а при отсутствии такого имени выводить ошибку
// написать задачу через иф элс и через свитч кейс
// let workName = prompt("введите имя пользователя")
//   switch (workName){
//     case 'Mike':
//       alert("hi Mike CEO")
//       break;
//     case 'Jane':
//       alert("Hi Jane CTO")
//       break;
//     case 'Walter':
//       alert("Hi Walter программист")
//       break;
//     case 'Oliver':
//       alert("Hi Oliver мененджер")
//       break;
//     case 'John':
//       alert("Hi John уборщик")
//       break;
//     default:
//       alert("Пользователь не найден")
//   } //это свитч кейс

//второй варинт решения этой задачи
// let workName = prompt("введите имя пользователя")
// if (workName === "Mike"){
//   alert("Hi Mike CEO")
// }else if (workName === "Jane") {
//   alert("Hi Jane CTO")
// }else if (workName === "Walter") {
//   alert("Hi Walter пограммист")
// }else if (workName === "Oliver") {
//   alert("Hi Oliver мененджер")
// }else if (workName === "John") {
//   alert("Hi John уборщик")
// }else {
//   alert("пользователь не найден")
// }

//ЗАДАЧА 3 сравнить три числа на равенство
// let a = parseInt(prompt("введите число")) //метод проверки на целое число промпта вместо "+"
// let b = parseInt(prompt("введите число")) //метод проверки на целое число промпта вместо "+"
// let c = parseInt(prompt("введите число")) //метод проверки на целое число промпта вместо "+"
// if (isNaN(a) || isNaN(b) || isNaN(c)){ //метод проверки на число (ищет фолс)
//   alert("ошибка, одно из введенных не число");
// }else {
//   if(a > b && a > c) {
//     alert(`a больше : ${a}`)
//   }else if (b > a && b > c){
//     alert(`b больше : ${b}`)
//   }else if (c > a && c > c){
//     alert(`c больше : ${c}`)
//   }else if (a === b && b === c && a === c){
//     alert(`все числа равны`)
//   }else if (a === b || b === c || a === c){
//     alert(`два из них равны`)
//   }
// }

//Задача 4 кофейна машина
// let coins = +prompt('сколько у вас монет?')
// if (isNaN(coins)){// проверяем число ли вводит пользователь
//   coins = +prompt('вы дали не монеты')
// }
//
// let drink = prompt('выберите напиток: кофе - 25, каппучино - 50, чай - 10 монет')
// const coffe = 25;
// const cappuChino = 50;
// const tea = 10;
// let updateDrinks = drink.toLowerCase()// перезаписали переменную чтоб все было в нижнем регистре
// if (updateDrinks === 'кофе'){//создали первый иф в которов напиток равняется выбранному
//   if (coins === coffe){//второй иф внутри предыдущего и этот вариант равен и будет без сдачи
//     alert('вот ваш кофе без сдачи')
//   }else if(coins < coffe){ // монет меньше чем коффе и мы отнимаем чтоб вывести недостающую сумму монет
//     alert(`${coffe - coins} вот столько не хватает монет`)
//   }else {//последний вариант в котором у нас больше монет и выводим сдачу
//     alert(`${coins - coffe} ваша сдача, держите ваш кофее`)
//   }
// }else if(updateDrinks === 'каппучино') {
//   if (coins === cappuChino) {
//     alert('вот ваше каппучино без сдачи')
//   } else if (coins < cappuChino){
//     alert(`${cappuChino - coins} вот столько не хватило на каппучино`)
//   }else {
//     alert(`${coins - cappuChino} ваша сдача и держите ваше каппучино`)
//   }
// } else if (updateDrinks === 'чай'){
//   if(coins === tea){
//     alert('вот ваш чай без сдачи')
//   }else if( coins < tea){
//     alert(`${tea - coins} столько вот не хватило на чай`)
//   }else {
//     alert(`${coins - tea} вот ваша сдача и ваш чай`)
//   }
// }else {
//   alert('такого напитка нет')
// }


//Задача 5
//вывести от 0 до 300 все нечетные числа
//вывести числа делимые на 5 без остатка
// for (let i = 0; i < 300; i++){
//   if (i % 2 !== 0){
//     console.log('нечетные' , i)
//   }
//   if (i % 5 === 0){
//     console.log('делится на пять', i)
//   }
//   if (i % 2 === 0){
//     console.log('четные', i)
//   }
// }

// сделал через while
// let i = 0
// while (i <= 300){
//   i++
//   if(i % 2 !== 0){
//     console.log('нечетные' , i)
//   }
//   if(i % 5 === 0){
//     console.log('na pyate delitsa', i)
//   }
// }


//задача 6
//запросить у пользователя два числа и чтоб он вводил до тех пор пока не будет введено число
//когда пользователь введет два числа вывести сообщение с поздравлением
//первый нариант через do while
// let num1 = null
// do{
//   num1 = +prompt('первое число')
// }while (isNaN(num1) || num1 === null || num1 === 0)
// console.log(num1);
// let num2 = null
// do {
//   num2 = +prompt('второе число')
// }while (isNaN(num2) || num2 === null || num2 === 0)
// console.log(num2);
// console.log('поздравляем вы ввели два числа')
//второй вариант через просто while
// let num1 = +prompt('первое число')
// while (isNaN(num1) || num1 === null || num1 === 0){
//   num1 = +prompt('первое число')
// }
// let num2 = +prompt ('второе число')
// while (isNaN(num1) || num1 === null || num1 === 0){
//   num2 = +prompt('второе число')
// }
// alert(`поздравляем вы ввели два числа ${num1} и ${num2}`)
// console.log('поздравляем вы ввели два числа' + " ",  num1, 'и', num2)
