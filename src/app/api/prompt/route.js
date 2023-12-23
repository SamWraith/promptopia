import { connectToDb } from "@utils/database";
import Prompt from "@models/Prompt";

export const GET = async (req) => {
    try {
        await connectToDb();
        const prompts = await Prompt.find({}).populate("creater");

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new Response("Failed to get all prompts", { status: 500 });
    }
};
