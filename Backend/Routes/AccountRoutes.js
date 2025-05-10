const express = require('express');
const accountModel = require('../Models/AccountModel');
const router = express.Router()

router.post('/auth/register',async (req,res,next)=>{
    try {
        const { name, email, password } = req.body

        const user = await User.create({
            name,
            email,
            password,
            role:'user',
            active:true
        })

        sendTokenResponse(user, 200, res);
        // const token = user.getSignedJwtToken()
        // res.status(200).json({ success: true, token })

    } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
})
module.exports = router;
