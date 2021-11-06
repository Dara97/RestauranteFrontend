import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import "./Client.css";
  
  export default function Client() {
    return (
      <div className="client">
        <div className="clientTitleContainer">
          <h1 className="clientTitle">Editar Cliente</h1>
          <Link to="/clients">
            <button className="clientAddButton">Guardar</button>
          </Link>
        </div>
        <div className="clientContainer">
          <div className="clientShow">
            <div className="clientShowTop">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2195/2195416.png"
                alt=""
                className="clientShowImg"
              />
              <div className="clientShowTopTitle">
                <span className="clientShowclientname">Anna Becker</span>
                <span className="clientShowclientTitle">Software Engineer</span>
              </div>
            </div>
            <div className="clientShowBottom">
              <span className="clientShowTitle">Detalles de cuenta</span>
              <div className="clientShowInfo">
                <PermIdentity className="clientShowIcon" />
                <span className="clientShowInfoTitle">annabeck99</span>
              </div>
              <div className="clientShowInfo">
                <CalendarToday className="clientShowIcon" />
                <span className="clientShowInfoTitle">10.12.1999</span>
              </div>
              <span className="clientShowTitle">Contacto</span>
              <div className="clientShowInfo">
                <PhoneAndroid className="clientShowIcon" />
                <span className="clientShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="clientShowInfo">
                <MailOutline className="clientShowIcon" />
                <span className="clientShowInfoTitle">annabeck99@gmail.com</span>
              </div>
              <div className="clientShowInfo">
                <LocationSearching className="clientShowIcon" />
                <span className="clientShowInfoTitle">New York | USA</span>
              </div>
            </div>
          </div>
          <div className="clientUpdate">
            <span className="clientUpdateTitle">Editar</span>
            <form className="clientUpdateForm">
              <div className="clientUpdateLeft">
                <div className="clientUpdateItem">
                  <label>Usuario</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="clientUpdateInput"
                  />
                </div>
                <div className="clientUpdateItem">
                  <label>Nombre completo</label>
                  <input
                    type="text"
                    placeholder="Anna Becker"
                    className="clientUpdateInput"
                  />
                </div>
                <div className="clientUpdateItem">
                  <label>Correo</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="clientUpdateInput"
                  />
                </div>
                <div className="clientUpdateItem">
                  <label>Celular</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="clientUpdateInput"
                  />
                </div>
                <div className="clientUpdateItem">
                  <label>Direccion</label>
                  <input
                    type="text"
                    placeholder="New York | USA"
                    className="clientUpdateInput"
                  />
                </div>
              </div>
              <div className="clientUpdateRight">
                <div className="clientUpdateUpload">
                  <img
                    className="clientUpdateImg"
                    src="https://cdn-icons-png.flaticon.com/512/2195/2195416.png"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="clientUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="clientUpdateButton">Cargar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }