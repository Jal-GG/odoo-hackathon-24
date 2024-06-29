import jwt from 'jsonwebtoken';
const JWT_SECRET="SECRETISSECRET";



const generateJsonWebTokenandCookie = (userId,res)=>{
    const token = jwt.sign({userId},JWT_SECRET,{
        expiresIn: "15d",
    });
    res.cookie("jwt",token,{
        maxAge:15 * 24 * 60 * 60 * 1000,
        httpOnly:true,
        sameSite:true,
        secure:process.env.NODE_ENV !== 'development',

    });
};

export default generateJsonWebTokenandCookie;