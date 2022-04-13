export default function validateSchema(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            var errors = validation.error.details.map(function (v) { return v.message; });
            return res.status(422).send(errors);
        }
        next();
    };
}
