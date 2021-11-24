import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tableProduct.css";

class Prueba extends Component {
  constructor(props) {
    super(props);
    this.state = { datos: [] };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:41399/api/producto")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datos: data });
      });
  }

  borrarEmpleado(id) {
    fetch("http://localhost:41399/api/producto" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("dato eliminado");
      });
  }

  editarEmpleado(id) {
    fetch("http://localhost:41399/api/producto" + id, {
      method: "UPDATE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("dato editado");
      });
  }

  render() {
    return this.state.datos.map((data) => {
      return (
        <tr>
          <td>{data.id_producto}</td>
          <td>{data.nombre}</td>
          <td>{data.descripcion}</td>
          <td>{data.precio}</td>
          <td>
            <img className="productListImg" src={data.imagen_producto} alt="" />
          </td>
        </tr>
      );
    });
  }
}

export default Prueba;
