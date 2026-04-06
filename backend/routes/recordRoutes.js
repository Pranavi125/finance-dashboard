import express from "express";
import {
  getRecords,
  addRecord,
} from "../controllers/recordController.js";

const router = express.Router();

router.get("/", getRecords);
router.post("/", addRecord);

export default router;