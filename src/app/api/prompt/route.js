import { connectToDb } from "@utils/database";
import Prompt from "@models/Prompt";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        await connectToDb();
        const prompts = await Prompt.find({}).populate("creater");
        // console.log(prompts[3].creater.image);

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new Response(
            `Failed to get all prompts error: ${error.message}`,
            { status: 500 }
        );
    }
};
