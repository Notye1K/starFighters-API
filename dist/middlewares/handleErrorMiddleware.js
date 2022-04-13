export default function handleErrorMiddleware(error, req, res, next) {
    if (error.type === 'userError') {
        res.status(error.status).send(error.message);
    }
    else {
        //console.log(error)
        res.sendStatus(500);
    }
}
