import Chart from "../../../components/Dashboard/chart/Chart";
import FeaturedInfo from "../../../components/Dashboard/featuredInfo/FeaturedInfo";
import "./Inicio.css";
import { userData } from "../../../dummyData";
import WidgetSm from "../../../components/Dashboard/widgetSm/WidgetSm";
import WidgetLg from "../../../components/Dashboard/widgetLg/WidgetLg";

export default function Inicio() {
  return (
    <div className="inicio">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="inicioWidgets">
         <WidgetLg/>
        <WidgetSm/>
       
      </div>
    </div>
  );
}
