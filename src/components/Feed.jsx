"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    );
};

const Feed = () => {
    const [searchText, setSearchText] = useState("");
    const [posts, setPosts] = useState([]);
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };
    useEffect(() => {
        // fetch posts
        const fetchPosts = async () => {
            const response = await fetch("/api/prompt");
            const data = await response.json();

            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Search for a tag or username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>
            <PromptCardList
                data={posts}
                handleTagClick={() => {
                    // posts.map((post, index) => {
                    //     console.log(`${index}:`, post);
                    //     if (post.creater && post.creater.image) {
                    //         console.log(
                    //             `Image at ${index}:`,
                    //             post.creater.image
                    //         );
                    //     } else {
                    //         console.log(`Image not available at ${index}`);
                    //     }
                    // });
                    posts.map((post) => {
                        console.log(post.creater.image);
                    });
                }}
            />
        </section>
    );
};
export default Feed;

// Feed done
