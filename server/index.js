import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { z } from "zod";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(5),
});

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("sserver sent");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
