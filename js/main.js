/* 
PHẦN 1.1
  1. Nhập vào 1 số bất kỳ, kiểm tra số đó có phải là số chẵn hay không? Kết quả trả về kiểu true/false 
*/
function checkEvenOdd(n) {
  if (typeof n == "number") {
    if (n % 2 == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Vui lòng nhập số";
  }
}
let result = checkEvenOdd(10);
console.log(result);

// 2. Viết hàm kiểm tra số đó có chia hết cho 3 hay không?
function checkNumber(n) {
  if (typeof n == "number") {
    if (n % 3 == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Vui lòng nhập số";
  }
}
let result2 = checkNumber(9);
console.log(result2);

/* 
  3. Khai báo 2 số a = 4, b = 12, in kết quả bằng console. 
  Tính tổng 2 số a và b? Lấy b chia a, lấy phần dư? Lấy b chia a, lấy phần nguyên? 
*/
function calcNum() {
  let a = 4;
  let b = 12;
  console.log(a + b);
  console.log(b % a);
  console.log(b / a);
}
calcNum();

/* 
  4. In ra họ và tên của mình bằng cách khai báo 1 biến chứa họ và biến chứa tên, có khoảng trắng giữa họ và tên của bạn.
*/
function fullName() {
  let firstName = "Pham";
  let lastName = "Pham";
  console.log(`${firstName} ${lastName}`);
}
fullName();

/* 
  5. Viết hàm so sánh 2 số nguyên. 
  nếu a > b thì trả về 1, nếu a < b thì trả về -1, nếu a == b thì trả về 0. 
*/
function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else if (a == b) {
    return 0;
  }
}
console.log(compare(1, 2));

// 6. Khai báo một chuỗi ký tự là “happy news year”
//      a. In ra tổng số ký tự có trong chuỗi (gợi ý dùng length)
//      b. In ra vị trí của chữ “y” từ đầu xuống (gợi ý dùng indexOf)
//      c. In ra vị trí của chữ “y” từ dưới lên (gợi ý dùng lastIndexOf)
//      d. Dùng replace để thay thế từ “happy” bằng một từ tuỳ ý bạn.
function chuoi() {
  let str = "happy news year";
  console.log(str.length);
  console.log(str.indexOf("y"));
  console.log(str.lastIndexOf("y"));
  console.log(str.replace("happy", "héppi"));
}
chuoi();

/* 
PHẦN 1.2
  1. Viết hàm nhập vào điểm của một học sinh và in ra kết quả tương ứng nếu:
    a. Điểm lớn hơn 8 thì in ra Excellence
    b. Điểm lớn hơn 7 đến 8 thì in ra Good
    c. Điểm từ 4 đến bằng 7 thì in ra Not Good
    d. Nhỏ hơn 4 thì in ra Bad
*/
function diemKetQua(diem) {
  if (typeof diem == "number") {
    if (diem >= 0 && diem <= 10) {
      if (diem > 8) {
        console.log("Excellence");
      } else if (diem >= 8) {
        console.log("Good");
      } else if (diem >= 4) {
        console.log("Not Good");
      } else if (diem < 4) {
        console.log("Bad");
      }
    } else {
      console.log("Nhap diem khong hop le");
    }
  } else {
    console.log("Vui lòng nhập số");
  }
}
diemKetQua(8);

/* 
  2. Viết hàm nhập vào 1 chuỗi và chuẩn hóa chuỗi theo định dạng chữ cái đầu tiên của
chuỗi phải được in hoa. Các chữ còn lại viết thường. 
  Ví dụ: HỌC lập TRình JavAScript thì phải chuyển thành: Học Lập Trình Javascript 
*/
function captilizeAllWords(str) {
  if (typeof str !== "string") return "Vui long nhap chu";
  let content = str.trim().toLowerCase();
  return content
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(captilizeAllWords("HỌC lập TRình JavAScript"));

/* 
  3. Viết hàm định dạng số giây luôn có 2 chữ số. 
  Ví dụ: Nếu người dùng nhập vào: 12 kết quả là 12. nếu người dùng nhập vào: 5 kết quả là 05
*/
function formatNumber(num) {
  return String(num).padStart(2, 0);
}
console.log(formatNumber(5));

/* 
  4. Viết hàm trích xuất domain như sau.
  Ví dụ: Nếu là cfdcircle@gmail.com kết quả là gmail.com ,nếu là learning@cfdcircle.vn kết quả là cfdcircle.vn 
*/
function getDomainFromEmail(email) {
  const isEmail = String(email).includes("@") && String(email).includes(".");
  if (!isEmail) return "Invalid Email";
  const atSignIndex = email.indexOf("@");
  return email.slice(atSignIndex + 1);
}
console.log(getDomainFromEmail("learning@cfdcircle.vn"));

/* 
  5. Viết hàm nhập vào 1 chuỗi và chuyển đổi chuỗi thành path URL. 
  Ví dụ: "javascript cho nguoi moi bat dau" kết quả là javascript-cho-nguoi-moi-bat-dau 
 */
function convertStr(str) {
  return String(str).trim().split(" ").join("-");
}
console.log(convertStr("javascript cho nguoi moi bat dau"));

/* 
PHẦN 2.1
  1. Chạy vòng lặp với i = 0, i < 10, i++. 
  Tính tổng giá trị mỗi lần i tăng lên 1 (gợi ý dùng vòng lặp for hoặc while)
*/
function getTotal(n = 10) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(getTotal(10));

/*
  2. In ra số chẵn từ 0 - 20. (dùng vòng lặp while)?
*/
function checkEven(n) {
  let i = 0;
  while (i <= n) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
}
checkEven(20);

/*
  3. Tạo 1 mảng bất kỳ với 5 phần tử, thực hiện xoá 2 phần tử cuối, sau đó in ra mảng kết
quả (gợi ý dùng: splice)?
*/
function delElement() {
  const arr = ["orange", "banana", "cherry", "mango", "lemon"];
  const arrNew = arr.splice(3, 2);
  console.log(arrNew);
  console.log(arr);
}
delElement();

/*
  4. Tạo 1 mảng gồm tên các khoá học của CFD Circle. 
  In ra số lượng các khoá học? In ra chỉ số index của mảng? 
  In ra tên khoá học ở vị trí index thứ 2. 
  In ra chuỗi tên các khoá học cách nhau bằng dấu phẩy? 
  Push thêm 2 phần tử bất kỳ vào mảng đã tạo.
*/
function courseCFD() {
  const arr = ["Newbie", "Web Responsive", "React JS"];
  console.log("Có " + arr.length + " khóa học");
  for (let i = 0; i < arr.length; i++) {
    console.log("index: " + i);
  }
  console.log(arr[2]);
  console.log(arr.join());
  arr.push("Java", "PHP");
  console.log(arr);
}
courseCFD();

/*
  5. Tạo 1 mảng gồm các phần tử là kiểu số nguyên dương, tính tổng các phần tử có
trong mảng?
*/
function totalArr() {
  let arr = [1, 2, 3];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(totalArr());

/* 
PHẦN 2.2
  1. Viết hàm random một số ngẫu nhiên từ 1 đến n (n là tham số bất kỳ được truyền vào)?
*/
function getRandom(x) {
  let random = Math.floor(Math.random() * x) + 1;
  return random;
}
console.log(getRandom(9));

/*
  2. Hiển thị một alert thông báo với nội dung bất kỳ sau khi vào trang web sau 4 giây?
*/
function notify() {
  // alert("Thong bao");
}
setTimeout(notify, 3000);

/*
  3. Lấy thời gian hệ thống để tạo đồng hồ bằng javascript, in ra giao diện người dùng t
trong thẻ H1 (gợi ý sử dụng setInterval và đối tượng Date, in ra giao diện thì dùng
document.write()).
*/
function myTimer() {
  const d = new Date();
  let time = d.toLocaleTimeString();
  // document.getElementById("time").innerHTML = time;
}
setInterval(myTimer, 1000);

/*
  4. Tạo một mảng, bên trong gồm 4 đối tượng là các khoá học của CFD Circle, 
  mỗi đối tượng gồm các key (thuộc tính) name (tên khoá học), price (giá), date (ngày khai giảng).
  In ra các đối tượng có trong mảng? In ra price (giá khoá học) của từng đối tượng?
*/
var courses = [
  {
    name: "Khóa học Newbie",
    price: 2000,
    date: "09/09/2023",
  },
  {
    name: "Khóa học Responsive",
    price: 3000,
    date: "09/09/2023",
  },
  {
    name: "Khóa học React JS",
    price: 4000,
    date: "09/09/2023",
  },
  {
    name: "Khóa học PHP",
    price: 5000,
    date: "09/09/2023",
  },
];
function getListCourses(courses) {
  courses.forEach(function (course) {
    console.log(course);
    console.log(course.price);
  });
}
getListCourses(courses);

/*
  5. Tạo 1 một đối tượng Car gồm các thuộc tính (key): name, color, price. 
  Kiểm tra xem thuộc tính (key) là speed có tồn tại trong đối tượng Car hay không, trả về kiểu boolean. (gợi ý
dùng hasOwnProperty)?
*/
let Car = {
  name: "Lexus",
  color: "black",
  price: 99999,
};

function getCar(Car) {
  console.log(Car.hasOwnProperty("speed"));
}
getCar(Car);

/* 
PHẦN 3.1
  1. Tạo 1 mảng gồm tên và giá của các khoá học của CFD Circle. 
  In ra số lượng các khoá học? In ra chỉ số index của từng khoá học trong mảng? 
  In ra tên khoá học ở vị trí index thứ 2. In ra chuỗi tên các khoá học cách nhau bằng dấu phẩy? 
  Tính tổng giá các khoá học? (bắt buộc dùng 1 trong những Phương thức xử lý mảng nâng cao đã học)
*/
function getCourseCFD(arr = []) {
  console.log(arr.length);
  arr.forEach(function (course, index, arr) {
    console.log(index);
  });
  console.log(arr[1].name);
  let strCourse = arr.map(function (course, index) {
    return course.name;
  });
  console.log(strCourse.join(", "));
  let total = arr.reduce(function (totalCourse, courseItem) {
    return totalCourse + courseItem.price;
  }, 0);
  console.log(total);
}
getCourseCFD(courses);

/* 
  2. Viết 1 hàm nhận vào 1 mảng số và trả về tổng giá trị các phần tử của mảng?
*/
const numbers = [100, 200, 300, 400];
function totalNum(num) {
  let result = num.reduce(function (total, number) {
    return total + number;
  });
  console.log(result);
}
totalNum(numbers);

/*
  3. Viết 1 hàm nhận vào 2 tham số là array và character. 
  Hàm trả về 1 chuỗi là kết quả của việc nối các phần tử của array với character? 
  (lưu ý: array là mảng nhận vào, character là ký tự để nối các phần tử của mảng).
*/
function arrCharacter(arr, character) {
  console.log(arr.join(character));
}
arrCharacter(["x", "y", "z"], "+");

/*
  4. Tạo 1 object User gồm: tên, tuổi, địa chỉ và 1 mảng chứa tên bạn bè. 
  In ra array bạn bè? In ra tên của người bạn cuối cùng? In ra địa chỉ của user? 
  Thêm 1 người bạn vào mảng bạn bè? in ra độ dài mảng bạn bè?
*/
let User = {
  name: "ronado",
  age: 19,
  address: "tan duyet",
  friends: ["lan", "anh", "na", "thy"],
};
function getUser(user) {
  console.log(user.friends);
  console.log(user.friends.slice(-1));
  console.log(user.address);
  user.friends.push("nhung");
  console.log(user.friends);
  console.log(user.friends.length);
}
getUser(User);

/*
  5. Cho mảng gồm các phần tử 2,4,5,7,32,67,30,100. Trả về và in ra mảng mới gồm các phần tử có
giá trị gấp đôi giá trị của từng phần tử mảng đã khởi tạo? Gợi ý dùng hàm map().
*/
let arrNums = [2, 4, 5, 7, 32, 67, 30, 100];
function doubleTheNumber(nums) {
  let arrNumNew = nums.map(function (num, index) {
    return num * 2;
  });
  console.log(arrNumNew);
}
doubleTheNumber(arrNums);

/* 
PHẦN 3.2
  1. Viết 1 hàm nhận vào 1 tham số là mảng và trả về ngẫu nhiên 1 phần tử của mảng?
*/
function handleRandom(arr) {
  let random = Math.floor(Math.random() * arr.length);
  console.log(arr[random]);
}
handleRandom(["a", "b", "c"]);

/*
  2. Tạo 1 đối tượng student trống: 
  Thêm thuộc tính name với giá trị là tên student? Thêm thuộc tính age với giá trị là tuổi? 
  Thay đổi giá trị name của student thành tên bất kỳ? Xóa thuộc tính age ra khỏi đối tượng?
*/
function objStudent() {
  let student = {};
  student.name = "ronado";
  console.log(student);
  student.age = 19;
  console.log(student);
  student.name = "messi";
  console.log(student);
  delete student.age;
  console.log(student);
}
objStudent();

/*
  3. Tạo 1 mảng gồm các object là các student gồm tên và điểm trung bình. 
  Viết 1 hàm nhận vào 1 tham số là mảng vừa tạo và trả về các object có điểm trung bình lớn hơn 5?
*/
let students = [
  { name: "lan", point: 4.5 },
  { name: "nhu", point: 8 },
  { name: "an", point: 7.5 },
  { name: "ha", point: 3.0 },
];
function getListStudents(students) {
  let isStudent = students.filter(function (student, index) {
    return student.point > 5;
  });
  console.log(isStudent);
}
getListStudents(students);

/*
  4. Tạo 1 mảng chứa các object có thuộc tính là tên các nhân viên và giá trị là tiền lương. 
  Viết hàm trả về tổng tất cả lương của các nhân viên trong object?
*/
let employees = [
  { name: "lan", money: 3500 },
  { name: "nhu", money: 4500 },
  { name: "an", money: 5500 },
  { name: "ha", money: 6000 },
];
function totalMoney(employees) {
  let total = employees.reduce(function (a, b) {
    return a + b.money;
  }, 0);
  console.log(total);
}
totalMoney(employees);

/*
  5. Cho mảng gồm các phần tử 2,4,5,7,32,67,30,100. Tìm và in ra phần tử đầu tiên thoả điều kiện phần
tử đó > 20?
*/
function firstElement(arr) {
  let result = arr.find(function (num) {
    return num > 20;
  });
  console.log(result);
}
firstElement(arrNums);

/*
  6. Cho mảng diemso gồm các phần tử 5, 7, 8, 9, 3. 
  Sử dụng hàm every để kiểm tra điểm số của học sinh được lưu dưới dạng mảng có đủ để đỗ kỳ thì không. 
  Điều kiện tất cả điểm số >= 5. Nếu đủ điều kiện thì in ra “Đủ điểm đỗ” ngược lại thì “Không đủ điểm đỗ”?
*/
let nums = [5, 7, 8, 9, 3];
function checkNums(arr) {
  let isPass = arr.every(function (num, index) {
    return num >= 5;
  });
  if (isPass) {
    console.log("Đủ điểm đỗ");
  } else {
    console.log("Không đủ điểm đỗ");
  }
}
checkNums(nums);

/*
Phần ES6
  1. Viết 1 function nhận vào số lượng tham số không giới hạn. Hàm trả về độ dài của tất cả tham số. 
  Gợi ý: dùng rest parameter. Ví dụ: getLength(1, 3, 5, 7, 9) => 5
*/
const getLength = (...rest) => {
  console.log(rest.length);
};
getLength(1, 3, 5, 7, 9);

/*
  2. Cho mảng gồm số chẵn và lẻ. 
  Viết hàm nhận vào mảng đó và trả về mảng mới gồm những số lẻ được nhân đôi. 
  Áp dụng các phương thức mảng đã học và arrow function để viết càng ngắn gọn càng tốt.
  Ví dụ: getNum([1, 3, 6, 9]) => [6, 18]
*/
function getNum(arr) {
  const oddArr = arr.filter((item) => item % 2 !== 0);
  const result = oddArr.map((item) => item * 2);
  console.log(result);
}
getNum([1, 3, 6, 9]);

/*
  3. Cho 1 mảng gồm 5 object có tên và giá khóa học, 
  viết hàm trả về tổng giá tiền 3 khóa học cuối cùng. 
  Áp dụng kiến thức ES6 đã học như destructuring, rest parameter và arrow function.
*/
var courses2 = [
  {
    name: "Khóa học Newbie",
    price: 2000,
  },
  {
    name: "Khóa học Responsive",
    price: 3000,
  },
  {
    name: "Khóa học React JS",
    price: 4000,
  },
  {
    name: "Khóa học PHP",
    price: 5000,
  },
  {
    name: "Khóa học Test",
    price: 6000,
  },
];

const totalPrice = (a, b, ...rest) => {
  const result = rest.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  console.log(result);
};
totalPrice(...courses2);

/*
  4. Viết hàm có thể nhận vào tham số là các số nguyên dương. 
  Hàm trả về Tổng các đối số nhận vào. 
  Áp dụng kiến thức ES6. Ví dụ: calcSum(1, 3, 5) => 9
*/
const calcSum = (...rest) => {
  const check = rest.every((num) => num > 0);
  if (!check) return "Error";
  const result = rest.reduce((a, b) => a + b, 0);
  console.log(result);
};
calcSum(1, 3, 5);

/*
  5. Cho 1 đối tượng User có address là 1 object. 
  Trong object address lại chứa home là 1 mảng. 
  Trong mảng home đó chứa 2 object có name là tên chủ nhà, district là tên đường, number là số nhà. 
  Áp dụng destructuring để in ra district của object thứ 2.
*/
const user = {
  address: {
    home: [
      {
        name: "thanh",
        district: "võ văn kiẹt",
        number: 100,
      },
      {
        name: "nhi",
        district: "võ thị 8",
        number: 101,
      },
    ],
  },
};
const {
  address: {
    home: [, { district }],
  },
} = user;
console.log(district);

/*
  6. Viết hàm nhận vào tham số là các số nguyên dương. 
  Hàm trả về object có key là chuỗi bất kỳ (tự định nghĩa) + với index tương ứng mỗi lần lặp, value là 1 số (của param truyền vào) tương ứng với mỗi lần lặp nhân 2. 
  Ví dụ: generateNum(1, 2, 3, 4) => {string1: 2, string2: 2, string3: 6, string4: 8}
*/
const generateNum = (str, ...arr) => {
  let obj = {};
  arr.forEach((value, index) => {
    const keyName = `${str}${index + 1}`;
    obj[keyName] = value * 2;
  });
  console.log(obj);
};
generateNum("string", 1, 2, 3, 4);

// ------------------------------------------------
// Back To Top
// --------------------------

const btn = document.querySelector(".backtotop");
function clickBackToTop() {
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
clickBackToTop();

// Scroll khoảng 1500 thì hiện nút BackToTop lên
function fadeToTop() {
  let scrollY = window.scrollY;
  if (scrollY > 1500) {
    btn.classList.add("--active");
    console.log("1");
  } else {
    btn.classList.remove("--active");
    console.log("2");
  }
}

window.addEventListener("scroll", function () {
  fadeToTop();
});

// ------------------------------------------------
// Mouse
// ----------------------------

// cách viết 1
// function moveMouse() {
//   document.addEventListener("mousemove", function (e) {
//     // console.log(1);
//     const circle = document.querySelector(".circle");
//     let xCoord = e.clientX - circle.clientWidth / 2;
//     let yCoord = e.clientY - circle.clientHeight / 2;
//     // console.log(`${xCoord} -- ${yCoord}`);
//     circle.style.transform = `translate(${xCoord}px, ${yCoord}px)`;
//   });
// }
// moveMouse();

// cách viết 2
function getCoor(e) {
  const circle = document.querySelector(".circle");
  let xCoord = e.clientX - circle.clientWidth / 2;
  let yCoord = e.clientY - circle.clientHeight / 2;
  circle.style.transform = `translate(${xCoord}px, ${yCoord}px)`;
}
// window.addEventListener("mousemove", getCoor);

// -----------------------------------------------
// Loading
// ------------------------

// cách viết 1
// function loadPage() {
//   const loading = document.querySelector(".loading");
//   window.addEventListener("load", function () {
//     loading.classList.add("--hide");
//   });
// }
// loadPage()

// cách viết 2
function hideLoading() {
  const loading = document.querySelector(".loading");
  loading.classList.add("--hide");
}
window.addEventListener("load", hideLoading);

// -----------------------------------------------
// Header Scrolling - Thay đổi background header khi scroll
// --------------------------
function changeBgHeader() {
  const header = document.querySelector(".header");
  const schero = document.querySelector(".main .schero");
  const scrollY = window.scrollY;
  if (scrollY > schero.clientHeight) {
    header.classList.add("--bg-bisque");
  } else {
    header.classList.remove("--bg-bisque");
  }
}
window.addEventListener("scroll", changeBgHeader);
