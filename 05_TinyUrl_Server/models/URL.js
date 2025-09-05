import mongoose from "mongoose";

const URLSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
});

const URLs = mongoose.model("URLs", URLSchema);

export default URLs;
