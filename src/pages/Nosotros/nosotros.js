import { Personal } from "../../components/NosotrosPersonal/personal";
import "./nosotros.css";
import personal from "../../data/personal.json";
import { Carrusel } from "../../components/Carrusel/Carrusel";
import carruselTestimonios from "../../data/carruselTest.json";
import QuienesSomos from "../../components/QuienesSomos/QuienesSomos"

export const Nosotros = () => {

    let personalData = personal;
    let carruselTest = carruselTestimonios;
    return (

        <>
            <QuienesSomos />



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


