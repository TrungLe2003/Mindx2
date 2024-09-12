import aPlusb from "./math.js";
// import { PI } from "./math.js"; //Hoặc import aPlusb, { PI } from "./math.js"
//Cách import 3:
import { PI as mathPI } from "./math.js";

//
// Ôn tập js
//Normal function
// trong toán
// f(x) = Ax + B
// ta hiểu x là tham số được truyền vào; vdu f(2) = 2A + B

//function functionName(x) {
//      code
// }

//2 cách sử dụng hàm:
// thực thi
// thực thi và trả về kết quả

//Arrow function
// const functionName = () => {}

// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(1, 2));

//Biến thể
//const fname = a => {} //nếu chỉ có 1 tham số

//Dựa vào logic (kết quả trả về)
// const functionName = (a,b) => a + b; // nếu ta trả về 1 object: => ({})

// const printConsole = (str) => {
//   console.log(str);
// };

//Biến thể 2
// const funcReturnArray = () => [1, 2, 3, 4];
// console.log(funcReturnArray());

// const funcReturnArray2 = () => ({ name: "nobita", age: 10 });
// console.log(funcReturnArray2());

// const h = 3;
// const m = 35;
// const s = 3;

// //Sử dụng toán tử 3 ngôi
// const orderNumber = 1;
// console.log(`STT: ${orderNumber < 10 ? `0${orderNumber} ` : orderNumber}`);

//----Module: là 1 phần của 1 hệ thống, mỗi 1 phần có chức năng riêng biệt, ghép lại ra 1 thể hoàn chỉnh
//theo hình lắp ghép: Module dưới sử dụng 1 phần của module trên, để tăng cấu trúc dữ liệu

// console.log(aPlusb(2, 4));
// console.log(mathPI);

//Spread Operator
//Tác dụng: coppy array, object, gộp, thêm phần tử
// const arr = [1, 2, 3];
// console.log(arr); // [1, 2, 3]
// console.log(...arr); //1 2 3

// const object = { a: 1, b: 2 };
// const object2 = { ...object1, c: 3 };
// console.log(object2);

//Rest Operator
// là cách để tạo 1 func với vô hạn tham số truyền vào
// function sum(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
// }
// console.log(sum(1, 2, 3, 4, 5));

//Destructering
// const obj = {
//   name: "Nobita",
//   age: 10,
// };
// const { name, age } = obj;

// const array = [10, 20, 30, 10];
// const [first, hi, ...hello] = array;
// console.log(hi);
// console.log(hello);

//----Thực hành
// //Bài 1: tạo 1 arrow function tính bình phương 1 số:
// const func1 = (a) => Math.pow(a, 2);
// console.log(func1(2));

// // Cách 2:
// const func1 = (a) => {
//   return a * a;
// };
// console.log(func1(2));

// // Cách 3:
// const func1 = (a) => a * a;
// console.log(func1(2));

// //Bài 2: Viết 1 arrow function kiểm tra xem chuỗi có chứa từ khóa cụ thể không
// const func2 = (a, b) => {
//   let newA = a.toLowerCase(); //ghi thường hết
//   let newB = b.toLowerCase();

//   if (newA.includes(newB)) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// };
// console.log(func2("Hello world!", "World"));
//
// ---Khi tìm kiếm 1 chuỗi con thì không phân biệt hoa, thường, dấu cách
// -Viết hoa hết để thực hiện tìm kiếm hoặc viết thường hết
// -bắt buộc bỏ hết dấu cách thừa trong việc tìm kiếm
//Chữa
// let str = "Vietnam tôi có Hoàng Sa";
// let findStr = "Hoàng Sa ";

// const checkIncludeStr = (strParent, strChild) => {
//   return strParent.toLowerCase().trim().includes(strChild.toLowerCase().trim());
// };
// console.log(checkIncludeStr(str, findStr));

