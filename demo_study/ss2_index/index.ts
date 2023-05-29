// happy coding 👻
// console.log("hello OK");

// import { Student } from "./model/student";
//
// let n = 2;
// n = "Nguyễn Văn X";
//
// console.log(n);
//
// let student: Student = {
//   id: 1,
//   name: "Nhân"
// }
//
// let a: any = 2;
// a = 'Nguyễn Văn A';
//
// console.log(student.score);
//
//
// let arr: number[] = [10, 20, 30, 40, 50];
// // XUất ra tất cả giá trị của mảng
// arr.forEach(function(value) {
//   console.log(value);
// })
//
// arr.forEach(value => console.log(value))
// //Mỗi phần tử trong mảng được + 2
// let arr2 = arr.map(value => value + 2)
// console.log(arr);
// console.log(arr2);
//
// // Lọc ra những phần tử >= 30
// arr.filter(value => value >= 30).forEach(value => console.log(value))


// setTimeout(function(){
//   console.log("Học");
//   setTimeout(function(){
//     console.log("Lập");
//     setTimeout(function(){
//       console.log("Trình");
//     }, 2000)
//   }, 2000)
// }, 2000)


function delay(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  })
}

delay(2000).then(() => {
  console.log("Học");
  return delay(2000)
})
  .then(() => {
  console.log("Lập");
})
