import { Schema, model, models } from "mongoose";

const profileSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    realState: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    constructionDate: {
      type: Date,
      require: true,
    },
    category: {
      type: String,
      enum: ["villa", "aparment", "store", "office"],
      require: true,
    },
    amenities: {
      type: [String],
      default: [],
    },
    rules: {
      type: [String],
      default: [],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    published :{
      type:Boolean,
      default:false,
    }
  },
  { timestamps: true }
);

const Profile = models.Profile || model("Profile", profileSchema);

export default Profile;
