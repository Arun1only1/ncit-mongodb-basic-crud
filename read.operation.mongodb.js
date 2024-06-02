use("ncit");

// ? mongo db read operation
// db.movies.find().count();

// ? operator

// ? comparison operator
// ? $eq, $ne, $lt, $lte, $gt, $gte
// ?$eq (===)
// db.movies.find({ name: { $eq: "Bitten" } });
// ? alternative code
// db.movies.find({ name: "Bitten" });

// ? $ne
// db.movies.find({ name: { $not: { $eq: "Bitten" } } });

// db.movies.find({ name: { $ne: "Bitten" } });

// ?$lt
// db.movies.find({ id: { $lt: 10 } }, { _id: 0, name: 1, id: 1 });

// ?$gt
// db.movies.find({ id: { $gt: 20 } }, { name: 1, id: 1, _id: 0 });

// ? logical operator
// ? $and, $or, $not
// db.movies.find(
//   {
//     $and: [
//       { genres: "Drama" },
//       {
//         runtime: 60,
//       },
//     ],
//   },
//   {
//     name: 1,
//     genres: 1,
//     runtime: 1,
//     _id: 0,
//   }
// );

// ? alternative code to $and
// db.movies.find(
//   { genres: "Drama", runtime: 60 },
//   { name: 1, genres: 1, runtime: 1 }
// );

// ?$or
// ? find movies whose language is "English" or rating
// ?is  greater than 9
// db.movies.find(
//   {
//     $or: [{ language: "English" }, { "rating.average": { $gt: 9 } }],
//   },
//   {
//     name: 1,
//     avgRating: "$rating.average",
//     language: 1,
//   }
// );

// ?$not
// db.movies.find({ language: { $ne: "English" } });

// ? $nor
// ? find movies whose genre is neither Drama not runtime is 60

// db.movies.find({
//   $nor: [{ genres: "Drama" }, { runtime: 60 }, { genres: "Comedy" }],
// });

// ? evaluation operator
// ? $regex

// db.movies.find({ summary: { $regex: "dance competition", $options: "i" } });

// ?array operator
// ? $size, $all, $elemMatch

// ? $size does not accept range
// db.movies.find({ genres: { $size: 2 } });

// ?$all
// ? alternative to $and if field is same
// ? find movies whose genres is "Drama" and "Comedy"
// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Comedy" }] });
// ? alternative code
// db.movies.find({ genres: { $all: ["Drama", "Comedy", "Action"] } });

// ?1.find movies whose network country code is "US"
// db.movies.find({ "network.country.code": "US" });

// ?2.find movies whose rating is greater than 6 and less than 7
// db.movies.find({
//   $and: [
//     { "rating.average": { $gt: 6 } },
//     {
//       "rating.average": { $lt: 7 },
//     },
//   ],
// });

// db.movies.find({
//   "rating.average": { $gt: 6, $lt: 7 },
// });
// ?3.find movies whose genre includes Drama and Mystery
// ?4.find movies whose language is English and rating is greater than 9
// ?5.find movies whose rating is either 7 or 7.5 or 8
