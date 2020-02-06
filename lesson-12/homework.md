## 1. Работа с классами
- создайте класс `User`, который включает в себя:
    - `firstName` (constructor);
    - `lastName` (constructor);
    - `fullName` (getter);
- создайте класс `Student`, унаследованный от `User` и добавте след. поля:
    - `admissionYear` (constructor);
    - `courseName` (constructor);
    - `course` (getter, current year - admission year);
- создайте класс `Students`, который включает в себя:
   - `students` (constructor, на основе [массива](./students.js));
   - `getInfo` (prototype, function);

`getInfo` - это функция, при вызове которой должен вывестись отсортированный по `course` (ASC) массив строк `${fullName} - ${courseName}, ${course} курс`.

```
const students = new Students(studentsData);
console.log(students.getInfo());

// Выведет:
[
    'Василий Петров - Java, 1 курс',
    'Николай Петров - Android, 1 курс',
    'Иван Иванов - JavaScript, 2 курс',
    'Александр Федоров - Python, 3 курс',
]
```

## 2. Online Shop
На текущем этапе у вас появилось много функций для работы вашего Online Shop. Но, есть одна большая проблема. Код становится сложным для чтения. В этом задании вам нужно исправить эту проблему классами.

Как вариант вам нужно создать хотя бы 4 класса:

- `Catalog`
- `Product`
- `Basket`
- `Currency`
