const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {

        const token = req.headers.token;
        const decoded = jwt.verify(token);
        console.log(decoded);

        req.userData = decoded;
        next();
    } catch (error) {
      // return res.redirect("/login");
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};
