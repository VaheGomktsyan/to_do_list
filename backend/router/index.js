const { MainController } = require("../app/controllers/MainController");

const router = require("express").Router();

router.get("/", MainController.getTasks);
router.get("/:id", MainController.getTaskById);
router.post("/", MainController.createTask);
router.patch("/:id", MainController.updateTask);
router.patch("/done/:id", MainController.updateDoneTask);
router.delete("/:id", MainController.deleteTask);

module.exports = { router };
