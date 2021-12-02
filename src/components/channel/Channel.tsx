import "./Channel.scss";
import { Card } from "../card/Card";

export const Channel = ({data}: any) => {
    return (
        <div className="channel">
            {data && data.map((item: any) => (
                <Card key={item.id} item={item}/>
            ))}
        </div>
    );
};
