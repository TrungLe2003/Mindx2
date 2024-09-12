//Tham trị: (nguyên thủy)
//gán trực tiếp vào giá trị khởi tạo

// string: chuỗi, nằm trong '' "" ``
//number: số, k phân biệt số nguyên hay số thập phân
//boolean: True False
//symbol: biểu tượng, kí tự

// //null: bản chất có nhưng không mang giá trị
// let number = null;
// console.log(number);
// console.log(typeof number); //object

// //undifined: coi như không tồn tại
// let number = undefined;
// console.log(number);
// console.log(typeof number);

//Tham chiếu: object (array,...)
//Giá trị được lưu thông qua địa chỉ ô nhớ của biến khởi tạoư
// // địa chỉ ****** -> person
// let personA = {
//   name: "nobita",
// };
// let personB = {
//   name: "nobita",
// };
// //so sánh địa chỉ ô nhớ (ô nhớ luôn khác nhau và k thể trùng)
// console.log(personA === personB); //false

// //Đưa dạng dữ liệu về dạng nguyên thủy
// console.log(JSON.stringify(personA) === JSON.stringify(personB));

//Array:
// const fruits = ["Apple", "Banana", "Cherry"];
// //forEach -> chỉ để duyệt mảng -> chạy hết phần tử của mảng là ngừng, k có điều kiện j thêm
// //tên mảng.forEach(()=>{})
// //tham số item và index là 2 tham số cơ bản
// fruits.forEach((item) => {
//   console.log(item);
// });

// const listNumber = [1, 2, 3, 4, 5, 6,7, 8, 9]
// //in ra màn hình số lẻ và chia hết cho 3
// listNumber.forEach((item, index) => {
//     if (item % 2 !== 0 && item %3 === 0 ) {
//         console.log(item);
//     }
// })

// //map:trả về 1 mảng mới, với các phần tử của mảng mới sẽ là giá trị return của callback, số lượng sẽ bằng giá trị mảng ban đầu
// const resultMap = fruits.map((item) => {
//   return 1;
// });
// console.log(resultMap);

// const listNumber = [1, 2, 3, 4, 5, 6];
// const resultMap2 = listNumber.map((item) => {
//   return item * 2;
// });
// console.log(resultMap2);

// //filter (lọc, bộ lọc, phễu): dựa vào điều kiện gì đấy để trả ra kết quả
// //mảng trên, lọc ra các phần tử là số chẵn:
// //vẫn duyệt hết các phần tử trong mảng, kết quả trả về, số lượng phần tử thỏa mãn điều kiện return, giá trị trả về là giá trị thỏa mãn
// const resultFilter = listNumber.filter((item) => {
//   return !(item % 2);
// });
// console.log(resultFilter);

// //splice:
// listNumber.splice(4, 0, 10, 10); //2 tham số truyền vào cơ bản, vị trí bắt đầu, bao nhiêu phần tử bị xóa

// //slice: trích xuất 1 phần mảng, trả về 1 mảng mới
// console.log(listNumber.slice(1, 3));
// //định nghĩa theo toán học: [1,3)

// //find: kết quả trả về là 1 phần tử đầu tiên của mảng thỏa mãn (1 giá trị)
// let numbers = [10, 20, 30, 40];
// console.log(numbers.find((num) => num % 10 === 0));

// //findIndex(): Kết quả trả về là vị trí của phần tử của mảng mà thỏa mãn điều kiện trả về, nếu k có trả về -1
// let index = numbers.findIndex((num) => num % 10 === 0);
// console.log(index); //0
