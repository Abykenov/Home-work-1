const student = [
    {name: "Aibek", grade: 85},
    {name: "Askar", grade: 90},
    {name: "Aizirek", grade: 75},
    {name: "Artem", grade: 93},
    {name: "Kalyk", grade: 88},
    {name: "Nursultan", grade: 75},
    {name: "Emir", grade: 66},
    {name: "Mari", grade: 70},
    {name: "Mars", grade: 80},
    {name: "Nurik", grade: 60},
];

const updatedStudents = student.map(s => {
    
    let newGrade = s.grade * 2;
    let letter;

    if (newGrade >= 90) {
        letter = 'A';
    } else if (newGrade >= 80) {
        letter = 'B';
    } else if (newGrade >= 75) {
        letter = 'C';
    } else if (newGrade >= 70) {
        letter = 'D';
    } else if (newGrade >= 65) {
        letter = 'E';
    } else {
        letter = 'F';
    }

    
    return `${s.name}: Original (${s.grade}) -> Doubled (${newGrade}) - Grade: ${letter}`;
});


updatedStudents.forEach(result => console.log(result));