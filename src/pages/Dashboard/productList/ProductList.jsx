/* import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Delete, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { Component } from "react";


class ProductList extends Component {
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

import React, { Component } from "react";

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
        <div className="productoslista">
        <div className="featured">
          <div className="featuredItem">
              <div key={data.id_producto}> </div>
              {data.nombre}
              {data.descripcion}
              {data.precio}
              <img ClassName="productListImg" src={data.imagen_producto} alt="" />
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
          </div>
          {/*   <div className="featuredItem">
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
          </div> */}
        </div>
      );
    });
  }
}

export default DatosProductos;
