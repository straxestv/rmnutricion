import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://eduardgamerx66:19631964EDD@cluster0.hsugtcw.mongodb.net/";

export const JWT_SECRET = process.env.JWT_SECRET || "secretkey";