import "./Category.scss";

interface CategoryProps {
    HandleCategory: (e:string) => void
    title: string,
    image: string,
}

export const Category = ({HandleCategory, title, image}: CategoryProps) => {
    return (
        <div className="category" onClick={() => HandleCategory(title)}>
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
