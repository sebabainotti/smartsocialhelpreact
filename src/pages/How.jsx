import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const How = (props) => {
    return (
        <>
            <Header btn='list' selected='how' />
            <header id="gtco-header" className="gtco-cover" role="banner" style={{ backgroundImage: 'url(images/img_bg_1.jpg)', height: '100px' }}>
                <div className="gtco-container">
                </div>
            </header>
            <div id="gtco-features" className='how'>
                <div className="gtco-container">
                    <div className="row"><div className="col-md-8 col-md-offset-2 text-center gtco-heading"><h2>Como lo hacemos posible?</h2></div></div>
                    <p>En SmartSocialHelp, aprovechamos el poder de la tecnología Blockchain para garantizar que cada donación sea transparente, segura y llegue directamente a quienes más lo necesitan. A continuación, te explicamos cómo logramos esto:</p>
                    <h1>
                        1. Creación y Verificación de Causas:
                    </h1>
                    <div className="row">
                        <div className="col-md-3">
                            <img src='/images/creation.png' style={{ width: '100%' }}></img>
                        </div>
                        <div className="col-md-9">
                            <p>
                                Cada causa en nuestra plataforma pasa por un riguroso proceso de verificación. Cuando alguien crea una causa, nosotros:
                                <ul>
                                    <li>Nos ponemos en contacto con el creador para obtener más detalles y verificar la autenticidad de la causa.</li>
                                    <li>Solicitamos documentación, fotos, videos y un presupuesto claro sobre cuánto dinero se necesita y cómo se utilizará.</li>
                                    <li>Solo las causas que cumplen con nuestros criterios de autenticidad y necesidad se publicarán en la plataforma.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <h1>2. Uso de Blockchain para Transparencia y Seguridad:</h1>
                    <div className="row">
                        <div className="col-md-9">
                            <p>
                                La tecnología Blockchain y el uso de Smart Contracts es el corazón de nuestra plataforma, y te explicamos porque:
                                <ul>
                                    <li><span>Transparencia</span>: Cada transacción es registrada en la Blockchain, un libro mayor público e inmutable. Esto significa que cualquier persona puede verificar el flujo de fondos en tiempo real, desde la donación hasta su recepción.</li>
                                    <li><span>Seguridad</span>: La naturaleza descentralizada y cifrada de la Blockchain protege contra fraudes y manipulación de datos. Las transacciones no pueden ser alteradas una vez registradas.</li>
                                    <li><span>Trazabilidad</span>: Cada donación tiene un rastro claro y visible. Los donantes pueden seguir su contribución y ver cómo y cuándo se utiliza.</li>
                                </ul>
                            </p>
                        </div>
                        <div className="col-md-3">
                            <img src='/images/contract.png' style={{ width: '100%' }}></img>
                        </div>
                    </div>



                    <h1>3. Proceso de Donación:</h1>
                    <p>
                        El proceso de donación en SmartSocialHelp es simple y eficiente:
                    </p>
                    <div className="img-center">
                        <img className="steps" src='/images/steps.png'></img>

                    </div>
                    <h1>4. Distribución de Fondos:</h1>
                    <p>
                        Una vez que se realiza la donación:
                        <ul>
                            <li><span>Retención del 10%</span>: Un contrato inteligente retiene automáticamente el 10% de cada donación. Este porcentaje se utiliza para el mantenimiento de la plataforma, publicidad y organización de eventos de donación y ayuda territorial.</li>
                            <li><span>Entrega al Beneficiario</span>: El 90% restante de la donación se transfiere directamente a la wallet del creador de la causa. Este proceso es transparente y visible en la Blockchain, asegurando que el dinero llegue directamente a quien lo necesita.</li>
                        </ul>
                    </p>
                    <div className="img-center">
                        <img className="steps" src='/images/distribution.png'></img>

                    </div>
                    <h1>5. Actualizaciones y Resultados:</h1>
                    <p>
                        Para mantener la confianza y transparencia:
                        <ul>
                            <li>Los creadores de causas deben proporcionar actualizaciones regulares sobre cómo se está utilizando el dinero, en el caso de usos parciales.</li>
                            <li>Estas actualizaciones, junto con fotos y videos, se publicarán en la plataforma para que los donantes puedan ver el impacto de sus contribuciones.</li>
                        </ul>
                    </p>
                    <h3>
                        En SmartSocialHelp, estamos comprometidos a transformar el mundo de las donaciones mediante la tecnología Blockchain. Creemos que cada pequeño aporte puede tener un gran impacto, y nuestra plataforma está diseñada para asegurar que cada donación cuente y llegue a donde más se necesita.
                    </h3>
                    <div className='center'>
                        <a>¡Únete a nosotros y sé parte de este cambio revolucionario!</a>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default How;