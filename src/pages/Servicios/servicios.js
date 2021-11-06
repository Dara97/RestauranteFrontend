
import { HeaderServicios } from '../../components/HeaderServicios/headerServicios';
import { ServiciosCard } from '../../components/servicioCard/serviciosCard';
import serviciosData from '../../data/serviciosData.json';
import "./servicios.css";
export const Servicios = () => {
    let servicios = serviciosData;

    return (
        <><HeaderServicios></HeaderServicios><div id="games">
            <div class="container-md p-5">
                <div class="row">
                        {servicios.map(data =>
                            <ServiciosCard img={data.img} titulo={data.titulo} texto={data.texto} ></ServiciosCard>
                        )}
                </div>
            </div>
        </div></>
    );
}