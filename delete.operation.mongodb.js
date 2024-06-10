use("ncit-data");

// ? delete students whose age is 25

// db.student.deleteMany({ age: 25 });

// ? delete students who are graduated
// ? and age is greater than 30

// db.student.deleteMany({ isGraduated: true, age: { $gt: 30 } });

// ? delete a student whose name is Shreya Khanal
// db.student.deleteOne({ name: "Shreya Khanal" });

// ? delete all students
// db.student.deleteMany({});
db.student.find();
