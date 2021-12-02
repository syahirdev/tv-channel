import "./Topbar.scss";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Topbar = ({HandleSearch}: any) => {
    const [searchActive, setSearchActive] = useState(false);

    const HandleClick = () => {
        setSearchActive(!searchActive);
    };

    return (
        <div className="topbar">
            <div className="topbarLeft">
                <Link to="/">
                    <img src="./assets/logo.png" alt="logo" className="topbarLogo"/>
                </Link>
                <div className="topbarText">Discovery</div>
                <div className="topbarText">Channel</div>
            </div>
            <div className="topbarRight">
                <div className={`topbarText ${searchActive && "hideText"}`}>Signup</div>
                <div className={`topbarText topbarButton ${searchActive && "hideText"}`}>Login</div>
                <input
                    className={`searchInput ${searchActive && "searchActive"}`}
                    placeholder="Search Channels, TV Shows, Movies..."
                    onChange={HandleSearch}
                    type="text"/>
                <Search
                    className={`topbarIcon ${searchActive && "iconActive"}`}
                    onClick={HandleClick}/>
            </div>
        </div>
    );
};
