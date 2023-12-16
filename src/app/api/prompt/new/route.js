import { connectToDb } from "@utils/database";
import Prompt from "@models/Prompt";
export const POST = async (req) => {
    const { prompt, userId, tags } = await req.json();
    try {
        await connectToDb();
        const newPrompt = new Prompt({
            prompt: prompt,
            creater: userId,
            tag: tags,
        });
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 200 });
    } catch (error) {
        console.log(error.message);
        return new Response("Failed to create a new prompt!", {
            status: 500,
            error: error.message,
        });
    }
};
