// const db = require("../database");
// exports.getFavorites = async (req, res) => {
//   const FavoriteID = req.params.FavoriteID;
//   try {
//     const [favorites] = await db.execute(
//       "SELECT * FROM Favorites WHERE id = ?",
//       [FavoriteID]
//     );

//     if (favorites.length === 0) {
//       return res
//         .status(404)
//         .json({ error: "You haven't added any favorites yet" });
//     }

//     res.status(200).json(favorites[0]);
//   } catch (error) {
//     res.status(500).json({ error: "Database error" });
//   }
// };

// exports.addFavorites = async (req, res) => {
//   const { firstName, lastName, password, email } = req.params;
//   const hashedPassword = bcrypt.hashSync(password);
//   const username = firstName + " " + lastName;
//   try {
//     const [response] = await db.query(
//       "INSERT INTO Favorites (FavoriteID, UserID, EntityID, EntityType) VALUES (?, ?, ?, ?)",
//       [FavoriteID, UserID, EntityID, EntityType]
//     );
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };
