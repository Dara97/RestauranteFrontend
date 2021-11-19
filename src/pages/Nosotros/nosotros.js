import { Personal } from "../../components/NosotrosPersonal/personal";
import "./nosotros.css";
import personal from "../../data/personal.json";
import { Carrusel } from "../../components/Carrusel/Carrusel";
import carruselTestimonios from "../../data/carruselTest.json";
export const Nosotros = () => {

    let personalData = personal;
    let carruselTest = carruselTestimonios;
    return (
        <>

            <section id="historia" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 d-flex">
                            <div className="container container_historia align-self-center ">
                                <h1 className="text-uppercase mb-4 text-light">Nuestra Historia</h1>
                                <p className="text-light mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At natus atque eveniet animi eum saepe recusandae odio laudantium voluptate ullam sunt, impedit nulla distinctio molestias repellendus voluptatibus labore eius magni Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, laboriosam! Iusto commodi eius vitae ad saepe mollitia et praesentium quae optio nesciunt, quam at repudiandae nam similique maiores delectus voluptatibus!!</p>
                                <a href="#equipo" className="btn boton-nosotros">Mas</a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="container contener_imagen">
                                <img src="https://res.cloudinary.com/ddqxtzvyw/image/upload/v1636248782/restaurant-images/restaurante1.jpg" className="img-fluid rounded restaurante" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="equipo">
                <div className="container todo ">
                    <div className="contenido-nosotros mt-5">
                        <h1 className="title text-lg-center">Nuestra equipo</h1>
                        <p className="text-lg-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eaque id fugiat nemo distinctio ipsam
                            accusamus.</p>
                    </div>
                    <div className="row ">

                        {personalData.map(data =>
                            <Personal id={data.id} img={data.img} titulo={data.titulo}></Personal>
                        )}
                    </div>
                </div>
            </section>
            <section id="comentarios">
                <div className="container">
                    <div className="content-center">
                        <h1 className="padding-top padding-h1">
                            Unas palabras de nuestros clientes
                        </h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    </div>
                    <Carrusel />
                    <div className="form-group">
                        <div className="Row">
                            <label className="Comentarios">Añadir comentarios</label>
                            <div className="col-">
                                <textarea className="form-control" id="Comentarios" rows="2"></textarea> <button className="btn button-comentarios">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


