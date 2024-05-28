import react, { useState, useEffect } from 'react';
import DataService from '../services/DataService';

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon
} from 'react-share';
import { urlHost } from '../App'

const Card = (props) => {
    const [liked, setLiked] = useState(false);

    let collected = parseInt(props.collected);
    let total = parseInt(props.total);
    let percentageCollected = parseInt(collected * 100 / total);
    let percentage = percentageCollected + '%';
    const progress = {
        '--progress': percentage // Establecer el valor de la variable CSS --progress
    };
    const [showShareButtons, setShowShareButtons] = useState(false);
    const toggleShareButtons = () => {
        setShowShareButtons(!showShareButtons);
    };

    const [hearts, setHearts] = useState(props.heartAmount);
    const onClickHeart = async () => {
        try {
            if (!liked) {
                setHearts(await DataService.addHeart(props.id, props.heartAmount));
                setLiked(true);
                localStorage.setItem(`liked-${props.id}`, 'true');
            }
            else {
                alert('Ya diste un me gusta a esta causa!');
            }

        } catch (error) {
            console.log(error);
            alert('Hubo un error al guardar el like');
        }
    };

    useEffect(() => {
        // Recuperar el estado del botón desde localStorage
        const likedStatus = localStorage.getItem(`liked-${props.id}`);
        if (likedStatus === 'true') {
            setLiked(true);
        }
    }, [props.id]);

    return (
        <a href={`/detail/${props.id}`}>
            <div className="col-md-4 col-sm-4">
                <div className="feature-center btn-card">
                    <div className="card-img">
                        <img src={`/images/${props.image}`}></img>

                        <a className="heart" onClick={onClickHeart} disabled={liked}>
                            <span className="icon">
                                <i className="icon-heart2"></i>
                            </span>
                            <span>{hearts}</span>
                        </a>
                        <a className="main-share-button" onClick={toggleShareButtons}>
                            <span className="icon">
                                <i className="icon-share2"></i>
                            </span>
                        </a>
                        {showShareButtons && (
                            <div className="share-buttons">
                                <LinkedinShareButton url={`${urlHost}/detail/${props.id}`} title={props.title}>
                                    <LinkedinIcon size={32} round />
                                </LinkedinShareButton>
                                <FacebookShareButton url={`${urlHost}/detail/${props.id}`} quote={props.title}>
                                    <FacebookIcon size={32} round />
                                </FacebookShareButton>
                                <TwitterShareButton url={`${urlHost}/detail/${props.id}`} title={props.title}>
                                    <TwitterIcon size={32} round />
                                </TwitterShareButton>
                                <WhatsappShareButton url={`${urlHost}/detail/${props.id}`} title={props.title} separator=":: ">
                                    <WhatsappIcon size={32} round />
                                </WhatsappShareButton>
                                <TelegramShareButton url={`${urlHost}/detail/${props.id}`} title={props.title}>
                                    <TelegramIcon size={32} round />
                                </TelegramShareButton>
                            </div>
                        )}
                    </div>
                    <h3>{props.title}</h3>
                    <div className="progress" style={progress}>
                        <div className="bar">
                            <div className="progress-value"></div>
                        </div>
                    </div>
                    <div className="card-amounts">
                        <span className="collected">${collected}  </span>
                        <span className="total">de ${total} conseguidos.</span>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Card;