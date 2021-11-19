import FeaturedInfo from "../../../components/Dashboard/featuredInfo/FeaturedInfo";
import "./Inicio.css";

import WidgetSm from "../../../components/Dashboard/widgetSm/WidgetSm";


export default function Inicio() {
  return (
    <div className="inicio">
      <FeaturedInfo />
     
      <div className="inicioWidgets">
        
        <WidgetSm/>
       
      </div>
    </div>
  );
}
