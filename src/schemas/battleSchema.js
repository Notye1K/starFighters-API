import Joi from "joi"

const schema = Joi.object({
    firstUser: Joi.string().required(),
    secondUser: Joi.string().required()
})

export default schema
