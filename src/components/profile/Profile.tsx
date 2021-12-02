import "./Profile.scss";
import { Category } from "../category/Category";

export const Profile = () => {
    return (
        <div className="profile">
            <div className="profileTitle">Category</div>
            <div className="profileSubtitle">
                Choose from 100+ different channel
                to enjoy your weekends!
            </div>
            <div className="profileWrapper">
                <Category title="All" image="all.jpg"/>
                <Category title="Sports" image="sports.jpg"/>
                <Category title="Malay" image="malay.jpg"/>
                <Category title="Chinese" image="chinese.jpg"/>
                <Category title="Indian" image="indian.jpg"/>
                <Category title="International" image="international.jpg"/>
                <Category title="Astro Best" image="astro-best.jpg"/>
                <Category title="Astro First" image="astro-first.jpg"/>
            </div>
        </div>
    );
};
