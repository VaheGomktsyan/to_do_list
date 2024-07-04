const Joi = require("joi");

const taskSchema = Joi.object({
    name: Joi.string().min(1).max(10).required(),
    description: Joi.string().min(1).max(100).required(),
});

const updateSchema = Joi.object({
    name: Joi.string().min(1).max(10),
    description: Joi.string().min(1).max(100),
});

module.exports = { taskSchema,updateSchema };
