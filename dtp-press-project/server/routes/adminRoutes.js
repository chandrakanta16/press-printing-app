import express from "express";
import Admin from "../models/Admin.js";
const router = express.Router();

router.post(
  "/login",
  async (req, res) => {

    const { email, password } =
      req.body;

    try {

      const admin =
        await Admin.findOne({
          email,
          password,
        });

      if (!admin) {

        return res.status(401).json({
          success: false,
          message:
            "Invalid Email or Password",
        });
      }

      res.status(200).json({
        success: true,
        message: "Login Success",
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }

  }
);

export default router;