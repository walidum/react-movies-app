const User = require('../shemas/user')
module.exports.REGISTER = (req, res) => {
    const user = new User(req.body)
    user.save()
        .then(ok => {
            res.send('OK')
        })
        .catch(err => {
            res.send('ERR')
        })
}
module.exports.LOGIN = async (req, res) => {
    console.log(req.body)
    if (!req.body.email) {
        return res.send({error: true, msg: 'email required'})
    }
    if (!req.body.password) {
        return res.send({error: true, msg: 'password required'})
    }
    const user = await User.findOne({email: req.body.email}).exec()
    if (!user) return res.send({error: true, msg: 'email invalid'})
    if (user.password !== req.body.password) return res.send({error: true, msg: 'passorwd invalid'})
    res.send({error: false, msg: 'OK'})
}
module.exports.ALLUSERS = (req, res) => {
    User.find()
        .then(u => {
            res.send(u)
        })
        .catch(err => {
            res.send('ERR')
        })

}
