import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Prueba from "./Prueba";
class TableProduct extends Component {
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
    return (
      <div className="productoslista">
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio unitario $</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            <Prueba />
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TableProduct;
