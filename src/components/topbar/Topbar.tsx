import "./Topbar.scss";
import { Search } from "@mui/icons-material";

export const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarLeft">
                <img src="./assets/logo.png" alt="logo" className="topbarLogo"/>
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
