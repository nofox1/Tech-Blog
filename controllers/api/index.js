const router = require("express").Router();
const userRoutes = require("./userRoute");
const postRoutes = require("./postRoute");
const dashBoardRoute = require("./dashboardRoute");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/dashboard", dashBoardRoute);

module.exports = router;
