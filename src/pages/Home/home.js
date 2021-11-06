import { Header } from "../../components/Header/header";
import { Recomendados } from "../../components/Recomendados/recomendados";
import { HomeServicios } from "../../components/homeServicios/homeServicios";


import recomendadosData from "../../data/recomendadosData";
import homeService from "../../data/homeService.json";


export const Home = () => {
  let recomendados = recomendadosData;
  let homeServices = homeService;

  return (
    <>
      <Header />
      <section id="propuesta">
        <div className="container-fluid">
          <div className="content-center">
            <h1 className="title">Nuestra propuesta</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              eaque id fugiat nemo distinctio ipsam accusamus, voluptatem, enim
              architecto animi dolor. Veritatis tempora dignissimos veniam, ea
              amet quos blanditiis eaque Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptas, ipsam fuga ut eos cum, illum totam
              dignissimos ipsum sit debitis explicabo, quibusdam nihil! Non,
              praesentium. Iure, ratione. Ea, cupiditate sit!
            </p>
          </div>
        </div>
      </section>

      <section id="recomendados">
        <div className="container content-center contenedorRecomendados">
          <h1 className="title">Descubre nuestras especialidades</h1>
          <div className="row g-4">
            {recomendados.map((data) => (
              <Recomendados img={data.img} titulo={data.titulo}></Recomendados>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" class="divider">
        <div className="container">
          <div className="content-center">
            <h1 className="padding-h1">Organizamos eventos</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              atque consectetur nesciunt cumque, iure esse voluptatem odit
              maxime, vel mollitia, earum doloremque veritatis pariatur
              inventore saepe temporibus. Fuga, exercitationem architecto!
            </p>
          </div>

          <div className="row">
            {homeServices.map((data) => (
              <HomeServicios id={data.id} img={data.img} />
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
};
