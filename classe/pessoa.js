
class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last,
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    falarNome() {
        return this.name.first + ' ' + this.name.last;
    }
}

const p = new Person('Mateus', 'Araujo', 17, 'masc', 'basquete');
console.log(p)
console.log(p.first);
console.log(p.falarNome());

class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests);
        // subject and grade are specific to Teacher
        this._subject = subject;
        this.grade = grade;
    }

    get subject() {
        return this._subject;
    }

    set subject(newSubject) {
        this._subject = newSubject;
    }
}

const t1 = new Teacher("Severus",
    "Snape",
    58,
    "male",
    ["Potions"],
    "Dark arts",
    5,)

t1.subject = 'Math';
console.log(t1);
