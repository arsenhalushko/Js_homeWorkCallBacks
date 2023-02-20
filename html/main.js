//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world';
console.log(a.length);
let b = 'orem ipsum';
console.log(b.length);
let c = 'javascript is cool';
console.log(c.length);
//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
console.log(a.toUpperCase());
console.log(b.toUpperCase());
console.log(c.toUpperCase());
//- Перевести до нижнього регістру настипні стрінгові значення
console.log(a.toLowerCase());
console.log(b.toLowerCase());
console.log(c.toLowerCase());
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str1 = ' dirty string   ';
console.log(str1.trim());
//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
 //   let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
console.log(str.split(' '));

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.


let arr = [10,8,-7,55,987,-1011,0,1050,0];
 arr.map(function (value){
    return value + ''

})
console.log(arr);








//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
 //   let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
nums.sort((x,y)=>{
   return y-x;
})
console.log(nums)

nums.sort((x,y)=>{
    return x-y;
})
console.log(nums)
//==========================
//- є масив
//let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
 //   {title: 'Java Complex', monthDuration: 6},
 //   {title: 'Python Complex', monthDuration: 6},
  //  {title: 'QA Complex', monthDuration: 4},
  //  {title: 'FullStack', monthDuration: 7},
 //   {title: 'Frontend', monthDuration: 4}
//];
//-- відсортувати його за спаданням за monthDuration
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
   {title: 'Python Complex', monthDuration:6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
   {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((x,y)=>{
    return y.monthDuration - x.monthDuration;
})
console.log(coursesAndDurationArray);

let filtered = coursesAndDurationArray.filter(function (value){
    return value.monthDuration > 5;
})
console.log(filtered);

let mapedcoursesAndDurationArray = coursesAndDurationArray.map(function (value, index){
    let newCourses={
        title: value.title,
        monthDuration: value.monthDuration,
        id: index + 1
    }
    return newCourses;
});
console.log(mapedcoursesAndDurationArray);

//=========================
//    описати колоду карт (від 6 до туза без джокерів)
//- знайти піковий туз
//- всі шістки
//- всі червоні карти
//- всі буби
//- всі трефи від 9 та більше

//{
 //   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
 //       value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//    color:'', // 'red','black'
//}

//=========================

 //   Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//{
 //   spades:[],
 //       diamonds:[],
 //   hearts:[],
 //   clubs:[]
//}
//=========================
//    взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//--написати пошук всіх об'єктів, в який в modules є sass
//--написати пошук всіх об'єктів, в який в modules є docker