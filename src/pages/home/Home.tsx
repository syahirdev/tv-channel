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
    const filterCategoryParams = ["category", "language"];
    const [filterParams, setFilterParams] = useState<Array<string>>([]);

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
        const newData = data.filter((item) => {
            return filterCategoryParams.some((newItem) => {
                // @ts-ignore
                return (item[newItem].toString().toLowerCase().indexOf(e.toLowerCase()) !== -1);
            });
        });
        if (newData) {
            // @ts-ignore
            setFilteredData(newData);
        }
        // console.log(e);
        //
        // //  Add to filter
        // if (!filterParams.includes(e)) {
        //     setFilterParams([...filterParams, e]);
        //     //-------------
        //     const newData = data.filter((item) => {
        //         return filterCategoryParams.some((newItem) => {
        //             // @ts-ignore
        //             console.log(newItem);
        //             console.log(item);
        //
        //
        //             // return (item[newItem].toString().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
        //         })
        //     });
        //     if (newData) {
        //         // @ts-ignore
        //         setFilteredData(newData);
        //     }
        //     //-------------
        //     //  Remove to filter
        // } else {
        //     setFilterParams(filterParams.filter((filter) => filter !== e));
        // }

        // console.log(temp);
        // const newData = data.filter((item) => {
        //     return filterParams.some((newItem) => {
        //         // @ts-ignore
        //         return (item[newItem].toString().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
        //     });
        // })
        // if (newData) {
        //     // @ts-ignore
        //     setFilteredData(newData);
        // }
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
