import "./Home.scss";
import { Channel } from "../../components/channel/Channel";
import { Profile } from "../../components/profile/Profile";
import { Header } from "../../components/header/Header";
import { Topbar } from "../../components/topbar/Topbar";

export const Home = () => {
    return (
        <div className="home">
            <Topbar/>
            <Header/>
            <Profile/>
            <Channel/>
        </div>
    );
};
