import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Who = (props) => {
    return (
        <>
            <Header btn='list' selected="who" />
            <header id="gtco-header" className="gtco-cover" role="banner" style={{ backgroundImage: 'url(images/img_bg_1.jpg)', height: '100px' }}>
                <div className="gtco-container">
                </div>
            </header>
            <div id="gtco-features">
                <div className="gtco-container">
                    <div className="row"><div className="col-md-8 col-md-offset-2 text-center gtco-heading"><h2>Quienes somos?</h2></div></div>
                    <p className="p-how"><span className='p-change'>SmartSocialHelp</span> nace de mi pasión por la tecnología y el deseo ferviente de hacer una aporte justo a éste mundo. Como Ingeniero de Sistemas con una inclinación por aprender sobre las últimas tecnologías, me sumergí en el fascinante mundo de la tecnología <span className='p-change'>Blockchain</span>, y fue entonces cuando descubrí su potencial transformador.

                        Mi convicción de que el acceso justo al capital puede cambiar vidas me llevó a crear SmartSocialHelp. Creo firmemente que el dinero bien dirigido puede ser un salvavidas para quienes más lo necesitan. La idea surgió de la creencia de que hay una cantidad significativa de recursos financieros en el mundo que, si se canalizan adecuadamente, pueden marcar una <span className='p-change'>gran diferencia</span> en las vidas de las personas.

                        SmartSocialHelp no es solo una plataforma, es una visión de un mundo donde la tecnología y la solidaridad se unen para crear un impacto positivo. Desde el principio, mi objetivo ha sido claro: construir un espacio donde las donaciones sean transparentes y lleguen directamente a quienes lo necesitan, <span className='p-change'>sin rodeos ni intermediarios</span>.

                        Detrás de SmartSocialHelp, estoy comprometido a convertir esta visión en realidad. Creo en la transparencia, la eficiencia y la responsabilidad en cada paso que damos. Cada donación realizada a través de nuestra plataforma cuenta con la <span className='p-change'>seguridad y la trazabilidad</span> de la tecnología Blockchain, lo que garantiza que cada contribución tenga un impacto real en la vida de quienes la reciben.

                        Únete a nosotros en esta misión de utilizar la tecnología para el bien social. En SmartSocialHelp, creemos en el poder de la colaboración y en la capacidad de cada uno para marcar la diferencia. <span className='p-change'>Juntos, podemos</span> construir un futuro más justo y solidario para todos.</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Who;