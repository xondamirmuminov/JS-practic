var inp = document.querySelector('.form__inp');
var cutStart = document.querySelector('.form__cut-start-inp');
var cutFinish = document.querySelector('.form__cut-end-inp');
// const task4 = "I have $12,000,000";
// function concatStr(){
//     const lostMoney = task4.slice(task4.indexOf('$'), task4.lastIndexOf(','));

// };

// const user = {
//     name: 'John',
//     lastName: 'Doe',
//     age: 20,
//     city: 'California',
// };

// function findAnyLetter(){
//     const letter = prompt('Harf tanlang');
//     const num = prompt('Pozitsiyasini tanlang');
//     const index = book.indexOf(letter,num);
//     alert('The index of "' + letter + '"' + index);
// }

function cut(e){
    e.preventDefault();
    // inp.value.slice(inp.indexOf(cutStart.value),inp.indexOf(cutFinish.value));
    const cutting =  inp.value.slice(inp.value.indexOf(cutStart.value), inp.value.indexOf(cutFinish.value));
    alert(cutting);
    // cutStart.indexOf.slice(inp.value);
};



// const book = 'A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its predecessor, the scroll. A single sheet in a codex is a leaf and each side of a leaf is a page.';


// const userInterpolition = `${user.name} `;

/// 1
const jsText = 'I love javascript and javascript';
 console.log(jsText.length);
console.log(jsText.lastIndexOf('javascript'))
 
const menText = 'It is not easy to be a man';
const cutedWord = menText.slice(menText.indexOf('a man'));
const result = 'I am ' + cutedWord;
console.log(result);


const money = 'I have $12,000,000';
const cutedMoney = money.substr(money.indexOf('$'),7);
const resultMoney = 'I lost ' + cutedMoney + ' today';
console.log(resultMoney);

const email = 'alijgajs_web@gmail.com';
const cutedEmail = email.substr(0,3);
const cutedEmailEnd = email.substr(email.indexOf('@',),10);
const emailText = email.slice(3,email.indexOf('@'));
const resultEmail = cutedEmail + emailText.replace(/[^]/g ,'.') + cutedEmailEnd;
console.log(resultEmail);
const user = 'Alisher Musurmonov from UZB';
const userLowerCase = user.replace(/ /g, '-').toLowerCase();
console.log(userLowerCase);


const str = 'Js string exercises';
const resultStr = str.replace('Js string exercises', 'Js String Exercises');
const resultStr2 =  resultStr.replace(/ /g, '');
console.log(resultStr2);