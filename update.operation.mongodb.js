use("ncit-data");

// db.student.insertMany([
//   {
//     name: "Shreya Khanal",
//     address: "Kathmandu",
//     age: 21,
//     isGraduated: false,
//   },
//   {
//     name: "Kuber Pathak",
//     address: "Lalitpur",
//     age: 21,
//     isGraduated: true,
//   },

//   {
//     name: "Rajiv Khadka",
//     address: "Bhaktapur",
//     age: 21,
//     isGraduated: false,
//   },
// ]);

// ? operators
// ? $set

// ? update
// ? update age of Shreya to 15

// db.student.updateOne(
//   {
//     name: "Shreya Khanal",
//   },
//   {
//     $set: { age: 15 },
//   }
// );

// ? update "Shreya Khanal" to "Minal Khanal"

// db.student.updateOne(
//   { name: "Shreya Khanal" },
//   {
//     $set: {
//       name: "Minal Khanal",
//     },
//   }
// );

// db.student.updateOne(
//   { _id: ObjectId("6666a1b6e5daf7eeae1c2772") },
//   {
//     $set: { name: "Shreya Khanal" },
//   }
// );

// ? update age of all students to 30

// db.student.updateMany(
//   {},
//   {
//     $set: {
//       age: 30,
//     },
//   }
// );

// ? $inc
// ? increase age of "Kuber Pathak" by 10
// db.student.updateOne(
//   { name: "Kuber Pathak" },
//   {
//     $inc: {
//       age: 10,
//     },
//   }
// );

// ? decrease age of "Rajiv Khadka" by 20
// db.student.updateOne(
//   { name: "Rajiv Khadka" },
//   {
//     $inc: {
//       age: -20,
//     },
//   }
// );

// ?$mul
// ? increase age of Rajiv by 4 times

// db.student.updateOne(
//   { name: "Rajiv Khadka" },
//   {
//     $mul: {
//       age: 4,
//     },
//   }
// );

// ? divide age of Rajiv by 2 times

// db.student.updateOne(
//   { name: "Rajiv Khadka" },
//   {
//     $mul: {
//       age: 1 / 2,
//     },

//   }
// );

// db.student.updateOne(
//   { name: "Kalyan Subedi" },
//   {
//     $set: {
//       age: 25,
//       address: "Ktm",
//     },
//   },
//   {
//     upsert: true,
//   }
// );
db.student.find();
