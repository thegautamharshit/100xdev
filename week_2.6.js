//map, filter, arrow function
//given an array. give me back a new array in which every value is multiplied by 2

const input = [1,2,3,4,5];

// const newarray = [];

// for(let i=0;i<input.length;i++){
//     newarray.push(input[i]*2);
// }

// console.log(newarray);

function transform(i){
    return i*2;
}

const ans = input.map(transform);
console.log(ans);

//-----------

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

// _____________________________________________________________________________

//filter

function filterLogic(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}

const answer = input.filter(filterLogic);
console.log(answer)

//-----------
const number2 = [1, 2, 3, 4];
const even = numbers.filter(item => item % 2 === 0);
console.log(even); // [2, 4]
