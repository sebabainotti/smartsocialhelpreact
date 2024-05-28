import React from 'react';

const Footer = () => {
    return (
        <footer id="gtco-footer" role="contentinfo" style={{ backgroundImage: 'url(../images/img_bg_3.jpg)' }}>
            <div className="gtco-container">
                <div className="row row-pb-sm">
                    <div className="col-md-4 gtco-widget">
                        <h3>SmartSocialHelp</h3>
                        <p>Una manera de ayudar, transparente, confiable y segura.</p>
                        <p><a href="/how">Leer mas</a></p>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">

                    </div>

                    <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">

                    </div>

                    <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                        <ul className="gtco-footer-links">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/who">Quienes somos</a></li>
                            <li><a href="/how">Como lo hacemos</a></li>
                            <li><a href="/contact">Contacto</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row copyright">
                    <div className="col-md-12">
                        <p className="pull-left">
                            <small className="block">&copy; 2024 SmartSocialHelp. Todos los derechos reservados.</small>
                            <small className="block">Diseñado por <a href="/" target="_blank">Sebastian Bainotti</a> </small>
                        </p>
                        <div className="pull-right">
                            <ul className="gtco-social-icons pull-right">
                                <li><a href="#"><i className="icon-twitter"></i></a></li>
                                <li><a href="#"><i className="icon-facebook"></i></a></li>
                                <li><a href="#"><i className="icon-linkedin"></i></a></li>
                                <li><a href="#"><i className="icon-dribbble"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;