//Bài 3: Viết arrow function thêm 1 tiền tố vào phần tử của một mảng chuỗi
// const arr3 = ["one", "two", "three"]; // -> number: ["number: one", "number: two", "number: three"]
//tạo 1 mảng mới
//duyệt mảng
// -> tạo 1 giá trị theo logic thêm tiền tố -> đưa giá trị vào mảng vừa tạo
// const newArr3 = [];
// const prefix = "number";
// let addStr = (arr, a) => {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     const newValue = `${prefix}: ${element}`;
//     newArr3.push(newValue);
//   }
// };
// console.log(addStr(arr3));

//Bài 4:Sử dụng arrow function để nhân đôi giá trị của các phần tủ trong mảng
// const arr4 = [1, 2, 3, 4];

// const double = (arr) => {
//   const newArr4 = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i] * 2;
//     newArr4.push(element);
//   }
//   console.log(newArr4);
// };

// double(arr4);

//Bài 5: cho 1 mảng, nếu là số lẻ thì lấy
// const arr5 = [1, 2, 3, 4, 5, 6]

// const filterOddEArray = (arrayNumber) => {
//     const resultArray = [];
//     for (let i = 0; i < arrayNumber.length; i++) {
//         if (arrayNumber[i] % 2 !== 0) {
//             resultArray.push(arrayNumber[i])
//         }
//         return resultArray
//     }
// }

// console.log(filterOddEArray(arr5));

//Bài 6: tính tổng số ngày lương
// const employees6 = [
//   { id: 1, name: "John", workingDays: 22 },
//   { id: 2, name: "Jane", workingDays: 20 },
//   { id: 3, name: "Mark", workingDays: 25 },
// ];
// let result = 0;
// for (let i = 0; i < employees.length; i++) {
//   result += employees[i].workingDays;
// }
// console.log(result);

// //C2: forEach
// let Sum6 = 0;
// employees.forEach((item) => {
//   Sum6 += item.workingDays;
// });
// console.log(Sum6);

//C3: Sử dụng reduce; Giả sử tính trông id và tổng công
//có 1 kết quả nào đó, cầm kqua đấy sử dụng cho các bước tiếp theo, kết quả trả về là 1 kết quả
//tham số đầu là callback function
//tham số
// const result6 = employees6.reduce(
//   (prevValue, item) => {
//     return {
//       id: prevValue.id + item.id,
//       workingDays: prevValue.workingDays + item.workingDays,
//     };
//   },
//   {
//     id: 0,
//     workingDays: 0,
//   }
// );
// console.log(result6);

//Bài 7:Tìm nhân viên có mức lương cao nhất và trả về thông tin của họ
// const employees7 = [
//   { id: 1, name: "John", salary: 2000 },
//   { id: 2, name: "Jane", salary: 2500 },
//   { id: 3, name: "Mark", salary: 3000 },
// ];
// let highestSalary = employees7[0];

// for (let i = 0; i < employees7.length; i++) {
//   if (highestSalary.salary < employees7[i].salary) {
//     highestSalary = employees7[i];
//   }
// }
// console.log(highestSalary);

//C2: sử dụng forEach

//Bài 8:Tìm nhân viên làm việc chăm chỉ nhất (công cao nhất); công = (workingDays - lateDays)
// const employees = [
//   { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//   { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//   { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// ];

// let workDay = employees[0].workingDays - employees[0].lateDays;
// let hardWorking = employees[0];
// for (let i = 0; i < employees.length; i++) {
//   if (workDay < employees[i].workingDays - employees[i].lateDays) {
//     hardWorking = employees[i];
//   }
// }
// console.log(hardWorking);

// Bài 9: Tạo một hàm để nhóm các nhân viên theo tên và trả về một object với tên của nhân viên là key và danh sách các nhân viên có cùng tên đó là value

// const employees9 = [
//   { id: 1, name: "John", salary: 2000 },
//   { id: 2, name: "Jane", salary: 2500 },
//   { id: 3, name: "Mark", salary: 3000 },
//   { id: 4, name: "John", salary: 2200 },
// ];
// - Output: {
//   "John": [
//       { id: 1, name: "John", salary: 2000 },
//       { id: 4, name: "John", salary: 2200 },
//   ],
//   "Jane": [{ id: 2, name: "Jane", salary: 2500 }],
//   "Mark": [{ id: 3, name: "Mark", salary: 3000 }],
// }

