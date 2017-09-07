module.exports = (server) => {
    server.get('/customers/', function (req, res, next) {
        res.send({ "kundenr": "ef3897", "navn": "Mikkel Ditlev" });
        return next();
    });
};