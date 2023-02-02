  
// /**
//  * To run this file in Gitpod, use the 
//  * command node map.js in the terminal
//  */

// // Using a for loop
// let nums = [1, 2, 3, 4, 5];
// let results = [];
// for (let num of nums) {
//   results.push(num * 2);
// }
// console.log(results);

// // Using map()
// const multiplybyTwo = function (num) {
//   return num * 6
// }

// const mapResoults = nums.map(multiplybyTwo);
// console.log(mapResoults);

// // Simplified w/ map()

// const simplfied = nums.map(function(num) {return num * 3});
// console.log(simplfied);


// // Simplfied w/ map() + arrow function
c

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];


const studentsWithId = students.map(student => [student.name, student.id]);
console.log(studentsWithId);

const studentWithH = students.map(students => students + 'h');
 console.log(studentWithH);