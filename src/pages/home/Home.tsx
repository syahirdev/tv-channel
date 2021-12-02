import "./Home.scss";
import { Channel } from "../../components/channel/Channel";
import { Profile } from "../../components/profile/Profile";
import { Header } from "../../components/header/Header";
import { Topbar } from "../../components/topbar/Topbar";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${process.env.REACT_APP_BASE_URL}/channel/all.json`)
                .then(res => {
                    setData(res.data.response);
                });
        };
        fetchData().then(() => console.log("200 OK"));
    }, []);

    return (
        <div className="home">
            <Topbar/>
            <Header/>
            <Profile/>
            <Channel data={data}/>
        </div>
    );
};
