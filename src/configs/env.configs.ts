import dotenv from "dotenv";
dotenv.config();

export const envConfig = {
  DB_HOST: process.env.DB_HOST ?? "",
  PORT: Number(process.env.PORT || 3000),
};
