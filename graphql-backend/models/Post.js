import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Post schema that has references to User, Like and Comment schemas
 */
const postSchema = Schema(
  {
    title: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// postSchema.virtual("id").get(function () {
//   return this._id.toString();
// });

export default mongoose.model("Post", postSchema);
