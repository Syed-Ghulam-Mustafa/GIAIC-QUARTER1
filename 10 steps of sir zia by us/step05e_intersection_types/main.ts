interface Student {
    student_id: number,
    name: string
}

interface Teacher {
    teacher_id: number,
    teacher_name: string
}

type intersected_type = Student & Teacher

let obj1 : intersected_type = {
    student_id: 2412,
    name: "Syed Akber Shah",
    teacher_id: 4533,
    teacher_name: "Seema"
}

console.log(obj1.student_id)
console.log(obj1["teacher_id"]);


