import "./ChannelDetail.scss";
import moment from "moment";
import { useState } from "react";

export const ChannelDetail = ({data}: any) => {
    const [isActive, setIsActive] = useState(0);
    const [channelList, setChannelList] = useState([
        data.schedule && Object.values(data?.schedule)[0]
    ]);

    const HandleClick = (item: any) => {
        setIsActive(item);
        setChannelList([Object.values(data?.schedule)[item]]);
    };

    return (
        <div className="channelDetail">
            <div className="channelTop">
                <div className="channelHeader">
                    <img src={data.originalImage} alt="channelLogo" className="channelLogo"/>
                    <div className="channelTitle">
                        <span className="title">CH{data.stbNumber}</span>
                        <span className="subtitle">{data.title}</span>
                    </div>
                </div>
                <div className="channelDescription">
                    {data.description}
                </div>
            </div>
            <div className="channelBottom">
                <div className="channelDateList">
                    {data.schedule && Object.entries(data.schedule).map((item: any, index: number) => {
                        let m = moment.utc(item[0], "YYYY-MM-DD");
                        return (
                            <div className={`channelDate ${isActive === index && "isActive"}`} key={item[0]}
                                 onClick={() => HandleClick(index)}>
                                {index === 0 ? "TODAY" : m.format("ddd").toUpperCase()}
                            </div>
                        );
                    })}
                </div>
                <div className="channelList">
                    {data.schedule && channelList[0].map((item: any, index: number) => {
                        let m = moment.utc(item.datetime, "YYYY-MM-DD HH:mm:ss.SSS");
                        return (
                            <div className="channelWrapper">
                                <div className="channelTime">
                                    {(index === 0 && isActive === 0) ? "On Now" : m.format("LT")}
                                </div>
                                <div className="channelTitle">{item.title}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};
