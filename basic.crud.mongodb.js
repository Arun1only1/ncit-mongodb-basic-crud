// db name
use("ncit");

// ? create

// ? insertOne
// ? to add single document
// db.student.insertOne({
//   name: "Suresh",
//   age: 21,
//   address: "Bal kumari",
// });

// ? insertMany
// ? to add multiple documents

// db.student.insertMany([
//   {
//     name: "Shreya",
//     age: 21,
//     address: "Koteswor",
//   },
//   {
//     name: "Naresh",
//     age: 21,
//     address: "Baneswor",
//   },
// ]);

// ? to read all data
// db.student.find();

// ? to read single data
// db.student.findOne({ name: "Shreya" });

// db.student.findOne({ _id: ObjectId("6659978f9b70e36498389218") });

// ? delete single data

// db.student.deleteOne({ name: "Suresh" });

// ? to delete multiple data
// db.student.deleteMany({ age: 21 });

// ? edit single data
// db.student.updateOne(
//   { name: "Naresh" },
//   {
//     $set: {
//       address: "Biratnagar",
//     },
//   }
// );

// ? to edit multiple data
// db.student.updateMany(
//   { age: 21 },
//   {
//     $set: {
//       address: "Pokhara",
//     },
//   }
// );

// db.student.find();
