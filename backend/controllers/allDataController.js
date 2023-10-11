const db = require("../database");
exports.getAllData = async (req, res) => {
  try {
    const queryRestaurants = "SELECT * FROM Restaurants";
    const queryActivities = "SELECT * FROM Activities";
    const queryAccommodations = "SELECT * FROM Accommodations";
    const queryLandmarks = "SELECT * FROM Landmarks";

    const [restaurants] = await db.execute(queryRestaurants);
    const [activities] = await db.execute(queryActivities);
    const [accommodations] = await db.execute(queryAccommodations);
    const [landmarks] = await db.execute(queryLandmarks);

    const allData = [restaurants, activities, accommodations, landmarks];
    res.status(200).json(allData);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
};
