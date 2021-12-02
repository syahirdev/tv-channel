import "./Channel.scss";
import { Card } from "../card/Card";

export const Channel = ({data}: any) => {
    return (
        <div className="channel">
            {data && data.map((item: any, index: number) => (
                <Card key={index} item={item} index={index}/>
            ))}
        </div>
    );
};
