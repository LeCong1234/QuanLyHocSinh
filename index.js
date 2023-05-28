const storage = require('node-persist');

storage.init({
    dir: 'students',
    ttl: false
})

function getAllStudents() {
    let students = storage.getItemSync('students');
    if (typeof students === 'undefined') {
        return [];
    }
    return students;
}

//Tìm một học sinh bằng Id

function getStudent(studentId) {
    let students = getAllStudents();
    let matchedStudent = null;
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            matchedStudent = students[i];
            break;
        }
    }
    return matchedStudent;
}

// Thêm một học sinh vào danh sách

function addStudent(id, fullname, age) {
    let students = getAllStudents();
    students.push({
        id: id,
        fullname: fullname,
        age: age
    });
    storage.setItem('students', students);
}


//Xóa một học sinh ra khỏi lớp

function removeStudent(studentId) {
    let students = getAllStudents();
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            students.slice(i, 1);
        }
    }
    storage.setItem('students', students);
}


// Thay đổi thông tin của sinh viên

function studentEdit(studentId, studentName, studentAge) {
    let students = getAllStudents();
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            students[i].name = studentName;
            student[i].age = studentAge;
        }
    }
    storage.setItem('studetns', students);
}

function showStudents() {
    let students = getAllStudents();
    students.forEach(function (student) {
        console.log(student.fullname + ": " + student.age);
    })
}
addStudent(1, 'Cuong', 20);
addStudent(2, 'Kinh', 21);
addStudent(3, 'Chinh', 22);
addStudent(4, 'Quyen', 23);

showStudents();

//Load module node-persist
// var storage = require('node-persist');

// // Ham khoi tao
// storage.initSync({
//     dir: 'students'
// });

// function getAllStudents() {
//     var students = storage.getItemSync('students');
//     if (typeof students === "undefined") {
//         return [];
//     }
//     return students;
// }

// function getStudent(studentId) {
//     var students = getAllStudents();
//     var matchedStudent = null;
//     for (var i = 0; i < students.length; i++) {
//         if (students[i].id === studentId) {
//             matchedStudent = students[i];
//             break;
//         }
//     }
//     return matchedStudent;
// }

// function addStudent(id, fullname, age) {
//     var students = getAllStudents();
//     students.push({
//         id: id,
//         fullname: fullname,
//         age: age
//     });
//     storage.setItemSync('students', students);
// }

// function removeStudent(studentId) {
//     var students = getAllStudents();
//     for (var i = 0; i < students.length; i++) {
//         if (students[i] === studentId) {
//             students.splice(i, 1);
//         }
//     }
//     storage.setItemSync('students', students);
// }

// function editStudent(studentId, studentName, studentAge) {
//     var students = getAllStudents();
//     for (var i = 0; i < students.length; i++) {
//         students[i].fullname = studentName;
//         students[i].age = studentAge;
//     }
//     storage.setItemSync('students', students);
// }

// function showStudents() {
//     var students = getAllStudents();
//     students.forEach(function (student) {
//         console.log('Student: ' + student.fullname + '. He/she is ' + student.age + ' years old');
//     });
// }

// // Thêm sinh viên
// addStudent(1, 'Cuong', 20);
// addStudent(2, 'Kinh', 21);
// addStudent(3, 'Chinh', 22);
// addStudent(4, 'Quyen', 23);

// // Hiển thị danh sách sinh viên
// showStudents();
// storage.clearSync();

