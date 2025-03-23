"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: 'Harshit Gautam', age: 24 }, { name: "Krishna", age: 25 });
console.log(age);
