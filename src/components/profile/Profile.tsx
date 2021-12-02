import "./Profile.scss";
import { Category } from "../category/Category";
import React, { useState } from "react";

interface ProfileProps {
    HandleCategory: (e: string) => void;
}

interface CategoryProps {
    id: number,
    title:string,
    image: string,
    isActive: boolean
}

export const Profile = ({HandleCategory}: ProfileProps) => {
    const [categories, setCategories] = useState<Array<CategoryProps>>([
        {id: 1, title: "All", image: "all.jpg", isActive: false},
        {id: 2, title: "Sports", image: "sports.jpg", isActive: false},
        {id: 3, title: "Malay", image: "malay.jpg", isActive: false},
        {id: 4, title: "Chinese", image: "chinese.jpg", isActive: false},
        {id: 5, title: "Indian", image: "indian.jpg", isActive: false},
        {id: 6, title: "International", image: "international.jpg", isActive: false},
        {id: 7, title: "Astro Best", image: "astro-best.jpg", isActive: false},
        {id: 8, title: "Astro First", image: "astro-first.jpg", isActive: false}
    ]);

    const HandleActiveCategories = (selectedIndex: number) => {
        let newArr = [...categories];

        newArr.map((item, index) => (
            selectedIndex === index ?
                newArr[index] = {...newArr[index], isActive: !newArr[index].isActive} :
                newArr[index] = {...newArr[index], isActive: false}
        ));

        setCategories(newArr);
    };

    return (
        <div className="profile">
            <div className="profileTitle">Category</div>
            <div className="profileSubtitle">
                Choose from 100+ different channel
                to enjoy your weekends!
            </div>
            <div className="profileWrapper">
                {categories.map((category: CategoryProps, index: number) => (
                    <Category
                        key={category.id}
                        category={category}
                        index={index}
                        HandleActiveCategories={HandleActiveCategories}
                        HandleCategory={HandleCategory}/>
                ))}
            </div>
        </div>
    );
};
