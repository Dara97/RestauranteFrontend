import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Delete, Edit } from "@material-ui/icons";
/* import { menuDataProvisional } from "../../../../public/menuDataProvisional"; */
import { Link } from "react-router-dom";
import React, { Component } from "react";


class ProductList extends Component {
  state = {
      data: []
  }
  async componentDidMount() {
      try {
          const response = await fetch('./menuDataProvisional.json')
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
      { field: "description", headerName: "Descripción", width: 160 },
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
