class UserDTO {
    constructor(user) {
        this.name = user.name
        this.username = user.username
        this.email = user.email
    }
}

const makeUserDTO = (user) => new UserDTO(user);

// const TokenModel = require("../Middlewares/Model/schema/token.schema")
// class TokenService{
//     generateTokens(payload){
//         const accessToken = jwt.sign(payload, process.env.JWT_KEY, {expiresIn: "30m"})
//         const refreshToken = jwt.sign(payload, process.env.JWT_KEY, {expiresIn: "30d"})

//     return {
//         accessToken,
//         refreshToken
//     }
// }
//     saveToken(userId, refreshToken){
//         const tokenData = TokenModel.findOne({user: userId});
//         if(tokenData){
//             tokenData.refreshToken = refreshToken;
//             return tokenData.save()
//         }
//         const token = TokenModel.create({user: userId}, refreshToken)
//         return token;
//     } 
// } 




module.exports = makeUserDTO