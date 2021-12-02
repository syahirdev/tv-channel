import "./Topbar.scss";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarLeft">
                <Link to='/'>
                    <img src="./assets/logo.png" alt="logo" className="topbarLogo"/>
                </Link>
                <div className="topbarText">Discovery</div>
                <div className="topbarText">Channel</div>
            </div>
            <div className="topbarRight">
                <div className="topbarText highlight">Signup</div>
                <div className="topbarText topbarButton">Login</div>
                <Search className='topbarIcon'/>
            </div>
        </div>
    );
};
