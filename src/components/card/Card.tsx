import "./Card.scss";
import moment from "moment";
import { Link } from "react-router-dom";

export const Card = ({item, index}: any) => {
    return (
        <Link className="card" to={`/${item.id}`}>
            <div className="cardTop">
                <div className="channelBadge">CH {item.stbNumber}</div>
                <img src={item.imageUrl} alt="tv-logo" className="cardImg"/>
            </div>
            <div className="cardBottom">
                <div className="cardTitle">{item.title}</div>
                {item && item.currentSchedule.map((schedule: any) => {
                    let m = moment.utc(schedule.datetime, "YYYY-MM-DD HH:mm:ss.SSS");
                    return (
                        <div className="cardContainer" key={m.format("LT")}>
                            <div className="channelTime">{m.format("LT")}</div>
                            <div className="channelTitle">{schedule.title}</div>
                        </div>
                    );
                })}
            </div>
        </Link>
    );
};
