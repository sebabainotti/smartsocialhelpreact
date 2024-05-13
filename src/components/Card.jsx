import react from 'react';

const Card = (props) => {
    let collected = parseInt(props.collected);
    let total = parseInt(props.total);
    let percentageCollected = parseInt(collected * 100 / total);
    let percentage = percentageCollected + '%';
    const progress = {
        '--progress': percentage // Establecer el valor de la variable CSS --progress
    };
    return (
        <div className="col-md-4 col-sm-4">
            <div className="feature-center">
                <div className="card-img">
                    <img src={`./images/${props.image}`}></img>
                    <a href="/">
                        <span className="icon">
                            <i className="icon-heart2"></i>
                        </span>
                        <span>{props.heartAmount}</span>
                    </a>
                </div>
                <div className="progress" style={progress}>
                    <div className="bar">
                        <div className="progress-value"></div>
                    </div>
                </div>
                <div className="card-amounts">
                    <span className="initial">$0</span>
                    <span className="collected">${collected}</span>
                    <span className="total">${total}</span>
                </div>
                <h3>{props.title}</h3>
                <p>Juan es un chico de 17 años que quedó paralitico a raiz de un accidente cuando iba a la casa de sus tios. Por ello, esta
                    necesitando nuestra ayuda para poder comprar una silla de rueda especial que le permitira acercarse a una vida normal.
                </p>
                <p><a href="#" className="btn btn-primary">Leer más</a></p>
            </div>
        </div>
    );
}

export default Card;