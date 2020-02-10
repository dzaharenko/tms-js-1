const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  }
];

const studentsData1 = [
  {
    firstName: 'Василий1',
    lastName: 'Петров1',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван1',
    lastName: 'Иванов1',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
];

class User {
  constructor({
    firstName = 'Guest',
    lastName = 'Guest'
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor({ admissionYear, courseName, ...user }) {
    super(user);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    const date = new Date();
    return date.getFullYear() - this.admissionYear;
  }
}

class Students {
  constructor(students) {
    this.students = students;
  }

  getInfo(a1, a2) {
    console.log(a1, a2);
    return this.students
      .map(student => new Student(student))
      .sort((a, b) => (
        a.course < b.course ? -1 : 1
      ))
      .map(s => (
        `${s.fullName} - ${s.courseName}, ${s.course} курс`
      ))
  }
}

const students = new Students(studentsData);
console.log(students.getInfo());
console.log(students.getInfo.apply({ students: studentsData1 }, ['t1', 't2']));
const getInfo = students.getInfo.bind({ students: studentsData1 }, 't1', 't2');

console.log(getInfo());