// const result9 = {};
// employees9.forEach((item) => {
//   if (!result9[item.name]) {
//     result9[item.name] = [item];
//   } else {
//     result9[item.name].push(item);
//   }
// });
// console.log(result9);

//Bài 10: hiệu suất = workingDays / salary
// const employees10 = [
//   { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//   { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//   { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
// ];

// let max10 = employees10[0];
// for (let i = 0; i < employees10.length; i++) {
//   if (
//     max10.workingDays / max10.salary <
//     employees10[i].workingDays / employees10[i].salary
//   ) {
//     max10 = employees10[i];
//   }
// }
// console.log(max10);

//Bài 11:
// const employees11 = [
//   { id: 1, name: "John", workingDays: 20 },
//   { id: 2, name: "Jane", workingDays: 22 },
//   { id: 3, name: "Mark", workingDays: 20 },
//   { id: 4, name: "Sam", workingDays: 24 },
//   { id: 5, name: "Lucy", workingDays: 22 },
// ];
// // - Output: {
// //   "20": 2,
// //   "22": 2,
// //   "24": 1
// // }
// const result11 = {};
// employees11.forEach((item) => {
//   if (!result11[item.workingDays]) result11[item.workingDays] = 1;
//   else result11[item.workingDays]++;
// });
// console.log(result11);

//Bài 12:

const employees12 = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    workingDays: 22,
    lateDays: 2,
    salary: 2000,
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    workingDays: 20,
    lateDays: 0,
    salary: 2500,
  },
  {
    id: 3,
    name: "Mark",
    email: "mark@example.com",
    workingDays: 25,
    lateDays: 1,
    salary: 3000,
  },
];

// - Output: [
//   {
//       name: "John",
//       email: "john@example.com",
//       workInfo: { workingDays: 22, lateDays: 2 }
//   },
//   {
//       name: "Jane",
//       email: "jane@example.com",
//       workInfo: { workingDays: 20, lateDays: 0 }
//   },
//   {
//       name: "Mark",
//       email: "mark@example.com",
//       workInfo: { workingDays: 25, lateDays: 1 }
//   }
// ]

// const result12 = employees12.map((item) => {
//   const mapData = {
//     ...item,
//     workInfo: {
//       workingDays: item.workingDays,
//       lateDays: item.lateDays,
//     },
//   };
//   delete mapData.salary;
//   delete mapData.workingDays;
//   delete mapData.lateDays;

//   return mapData;
// });
// console.log(result12);

//Bài 13:

let tasks = [
  {
    name: "Hoàn thành bài tập JavaScript",
    description: "Làm xong bài tập về Array và Object",
    completed: false,
  },
  { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
  {
    name: "Đi mua hàng",
    description: "Mua thêm thức ăn cho tuần",
    completed: false,
  },
];
// Viết hàm thực thi thêm một công việc mới
let newWork = (a, b, c) => {
  let obj1 = {};
  obj1.name = a;
  obj1.description = b;
  obj1.completed = c;
  tasks.push(obj1);
  console.log(tasks);
};

newWork("Nghe video", "Tiếng Anh", true);

// Viết hàm đánh dấu một hoặc nhiều công việc hoàn thành

let checkCompleted = (arr) => {
  let completedTask = [];
  arr.forEach((item) => {
    if (item.completed === true) completedTask.push(item);
  });
  console.log(completedTask);
};
console.log(checkCompleted(tasks));

// Viết hàm sắp xếp các công việc theo alphabet của tên công việc theo hai chiều A -> Z, Z -> A
tasks.sort((a, b) => a.name.localeCompare(b.name));
console.log(tasks);
tasks.sort((a, b) => b.name.localeCompare(a.name));
console.log(tasks);

//hàm sort: sắp xếp bảng chữ cái, số
//nameArr.sort()
//nameArr.sort((a,b) => a - b) //sortCompare function

//localeCompare: sắp xếp string theo tiếng việt
//Cú pháp: nameArr.sort((a,b) =>  a.localeCompare(b));
//cách hoạt động giống compare function
