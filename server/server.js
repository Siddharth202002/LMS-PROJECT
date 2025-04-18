import app from "./app.js";
import Razorpay from "razorpay";

import cloudinary from "cloudinary";
import connection from "./config/config.js";
const PORT = process.env.PORT;

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

app.listen(PORT, async () => {
  await connection();
  console.log(`server is running at port no ${PORT}`);
});
