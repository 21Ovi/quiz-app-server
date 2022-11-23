import mongoose from "mongoose";

export const connect = async () => {
  await mongoose.connect(process.env.ATLAS_URL);
  console.log("D A T A B A S E  C O N N E C T E D");
};

export default connect;
