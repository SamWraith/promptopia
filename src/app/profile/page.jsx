"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // fetch posts
        const fetchPosts = async () => {
            const response = await fetch(
                `/api/users/${session?.user.id}/posts`
            );
            const data = await response.json();

            setPosts(data);
        };
        if (session?.user.id) fetchPosts();
    }, []);
    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    };
    const handleDelete = async (post) => {
        const hasConfirmed = confirm("Are you sure you want to delete?");
        if (hasConfirmed) {
            try {
                const response = await fetch(
                    `/api/prompt/${post._id.toString()}`,
                    {
                        method: "DELETE",
                    }
                );
                if (response.ok) {
                    setPosts(posts.filter((p) => p._id !== post._id));
                }
            } catch (error) {
                console.log(error.message);
            }
        }
    };
    return (
        <div>
            <Profile
                name="My"
                desc="This is my profile"
                data={posts}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    );
};
export default MyProfile;
