const {verifyAccessToken} = require('../service/tokenService');
const AuthError = require('../errors/AuthError');


module.exports.checkToken = async (req, res, next) => {
    try {
        const {headers: {authorization}} = req;
        if (!authorization) {
            throw new AuthError('Need authorization') // маємо видати 401 помилку
        }
        const [, token] = authorization.split(' ');
      req.payload =  await verifyAccessToken(token);
      console.log(req.payload);
      // відповідаємо 403 помилкою - необхідний рефреш сесії
      next();
    } catch(error) {
        next(error)
    }
}

/*
1. Запит приходить без токена
    Помилка 401 - Unauthorized
2. Запит приходить з токеном у заголовках
    2.1 Витягаємо токен з заголовка
    2.2 Перевіряємо (верифікуємо) токен:
        - якщо він валідний і все ок - викликаємо next()
        - якщо він невалідний - помилка 403 Forbidden
    Якщо він прострочився - надсилаємо 403 і змушуємо користувача оновити сесію

*/

