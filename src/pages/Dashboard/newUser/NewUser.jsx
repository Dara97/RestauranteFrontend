import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nuevo usuario</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Usuario</label>
          <input className="inputNewUser" type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Nombre completo</label>
          <input className="inputNewUser" type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Correo</label>
          <input className="inputNewUser" type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Contraseña</label>
          <input className="inputNewUser" type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Celular</label>
          <input className="inputNewUser" type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Direccion</label>
          <input className="inputNewUser" type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Genero</label>
          <div className="newUserGender">
            <input className="inputNewUser" type="radio" name="gender" id="male" value="male" />
            <label for="male">Masculino</label>
            <input className="inputNewUser" type="radio" name="gender" id="female" value="female" />
            <label for="female">Femenino</label>
            <input className="inputNewUser" type="radio" name="gender" id="other" value="other" />
            <label for="other">Otro</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Activo</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Crear</button>
      </form>
    </div>
  );
}
