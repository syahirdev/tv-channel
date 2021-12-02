import "./Category.scss";

interface CategoryProps {
    title: string,
    image: string,
}

export const Category = ({title, image}: CategoryProps) => {
    return (
        <div className="category">
            <div className="categoryTop">
                <img src={`./assets/category/${image}`} alt="" className="categoryImg"/>
                <div className="linearGradient"/>
                <div className="categoryTitle">
                    {title}
                </div>
            </div>
        </div>
    );
};
