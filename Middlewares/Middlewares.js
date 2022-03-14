const bCrypt = require('bcrypt');

class CryptoUtil {
        //password hashing process
    static createHash(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null)
    }
        // checking if password is valid
    static isValidPassword(password, hashPassword) {
        return bCrypt.compareSync(password, hashPassword)
    }
}

module.exports = CryptoUtil