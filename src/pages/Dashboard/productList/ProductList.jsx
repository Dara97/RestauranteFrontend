import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Delete, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class ProductList extends Component {
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
