import { connectToDb } from "@utils/database";
import Prompt from "@models/Prompt";
// GET

export const GET = async (req, { params }) => {
    try {
        await connectToDb();
        const prompt = await Prompt.findById(params.id).populate("creater");

        if (!prompt) return new Response("Prompt not found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 });
    } catch (error) {
        return new Response("Failed to get all prompts", { status: 500 });
    }
};

// PATCH (UPDATE)
export const PATCH = async (req, { params }) => {
    const { prompt, tag } = await req.json();
    try {
        await connectToDb();
        // const updatedPrompt = await Prompt.findByIdAndUpdate(
        //     params.id,
        //     { prompt, tag },
        //     { new: true }
        // );
        const updatedPrompt = await Prompt.findById(params.id);
        if (!updatedPrompt)
            return new Response("Prompt not found", { status: 404 });
        updatedPrompt.prompt = prompt;
        updatedPrompt.tag = tag;
        await updatedPrompt.save();
        return new Response(JSON.stringify(updatedPrompt), { status: 200 });
    } catch (error) {
        console.log(error.message);
        return new Response("Failed to update prompt", { status: 500 });
    }
};
// DELETE (DELETE)
export const DELETE = async (req, { params }) => {
    try {
        await connectToDb();
        const deletedPrompt = await Prompt.findByIdAndDelete(params.id);
        return new Response("Prompt Deleted succesfully", { status: 200 });
    } catch (error) {
        console.log(error.message);
        return new Response("Failed to delete prompt", { status: 500 });
    }
};
