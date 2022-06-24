import User from "../models/User.js";
import { QueryTypes } from "sequelize";
import db from "../config/database.js";

export const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.json({
            "message": "User Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const login=async(req,res)=>{
    try {
        const loginuser= await db.QueryTypes(`SELECT * FROM user where email=? and password=?`,
        { type: QueryTypes.SELECT})
        // res.json(loginuser)
        res.status(200).json({
            message:"Welcom user"
        })
        
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const logout = async (req, res) => {
    try {
        console.log("logged out");
        return res.json({ message: "logout success" });

    } catch (error) {
        console.log("error", error);
        return res.status(400).json({
            message: "Fail to process!"
        })
    }
}


