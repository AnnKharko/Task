module.exports = {
    findAll: (req, res, next) => {
        try {
            const { body } = req;

            res.json(body);
        } catch (e) {
            next(e);
        }
    },
    findOne: (req, res, next) => {
        try {
            const { body } = req;

            res.json(body);
        } catch (e) {
            next(e);
        }
    },
    createOne: (req, res, next) => {
        try {
            const { body } = req;

            res.json(body);
        } catch (e) {
            next(e);
        }
    },
    deleteOne: (req, res, next) => {
        try {
            const { body } = req;

            res.json(body);
        } catch (e) {
            next(e);
        }
    }
};
