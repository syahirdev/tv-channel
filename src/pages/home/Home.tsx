import "./Home.scss";
import { Channel } from "../../components/channel/Channel";
import { Profile } from "../../components/profile/Profile";
import { Topbar } from "../../components/topbar/Topbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components/header/Header";

export const Home = () => {
    const [data, setData] = useState<Array<any>>([]);
    const [filteredData, setFilteredData] = useState<Array<any>>();
    const searchParams = ["title", "stbNumber"];
    const filterParams = ["category", "language"];
    const [currentCategory, setCurrentCategory] = useState<string>("");

    const HandleSearch = (e: any) => {
        const newData = data.filter((item) => {
            return searchParams.some((newItem) => {
                return (item[newItem].toString().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
            });
        });
        if (newData) {
            setFilteredData(newData);
        }
    };

    const HandleCategory = (e: string) => {
        if (currentCategory === e || "All" === e) {
            setFilteredData(undefined);
        } else {
            const newData = data.filter((item) => {
                return filterParams.some((newItem) => {
                    return (item[newItem].toString().toLowerCase().indexOf(e.toLowerCase()) !== -1);
                });
            });
            if (newData) {
                setFilteredData(newData);
                setCurrentCategory(e);
            }
        }
    };

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
