const { where } = require("sequelize");
const { Tasks } = require("../models");
const { taskSchema, updateSchema } = require("../../schema");

class MainController {
    static async getTasks(req, res) {
        const tasks = await Tasks.findAll();
        res.send(tasks);
    }
    static async getTaskById(req, res) {
        const id = req.params.id;
        const tasks = await Tasks.findByPk(id);
        res.send(tasks ? tasks : { message: "tasks not found" });
    }
    static async updateDoneTask(req, res) {
        const id = req.params.id;
        const tasks = await Tasks.findByPk(id);
        if (tasks) {
            await Tasks.update({done:!tasks.done}, {
                where: { id },
            });
            res.send(true);
        } else {
            res.send(false);
        }
    }
    static async createTask(req, res) {
        const { error, value } = taskSchema.validate(req.body);
        if (error) {
            res.send(error.details[0].message);
        } else {
            const create = await Tasks.create(req.body);
            res.send(create);
        }
    }
    static async updateTask(req, res) {
        const { id } = req.params;
        const tasks = await Tasks.findByPk(id);
        const { error, value } = updateSchema.validate(req.body);
        if (error) {
            res.send(error.details[0].message);
        } else {
            if (tasks) {
                await Tasks.update(req.body, {
                    where: { id },
                });
                res.send(true);
            } else {
                res.send(false);
            }
        }
    }
    static async deleteTask(req, res) {
        console.log(req.params);
        const { id } = req.params;
        const tasks = await Tasks.findByPk(id);
        if (tasks) {
            await Tasks.destroy({
                where: { id },
            });
            res.send(true);
        } else {
            res.send(false);
        }
    }
}
module.exports = { MainController };
