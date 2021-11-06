import "./newClient.css";

export default function NewClient() {
  return (
    <div className="newClient">
      <h1 className="newClientTitle">Nuevo cliente</h1>
      <form className="newClientForm">
        <div className="newClientItem">
          <label>Usuario</label>
          <input className="inputNewClient" type="text" placeholder="john" />
        </div>
        <div className="newClientItem">
          <label>Nombre completo</label>
          <input className="inputNewClient" type="text" placeholder="John Smith" />
        </div>
        <div className="newClientItem">
          <label>Correo</label>
          <input className="inputNewClient" type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newClientItem">
          <label>Contraseña</label>
          <input className="inputNewClient" type="password" placeholder="password" />
        </div>
        <div className="newClientItem">
          <label>Celular</label>
          <input className="inputNewClient" type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newClientItem">
          <label>Direccion</label>
          <input className="inputNewClient" type="text" placeholder="New York | USA" />
        </div>
        <div className="newClientItem">
          <label>Genero</label>
          <div className="newClientGender">
            <input className="inputNewClient" type="radio" name="gender" id="male" value="male" />
            <label for="male">Masculino</label>
            <input className="inputNewClient" type="radio" name="gender" id="female" value="female" />
            <label for="female">Femenino</label>
            <input className="inputNewClient" type="radio" name="gender" id="other" value="other" />
            <label for="other">Otro</label>
          </div>
        </div>
        <div className="newClientItem">
          <label>Activo</label>
          <select className="newClientSelect" name="active" id="active">
            <option value="yes">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newClientButton">Crear</button>
      </form>
    </div>
  );
}