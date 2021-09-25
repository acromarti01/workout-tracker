const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const exerciseRoutes = require("./exercise");
const statsRoutes = require("./statsRoutes");

router.use("/", homeRoutes);
router.use("/exercise", exerciseRoutes);
router.use("/stats", statsRoutes);

module.exports = router;