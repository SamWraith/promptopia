import mongoose, { model, models } from "mongoose";

const PromptSchema = new mongoose.Schema({
    creater: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    prompt: {
        type: String,
        required: [true, "Prompt is required!"],
    },
    tag: {
        type: String,
        required: [true, "Tag is required!"],
    },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
