import "./Profile.scss";
import { Category } from "../category/Category";
import React from "react";

interface ProfileProps {
    HandleCategory: (e: string) => void;
}

export const Profile = ({HandleCategory}: ProfileProps) => {
    const categories = [
        {id: 1, title: "All", image: "all.jpg"},
        {id: 2, title: "Sports", image: "sports.jpg"},
        {id: 3, title: "Malay", image: "malay.jpg"},
        {id: 4, title: "Chinese", image: "chinese.jpg"},
        {id: 5, title: "Indian", image: "indian.jpg"},
        {id: 6, title: "International", image: "international.jpg"},
        {id: 7, title: "Astro Best", image: "astro-best.jpg"},
        {id: 8, title: "Astro First", image: "astro-first.jpg"}
    ];

    return (
        <div className="profile">
            <div className="profileTitle">Category</div>
            <div className="profileSubtitle">
                Choose from 100+ different channel
                to enjoy your weekends!
            </div>
            <div className="profileWrapper">
                {categories.map((category: { id: number, title: string, image: string }) => (
                    <Category
                        key={category.id}
                        title={category.title}
                        image={category.image}
                        HandleCategory={HandleCategory}/>
                ))}
            </div>
        </div>
    );
};
