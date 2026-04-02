import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for the project."],
  },
  description: {
    type: String,
    required: [true, "Please provide a description for the project."],
  },
  imageUrl: {
    type: String,
    required: false,
  },
  techStack: {
    type: [String],
    required: true,
  },
  githubLink: {
    type: String,
    required: false,
  },
  liveLink: {
    type: String,
    required: false,
  },
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
