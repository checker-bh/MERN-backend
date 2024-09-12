import mongoose from "mongoose";

const ratingsReviewsSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
    },
    review: {
      type: String,
    },
    packageId: {
      type: String,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    userProfileImg: {
      type: String,
      default:
        "https://firebasestorage.googleapis.com/v0/b/mern-ga-project.appspot.com/o/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg?alt=media&token=a46087b8-03a9-40a7-820d-d4362b8cf14c",
    },
  },
  { timestamps: true }
);

const RatingReview = mongoose.model("RatingReview", ratingsReviewsSchema);

export default RatingReview;
