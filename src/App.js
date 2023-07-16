import React from 'react';
import ConnectWalletPage from './pages/connectWallet';
import $ from 'jquery'
import yo from './images/yo.png';
import ContactForm from './pages/contactForm';

const App = () => {
  return (
    <div className="App">

      <section id="home">

        <div className="overlay"></div>
        <div className="gradient-overlay"></div>

        <div className="home-content-table">

          <div className="home-content-tablecell">
            <div className="row">
              <div className="col-twelve">
                <div className="home-bottom-text">
                  <h1 className="animate-intro">
                    Somos <b style={{ fontSize: "5.2rem", color: "#7c3b08" }}>Smart Social Help.</b> <br />
                  </h1>
                  <h3 className="lead animate-this fadeInUp animated">Conectando corazones, impulsando el
                    cambio. <br />
                    Dona con blockchain y transforma vidas.</h3>
                  <ul className="home-section-links">
                    <li className="animate-intro">Mas <a href="#about" className="smoothscroll">Sobre mi</a>
                    </li>
                    <li className="animate-intro">Haz una <a href="#skills" className="smoothscroll">Donación</a>
                    </li>
                    <li className="animate-intro">Contactanos <a href="#contact" className="smoothscroll">Por
                      Email</a>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="scroll-icon smoothscroll">
          <span className="icon-DownArrow"></span>
        </a>

      </section>


      <section id="about">

        <div className="about-profile-bg"></div>

        <div className="about-wrap">

          <div className="about-profile">

            <div className="about-profile-bg"></div>

            <div className="intro">
              <h1 className="animate-this">Acerca de mi.</h1>

              <p className="lead animate-this">Ponte comodo y lee con atención...</p>
            </div>

            <p className="animate-this">
              Quiero compartirte mi historia como emprendedor con una misión muy especial.
              Soy un apasionado por la tencologia con un objetivo común: ayudar a las personas que más lo necesitan y propagar el espiritu emprendedor.
              Permíteme presentarme: soy Sebastian Bainotti, Ingeniero de Sistemas, padre de 2 hijos y compañero de una mujer hermosa.
            </p>

            <p className="animate-this">Mi ambición es utilizar mis conocimientos y habilidades para marcar
              una diferencia significativa en la vida de quienes nos rodean.
              Creo firmemente que cada uno de nosotros tiene el poder de transformar realidades y construir un
              mundo mejor.</p>

            <p className="animate-this">A través de mi experiencia en ingeniería de sistemas enfocado en tecnologías
              Blockchain, he comprendido el
              potencial que tenemos para generar un impacto positivo.
              Es por eso que he decidido enfocarme en utilizar la tecnología como una herramienta para ayudar
              a los demás.
            </p>
            <p className="animate-this">Pero no solo me detengo en la tecnología. Mi compañera de vida ha desarrollado
              habilidades en Programación Neurolingüística y ventas a través de redes sociales,
              lo que nos permite conectar con las personas de una manera más profunda y efectiva. Creemos en la
              importancia de comprender las necesidades emocionales y
              mentales de las personas a las que queremos ayudar, y a través de estas técnicas, podemos hacerlo de
              manera más efectiva.
            </p>
            <p className="animate-this">Me apasiona encontrar soluciones innovadoras para problemas sociales, y he
              encontrado en las donaciones la forma de materializar nuestro propósito.
              Creemos que cada pequeña contribución puede marcar una gran diferencia en la vida de alguien.
              Por eso, he creado un sitio web(proximamente mobile) donde podrás realizar donaciones utilizando criptomonedas.
            </p>
            <p className="animate-this">
              La tecnología blockchain es el corazón de éste proyecto. A través de su transparencia y
              seguridad, vos y yo,
              podemos garantizar que cada donación se utilice de manera efectiva y llegue a quienes más lo
              necesitan. Además, nuestro compromiso no se limita solo a facilitar las donaciones,
              también trabajamos arduamente para educar a las empresas implicadas en el uso de la tecnología
              blockchain y el potencial de las criptomonedas en su negocio.
              Creemos que al unir fuerzas, podemos impulsar un cambio real y duradero.
            </p>
            <p>
              <a href="#contact" className="button full-width animate-this smoothscroll">Contáctame</a>
              <a href="#skills" className="button button-primary full-width animate-this smoothscroll">Haz una
                donación</a>
            </p>

          </div>

          <div className="about-services">

            <div className="intro">
              <h1 className="animate-this">Mi proyecto.</h1>

              <p className="lead animate-this">La tecnología y la convicción de que podemos tener un mundo mas justo
                es la clave.
              </p>
            </div>

            <ul className="services">
              <li className="item-branding animate-this">
                <div className="icon-wrap">
                  <i className="icon-Checked"></i>
                </div>
                <div className="service-item">
                  <h4>Granatizar transparencia</h4>
                  <p>Aprovechar las ventajas de la tecnología blockchain para garantizar la transparencia,
                    seguridad, trazabilidad y eficiencia de todas las transacciones y donaciones realizadas.
                    Cada transacción realizada puede ser verificada y rastreada de manera pública, lo que
                    genera confianza y brinda una mayor claridad sobre cómo se utilizan los recursos.
                  </p>
                </div>
              </li>
              <li className="item-photography animate-this">
                <div className="icon-wrap">
                  <i className="icon-Checked"></i>
                </div>
                <div className="service-item">
                  <h4>Ayudar</h4>
                  <p>Abordar y solucionar problemas sociales críticos como el hambre, el acceso al agua
                    potable, enfermedades que requieran ayuda economica para su tratamiento y mucho mas...
                  </p>
                </div>
              </li>
              <li className="item-webdesign animate-this">
                <div className="icon-wrap">
                  <i className="icon-Checked"></i>
                </div>
                <div className="service-item">
                  <h4>Colaboración</h4>
                  <p>Colaboración con organizaciones y comunidades dispuestas a utilizar la economia
                    Blockchain. Se buscará establecer alianzas estratégicas con organizaciones,
                    instituciones y comunidades locales dispuestas a utilizar y fomentar el uso de
                    criptomonedas para maximizar el impacto de las donaciones y la adopcion de la
                    tecnologia. La colaboración nos permite una distribución más eficiente y efectiva de los
                    recursos en los lugares que más lo necesitan. Y para ello, se utilizarán contratos
                    inteligentes.
                  </p>
                </div>
              </li>
              <li className="item-uiux animate-this">
                <div className="icon-wrap">
                  <i className="icon-Checked"></i>
                </div>
                <div className="service-item">
                  <h4>Concientización y educación</h4>
                  <p>Además de recaudar fondos, me  enfocaré en concienciar y educar a las personas sobre
                    los problemas sociales y el mundo Blockchain. Promoveré la sensibilización y el
                    conocimiento público sobre estas cuestiones para fomentar una participación más amplia y
                    una mayor comprensión de la importancia de la ayuda económica.
                  </p>
                </div>
              </li>
              <li className="item-uiux animate-this">
                <div className="icon-wrap">
                  <i className="icon-Checked"></i>
                </div>
                <div className="service-item">
                  <h4>Participación</h4>
                  <p>Fomentar la participación activa de la comunidad, permitiendo que las personas se
                    involucren directamente en las donaciones y en la toma de decisiones, aportando ideas y
                    casos concretos para poder priorizar eficientemente el uso de los recursos. Esto
                    generará un sentido de pertenencia y empoderamiento en aquellos que forman parte de la
                    comunidad beneficiada.

                  </p>
                </div>
              </li>
              <li className="item-uiux animate-this">
                <div className="icon-wrap">
                  <i className="icon-Checked"></i>
                </div>
                <div className="service-item">
                  <h4>Impacto Social</h4>
                  <p>Generar un impacto social sostenible a largo plazo.
                  </p>
                </div>
              </li>
            </ul>

          </div>

        </div>

      </section>


      <section id="skills">

        <div className="overlay"></div>
        <div className="gradient-overlay"></div>

        <div className="row wide">
          <div className="col-skills">

            <div className="section-intro">
              <h3 className="animate-this">Haz la diferencia</h3>
              <h1 className="animate-this">Aporta</h1>


              <p className="animate-this">Tu colaboración será utilizada eficientemente para causas sociales. Toda la
                información
                de los gastos realizados será repaldada con el uso de blockchain. Cada causa tendrá asociada un
                Smart Contract para poder hacer un correcto seguimiento. Cuando una causa pueda ser solucionada
                con menos dinero del aportado, el dinero restante se transferirá al Smart Contract de la
                siguiente causa.</p>
            </div>

          </div>
          <ConnectWalletPage />
        </div>

      </section>


      <section id="credentials">

        <div className="row narrow section-intro with-bottom-sep">
          <div className="col-twelve">
            <h1 className="animate-this">Las causas</h1>

            <p className="lead">Abarcaré múltiples causas sociales que serán priorizadas por grado de urgencia. </p>
          </div>
        </div>

        <div className="row wide credentials-content">

          <div className="col-six tab-full left">

            <div className="timeline-wrap">

              <div className="timeline-block animate-this">
                <div className="timeline-ico">
                  <i className="fa fa-check"></i>
                </div>
                <div className="timeline-header">
                  <h3>Alivio de la pobreza</h3>
                </div>
                <div className="timeline-content">
                  <p>Destinar los fondos a programas que proporcionen asistencia básica, como alimentos,
                    vivienda, ropa y acceso a servicios de salud para personas en situación de pobreza
                    extrema.</p>
                </div>
              </div>

              <div className="timeline-block animate-this">
                <div className="timeline-ico">
                  <i className="fa fa-check"></i>
                </div>
                <div className="timeline-header">
                  <h3>Educación accesible</h3>
                </div>
                <div className="timeline-desc">
                  <p>Financiar becas, programas educativos y la construcción de infraestructuras escolares en
                    comunidades con recursos limitados, para brindar oportunidades educativas a niños y
                    adultos.</p>
                </div>
              </div>

              <div className="timeline-block animate-this">
                <div className="timeline-ico">
                  <i className="fa fa-check"></i>
                </div>
                <div className="timeline-header">
                  <h3>Salud y atención médica</h3>
                </div>
                <div className="timeline-content">
                  <p>Aportar economicamente en enfermedades que requieren transplantes, traslados u otras
                    necesidades economicas.</p>
                </div>
              </div>

            </div>

          </div>

          <div className="col-six tab-full right">

            <div className="timeline-wrap">

              <div className="timeline-block animate-this">
                <div className="timeline-ico">
                  <i className="fa fa-check"></i>
                </div>
                <div className="timeline-header">
                  <h3>Agua potable y saneamiento</h3>
                </div>
                <div className="timeline-content">
                  <p>Contribuir a proyectos que mejoren el acceso a agua potable segura y saneamiento básico
                    en comunidades que carecen de estas necesidades básicas.</p>
                </div>
              </div>

              <div className="timeline-block animate-this">
                <div className="timeline-ico">
                  <i className="fa fa-check"></i>
                </div>
                <div className="timeline-header">
                  <h3>Protección del medio ambiente</h3>
                </div>
                <div className="timeline-desc">
                  <p>Destinar recursos a iniciativas de conservación, reforestación, energías renovables y
                    educación ambiental para abordar el cambio climático y preservar los recursos naturales.
                  </p>
                </div>
              </div>

              <div className="timeline-block animate-this">
                <div className="timeline-ico">
                  <i className="fa fa-check"></i>
                </div>
                <div className="timeline-header">
                  <h3>Asistencia en situaciones de desastre</h3>
                </div>
                <div className="timeline-content">
                  <p>Contribuir a la respuesta y recuperación de comunidades afectadas por desastres
                    naturales, proporcionando ayuda humanitaria, reconstrucción y apoyo psicosocial.</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section id="portfolio">

        <div className="row narrow section-intro with-bottom-sep">
          <div className="col-twelve">
            <h1 className="animate-this">Las consecuencias</h1>

            <p className="lead animate-this">Busco mejorar la vida de las personas asi como tambien concientizar y aportar en la
              adopción de la tencología Blockchain.</p>
          </div>
        </div>

        <div className="row portfolio-content">
          <div className="col-six">
            <h3>Adopción de Blockchain</h3>
            <p><img width="120" height="120" className="pull-left" alt="image blockchain"
              src="images/sample-image.jpg" />
              Me enorgullece promover la adopción de la tecnología blockchain entre las empresas y el mundo en su
              totalidad. Todos los fondos recaudados son utilizados por medio de criptomonedas, promoviendo asi
              el uso de Blockchain en la población. Porque creo que Blockchain es el futuro, y uno de mis
              objetivos es fomentar la adopción. Para ello capacito a todas las empresas y personas que se
              vean involucradas en una causa permitiendo transparencia y trazabilidad. Al educar y
              capacitar a las empresas en el uso de criptomonedas y la tecnología blockchain, les brindo las
              herramientas necesarias para ser agentes de cambio. Esto permite que las empresas no solo realicen
              donaciones, sino que también integren estas tecnologías en sus propios modelos de negocio,
              fomentando así una mayor responsabilidad social y sostenibilidad. </p>
          </div>

          <div className="col-six">
            <h3>Ayuda social</h3>
            <p><img width="120" height="120" className="pull-left" alt="image social"
              src="images/ayuda-social.jpg" />
              Impulso un cambio social significativo, donde cada donación realizada a través de ésta
              plataforma tiene un impacto real en la vida de las personas más necesitadas. Todos sabemos que
              vivimos en un mundo donde no todos tienen las mismas oportunidades, y creo profundamente que
              entre todos podemos llevar un poco de felicidad a quienes realmente lo necesitan. El solo hecho de
              pensar que hay niños que no tienen la posibilidad de comer siquiera un pedazo de pan por las noches,
              en el año 2023, me da suficiente motivo para moverme y ayudar a cambiar ésta situación. Y así como
              hablo de hambre, puedo hablar de enfermedades, acceso al agua potable, ayuda por desastres
              naturales, y mucho mas. No podemos seguir esperando que alguien haga algo(ya sabemos que no lo hacen)! Hagamoslo nosotros!</p>
          </div>
        </div>

      </section>


      <section id="stats">
        <div className="row narrow section-intro ">
          <div className="col-twelve">
            <h1 className="animate-this fadeInUp animated">Conóceme</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-twelve" style={{ textAlign: "center", display: "inline-grid" }}>
            <div className="bgrid stat">
              <div className="icon-part">
                <img src={yo} style={{ width: "30%" }} alt="yo" />
              </div>
              <h5 className="stat-title">
                Sebastian Bainotti
              </h5>
            </div>
          </div>
        </div>

      </section>


      <section id="contact">

        <div className="overlay"></div>

        <div className="row narrow section-intro">
          <div className="col-twelve">
            <h3 className="animate-this">Contacto</h3>
            <h1 className="animate-this">Estoy disponible para escucharte</h1>

            <p className="lead animate-this">Si tienes alguna duda o si quieres aliarte conmigo, no dudes en
              escribirme y te responderé a la brevedad.</p>
          </div>
        </div>

        <div className="row contact-form">
          <div className="col-twelve">

            <ContactForm />

          </div>
        </div>

        <div className="row contact-info">

          <div className="col-six tab-full collapse">
            <h5 className="animate-this">Enviame un correo</h5>

            <p className="animate-this">
              smartsocialhelp@gmail.com<br />
            </p>
          </div>

          <div className="col-four tab-full">
            <h5 className="animate-this">Escribime por Telegram</h5>

            <p className="animate-this">
              @sindicrypto<br />
            </p>
          </div>

        </div>

      </section>


      <footer>
        <div className="row">

          <div className="col-twelve tab-full social">
            <ul className="footer-social">
              <li><a href="https://www.facebook.com/sebabainotti">Facebook</a></li>
              <li><a href="https://www.twitter.com/sebabainotti">Twitter</a></li>
              <li><a href="https://tiktok.com/@mrbaina">TikTok</a></li>
              <li><a href="https://instagram.com/sebabainotti?igshid=MzNlNGNkZWQ4Mg==">Instagram</a></li>
            </ul>
          </div>

          <div className="col-twelve tab-full">
            <div className="copyright">
              <span>© Copyright SmartSocialHelp 2023.</span>
            </div>
          </div>

        </div>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#top"><i className="icon-UpArrow"></i></a>
        </div>
      </footer>

    </div>

  );
}

export default App;
