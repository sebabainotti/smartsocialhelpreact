import React from 'react';

const Header = (props) => {
    return (
        <nav className="gtco-nav" role="navigation">
            <div className="gtco-container">
                <div className="row">
                    <div className="col-xs-2">
                        <div id="gtco-logo"><a href="/">SmartSocialHelp.</a></div>
                    </div>
                    <div className="col-xs-8 text-center menu-1">
                        <ul>
                            <li className="active"><a href="/">Home</a></li>
                            <li><a href="/who">Quienes somos</a></li>
                            <li><a href="/how">Como lo hacemos</a></li>
                            <li><a href="/contact">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-2 text-right hidden-xs menu-2">
                        <ul>
                            {props.btn == 'create' ? <li className="btn-cta"><a href="/create"><span>Crear Causa</span></a></li> : <li></li>}
                            {props.btn == 'list' ? <li className="btn-cta"><a href="/list"><span>Ver Causas</span></a></li> : <li></li>}
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Header;