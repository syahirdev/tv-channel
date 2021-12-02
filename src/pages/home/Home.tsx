import "./Home.scss";
import { Channel } from "../../components/channel/Channel";
import { Profile } from "../../components/profile/Profile";
import { Topbar } from "../../components/topbar/Topbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components/header/Header";

export const Home = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState(null);
    const searchParams = ["title", "stbNumber"];
    const [filterParam, setFilterParam] = useState(["All"]);

    const HandleSearch = (e: string) => {
        const newData = data.filter((item) => {
            return searchParams.some((newItem) => {
                // @ts-ignore
                return (item[newItem].toString().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
            });
        });
        if (newData) {
            // @ts-ignore
            setFilteredData(newData);
        }
    };

    const HandleCategory = (e: string) => {
        console.log(e);
    }

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
            <Topbar HandleSearch={HandleSearch}/>
            <Header/>
            <Profile HandleCategory={HandleCategory}/>
            <Channel data={filteredData ? filteredData : data}/>
        </div>
    );
};
