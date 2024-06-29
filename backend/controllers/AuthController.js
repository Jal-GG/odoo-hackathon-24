const AuthUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if (user && (await User.matchPasswor(Password))){
        const token = generateToken(user._id)
        res.json({
            _id:user._id,
            email:user.email,
            token
        })
    }
})
