<<<<<<< HEAD
import React, { Component } from "react";
import "./tableProduct.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class DatosProductos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      modalActualizar: false,
      modalCerrar: false,
      modalInsertar: false,
      producto: {
        id_producto: "",
        nombre: "",
        descripcion: "",
        precio: 0,
        imagen_producto: "",
      },
    };
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
        this.fetchData();
        alert("Producto eliminado");
      });
  }

  editarProducto(dato) {
    fetch("http://localhost:41399/api/producto/", {
      method: "PUT",
      body: JSON.stringify(dato),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Producto editado");
        this.setState({ modalActualizar: false });
        this.fetchData();
      });
  }

  crearProducto(dato) {
    console.log(dato);
    fetch("http://localhost:41399/api/producto/", {
      method: "POST",
      body: JSON.stringify(dato),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Producto creado");
        this.setState({ modalInsertar: false });
        this.fetchData();
      });
  }

  abrirVentanaEditar(dato) {
    this.setState({ modalActualizar: true, producto: dato });
  }
  cerrarVentana(close) {
    this.setState({
      modalCerrar: close,
      modalActualizar: false,
      modalInsertar: false,
    });
  }
  abrirVentanaInsertar() {
    this.setState({ modalInsertar: true });
  }

  handleChange = (e) => {
    this.setState({
      producto: {
        ...this.state.producto,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <button
          className="botonAgregar"
          onClick={() => this.abrirVentanaInsertar()}
        >
          Agregar producto
        </button>

        {this.state.datos.map((data) => (
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
                      onClick={() => this.abrirVentanaEditar(data)}
                    >
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Modal
          show={this.state.modalActualizar}
          onHide={this.state.modalCerrar}
        >
          <Modal.Title>Editar producto</Modal.Title>
          <Modal.Body>
            <label>Nombre producto</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              value={this.state.producto.nombre}
              onChange={this.handleChange}
            />
            <label>Precio</label>
            <input
              className="form-control"
              name="precio"
              type="number"
              value={this.state.producto.precio}
              onChange={this.handleChange}
            />
            <label>Descripción</label>
            <input
              className="form-control"
              name="descripcion"
              type="text"
              value={this.state.producto.descripcion}
              onChange={this.handleChange}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.cerrarVentana(true)}
            >
              Cerrar
            </Button>
            <Button
              variant="primary"
              onClick={() => this.editarProducto(this.state.producto)}
            >
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.modalInsertar} onHide={this.state.modalCerrar}>
          <Modal.Title>Agregar producto</Modal.Title>
          <Modal.Body>
            <label>Id:</label>
            <input
              className="form-control"
              readOnly
              type="text"
              value={this.state.datos.length + 1}
            />
            <label>Producto:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              onChange={this.handleChange}
            />

            <label>Precio:</label>
            <input
              className="form-control"
              name="precio"
              type="number"
              onChange={this.handleChange}
            />

            <label>Descripción:</label>
            <input
              className="form-control"
              name="descripcion"
              type="text"
              onChange={this.handleChange}
            />

            <label>Ruta de imagen</label>
            <input
              className="form-control"
              name="imagen_producto"
              type="text"
              onChange={this.handleChange}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button
              color="primary"
              onClick={() => this.crearProducto(this.state.producto)}
            >
              Crear nuevo producto
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarVentana()}
            >
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default DatosProductos;

/* import "./productList.css";
=======
import "./productList.css";
>>>>>>> df02544ac61162d3000568dca3d532e8505182d4
import { DataGrid } from "@material-ui/data-grid";
import { Delete, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class ProductList extends Component {
<<<<<<< HEAD
  state = {
      data: []
  }
  async componentDidMount() {
      try {
          const response = await fetch("http://localhost:41399/api/producto")
          console.log(response)
          const data = await response.json();
          this.setState({ data });

      } catch (error) {
          console.log(error)
      }
  }

  render() {
    const { data } = this.state;
    const handleDelete = (id) => {
      (data.filter((item) => item.id !== id));
    };
    
      
    const columns =  [
      { field: "id", headerName: "ID", width: 92 },
      {
        field: "product",
        headerName: "Producto",
        width: 269,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              <img className="productListImg"  src={params.row.image} alt="" />
              {params.row.name}
            </div>
          );
        },
      },
      { field: "historia", headerName: "Descripción", width: 160 },
      {
        field: "status",
        headerName: "Status",
        width: 117,
      },
      {
        field: "price",
        headerName: "Precio",
        width: 117,
      },
      {
        field: "action",
        headerName: "Editar/Borrar",
        width: 120,
        renderCell: (params) => {
          return (
            <>
              <Link className="productListEditL" to={"/product/" + params.row.id}>
                <Edit className="productListEdit"/> 
              </Link>
              &nbsp;&nbsp;&nbsp;
              <Delete
                className="productListDelete"
                onClick={() => handleDelete(params.row.id)}
              />
            </>
          );
        },
      },
    ];
  
    return (
      
      <div className="productList">
        <div className="productTitleContainer">
        <h1 className="productTitle">Productos</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Crear</button>
        </Link>
      </div>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
        
      </div>
    );

  }
}

export default ProductList;
 */
{
  /*   <div className="featuredItem">
            <div className="featuredMoneyContainer">
              <div key={data.id_producto}> </div>
              <i>{data.nombre}</i>
            </div>
            <div>
              <div key={data.id_producto}>
                <button
                  className="actionsNosotros"
                  onClick={() => this.borrarEmpleado(data.id)}
                >
                  Eliminar
                </button>
                <button
                  className="actionsNosotros"
                  onClick={() => this.editarEmpleado(data.id)}
                >
                  Editar
                </button>
              </div>
            </div>
          </div>
          <div className="featuredItem">
            <div className="featuredMoneyContainer">
              <div key={data.id_producto}> </div>
              <img
                src={data.imagen}
                className="img-fluid rounded restaurante"
                alt=""
              />
            </div>
            <div>
              <div key={data.id_producto}>
                <button
                  className="actionsNosotros"
                  onClick={() => this.borrarEmpleado(data.id)}
                >
                  Eliminar
                </button>
                <button
                  className="actionsNosotros"
                  onClick={() => this.editarEmpleado(data.id)}
                >
                  Editar
                </button>
              </div>
            </div>
          </div> */
}
=======
  constructor(props) {
    super(props);
    this.state = { datos: [] };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:41399/api/producto/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datos: data });
      });
  }

  render() {
    
    return this.state.datos.map((data) => {
      const { datos } = this.State;
      return (
        <div className="productList">
          <div className="productTitleContainer">
            <h1 className="productTitle">Productos</h1>
          </div>
          <DataGrid
            rows={datos}
            disableSelectionOnClick
            columns={[
              {
                field: (
                  <div>
                    <div key={data.id_producto}> </div>
                    <i>{data.producto}</i>
                  </div>
                ),
                headerName: "ID",
                width: 92,
              },
              {
                field: (
                  <div>
                    <div key={data.id_producto}> </div>
                    <i>{data.nombre}</i>
                  </div>
                ),
                headerName: "Nombre",
                width: 92,
              },
              {
                field: (
                  <div>
                    <div key={data.id_producto}> </div>
                    <i>{data.descripcion}</i>
                  </div>
                ),
                headerName: "Descripcion",
                width: 92,
              },
              {
                field: (
                  <div key={data.id_producto} className="productListItem">
                    <img
                      className="productListImg"
                      src={data.imagen_producto}
                      alt=""
                    />
                  </div>
                ),
                headerName: "Imagen",
                width: 269,
              },
              {
                field: (
                  <div>
                    <div key={data.id_producto}> </div>
                    <i>{data.precio}</i>
                  </div>
                ),
                headerName: "Descripción",
                width: 160,
              },
            ]}
          />
        </div>
      );
    });
  }
}
export default ProductList;
>>>>>>> df02544ac61162d3000568dca3d532e8505182d4
