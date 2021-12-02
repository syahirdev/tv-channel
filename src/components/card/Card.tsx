import "./Card.scss";

export const Card = () => {
    return (
        <div className="card">
            <div className="cardTop">
                <div className="channelBadge">CH101</div>
                <img src="./assets/tv1.png" alt="tv-logo" className="cardImg"/>
            </div>
            <div className="cardBottom">
                <div className="cardTitle">TV1</div>
                <div className="cardContainer">
                    <div className="channelTime channelTimeFirst">On Now</div>
                    <div className="channelTitle channelTitleFirst">Anda Musykil</div>
                </div>
                <div className="cardContainer">
                    <div className="channelTime">04:00 PM</div>
                    <div className="channelTitle">SEMASA 4</div>
                </div>
                <div className="cardContainer">
                    <div className="channelTime">04:05 PM</div>
                    <div className="channelTitle">Diari Marin</div>
                </div>
            </div>
        </div>
    );
};
