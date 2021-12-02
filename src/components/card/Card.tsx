import "./Card.scss";
import moment from "moment";

export const Card = ({item}: any) => {
    return (
        <div className="card">
            <div className="cardTop">
                <div className="channelBadge">CH {item.stbNumber}</div>
                <img src={item.imageUrl} alt="tv-logo" className="cardImg"/>
            </div>
            <div className="cardBottom">
                <div className="cardTitle">{item.title}</div>
                {item && item.currentSchedule.map((schedule: any) => {
                    let m = moment.utc(schedule.datetime, "YYYY-MM-DD HH:mm:ss.SSS");
                    return (
                        <div className="cardContainer">
                            <div className="channelTime">{m.format("LT")}</div>
                            <div className="channelTitle">{schedule.title}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
