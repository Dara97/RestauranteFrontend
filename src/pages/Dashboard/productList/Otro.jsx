import React, { Component } from "react";
import "./tableProduct.css";
import { Container } from "react-bootstrap";
class DatosProductos extends Component {
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

  borrarProducto(id) {
    fetch("http://localhost:41399/api/producto/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        var count = 0;
        var listaProductos = this.state.datos;
        listaProductos.map((dato) => {
          if (dato.id_producto == id) {
            listaProductos.splice(count, 1);
          }
          count++;
        });
        alert("Producto eliminado");
        //console.log(listaProductos);
        this.setState({ datos: listaProductos });
      });
  }

  editarEmpleado(id) {
    fetch("http://localhost:41399/api/producto/" + id, {
      method: "UPDATE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("dato editado");
      });
  }

  render() {
    return (
      <>
        <Container>
          <h1>Hola mundo</h1>
          <table className="default ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>

                <th>Descricpcion</th>
                <th>Acción</th>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descricpcion</th>
              </tr>
            </thead>
            <tbody>
              {this.state.datos.map((data) => (
                <tr>
                  <td>{data.id_producto}</td>
                  <td>{data.nombre}</td>
                  <td>{data.descripcion}</td>
                  <td>{data.precio}</td>
                  <td>
                    <img
                      className="productListImg"
                      src={data.imagen_producto}
                      alt=""
                    />
                  </td>
                  <td>
                    <button
                      className="actionNosotros"
                      onClick={() => this.borrarProducto(data.id_producto)}
                    >
                      Eliminar
                    </button>
                  </td>
                  <td>
                    <button
                      className="actionNosotros"
                      onClick={() => this.editarEmpleado(data.id)}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </>
    );
    /*return this.state.datos.map((data) => {
      return (
        <div className={data.nombre} id={data.nombre}>
          <div className="featured">
            <div className="featuredItem">
              <div key={data.id_producto}> </div>
              {data.nombre}
              {data.descripcion}
              {data.precio}
              <img
                className="productListImg"
                src={data.imagen_producto}
                alt=""
              />
              <div>
                <div key={data.id_producto}>
                  <button
                    className="actionNosotros"
                    onClick={() => this.borrarProducto(data.id_producto)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="actionNosotros"
                    onClick={() => this.editarEmpleado(data.id)}
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });*/
  }
}

export default DatosProductos;
