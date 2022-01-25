const jwt = require('jsonwebtoken')
module.exports = function(role){
    return function(req, res, next){
        try{
            console.log(req.headers)
            const token = req.headers.autch.split('')[1] //! токен достается из заголовка
            console.log(token);
            if(!token){
                return res.send({message: 'Not auth'})
            }
            const decoded = jwt.verify(token, 'SECRET_KEY_RANDOM') //!получаем раскодированный токен и проверяем его роль
            if(decoded.role !== role){
                res.send({message: 'Not access'})
            }
            req.user = decoded
            next()
        }catch(e){
            res.send({message:'Not auth'})
        }
    }
}
//! middleware
//! 