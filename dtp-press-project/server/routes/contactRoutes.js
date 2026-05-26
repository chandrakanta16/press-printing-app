import express from "express";
import Contact from "../models/Contact.js";
const router = express.Router();
router.post("/", async (req, res) => {

  try {
    const contact =
      new Contact(req.body);
    await contact.save();

    res.status(201).json({
      success: true,
      message: "Message Saved",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


router.get("/", async (req, res) => {

  try {

    const contacts =
      await Contact.find()
      .sort({ createdAt: -1 });

    res.status(200).json(contacts);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.delete(
  "/delete",
  async (req, res) => {

    try {

      const { ids } = req.body;

      await Contact.deleteMany({
        _id: { $in: ids },
      });

      res.status(200).json({
        success: true,
        message:
          "Messages Deleted",
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