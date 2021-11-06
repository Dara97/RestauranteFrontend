import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  AttachMoney,
  AssignmentInd,
  RestaurantMenu,
  AddAlertSharp,
  AssignmentTurnedIn,
  Contacts,
  Comment,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Administrar</h3>
          <ul className="sidebarList">
          <Link to="/inicio" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <  AssignmentInd className="sidebarIcon" />
                Personal
              </li>
              </Link>
              <Link to="/clients" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Clientes
              </li>
              </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <RestaurantMenu className="sidebarIcon" />
                Menu
              </li>
            </Link>
            <li className="sidebarListItem">
                <AssignmentTurnedIn className="sidebarIcon" />
                Servicios
              </li>
            <li className="sidebarListItem">
              <AddAlertSharp className="sidebarIcon" />
              Reservas
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Compras
            </li>
            <li className="sidebarListItem">
              <Contacts className="sidebarIcon" />
              Contactenos
            </li>
            <li className="sidebarListItem">
              <Comment className="sidebarIcon" />
              Comentarios
            </li>
            
          </ul>
        </div>
       
      </div>
    </div>
  );
}
