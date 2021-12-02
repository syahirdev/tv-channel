import "./Content.scss";
import { Topbar } from "../../components/topbar/Topbar";
import { Header } from "../../components/header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChannelDetail } from "../../components/channelDetail/ChannelDetail";
import { useParams } from "react-router-dom";

export const Content = () => {
    const [data, setData] = useState([]);
    let {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${process.env.REACT_APP_BASE_URL}/channel/${id}.json`)
                .then(res => {
                    setData(res.data.response);
                });
        };
        fetchData().then(() => console.log("200 OK"));
    }, []);

    return (
        <div className="content">
            <Topbar/>
            <Header/>
            <ChannelDetail data={data} key={data}/>
        </div>
    );
};
