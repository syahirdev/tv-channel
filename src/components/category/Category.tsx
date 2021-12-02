import "./Category.scss";
import React from "react";

interface CategoryProps {
    HandleCategory: (e: string) => void
    category: { id: number, title: string, image: string, isActive: boolean }
    index: number
    HandleActiveCategories: (index: number) => void
}

export const Category = ({HandleCategory, category, index, HandleActiveCategories}: CategoryProps) => {
    const HandleClick = () => {
        HandleCategory(category.title);
        HandleActiveCategories(index)
    };

    return (
        <div className="category" onClick={HandleClick}>
            <div className="categoryTop">
                <img src={`./assets/category/${category.image}`} alt="" className="categoryImg"/>
                <div className={`linearGradient ${category.isActive && 'linearActive'}`}/>
                <div className="categoryTitle">
                    {category.title}
                </div>
            </div>
        </div>
    );
};
