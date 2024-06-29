import jwt from 'jsonwebtoken';


const generateJsonWebTokenandCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
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