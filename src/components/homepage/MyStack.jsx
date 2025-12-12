import React from "react";
import { cardsData } from "../../assets/assets.js";
import "./styles/mystack.css";


const MyStack = () => {

    const CreateCard = ({ card }) => (
        <div className="card">
            <div className="card-image">
                <img src={card.image} alt={card.label || "tech icon"} />
            </div>
            <div className="card-label">{card.label}</div>
        </div>
    );

    return (
        <div className="mystack">
            <div className="stack-wrapper">
                <div className="stack-title">My Stack</div>
                {/* MARQUEE 1 */}
                <div className="marquee-row">
                    <div className="fade-left"></div>
                    <div className="marquee-inner">
                        {[...cardsData, ...cardsData.reverse()].map((card, i) => (
                            <CreateCard key={i} card={card} />
                        ))}
                    </div>
                    <div className="fade-right"></div>
                </div>

                {/* MARQUEE 2 */}
                <div className="marquee-row">
                    <div className="fade-left"></div>
                    <div className="marquee-inner marquee-reverse">
                        {[...cardsData, ...cardsData].map((card, i) => (
                            <CreateCard key={i} card={card} />
                        ))}
                    </div>
                    <div className="fade-right"></div>
                </div>
            </div>

        </div>

    );
};

export default MyStack;
