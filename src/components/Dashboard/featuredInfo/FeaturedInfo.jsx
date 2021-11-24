import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

/* export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
} */

import React, { Component } from "react";

class Datos extends Component {
  constructor(props) {
    super(props);
    this.state = { datos: [] };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:41399/api/nosotros/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datos: data });
      });
  }

  borrarEmpleado(id) {
    fetch("http://localhost:41399/api/nosotros/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("dato eliminado");
      });
  }
  editarEmpleado(id) {
    fetch("http://localhost:41399/api/nosotros/" + id, {
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
        <div className="featured">
          <div className="featuredItem">
            <span className="featuredTitle">Propuesta</span>
            <div className="featuredMoneyContainer">
              <div key={data.id_nosotros}> </div>
              <i>{data.historia}</i>
            </div>
            <div>
              <div key={data.id_nosotros}>
                <button  className="actionsNosotros" onClick={() => this.borrarEmpleado(data.id)}>
                  Eliminar
                </button>
                <button  className="actionsNosotros" onClick={() => this.editarEmpleado(data.id)}>
                  Editar
                </button>
              </div>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Historia</span>
            <div className="featuredMoneyContainer">
              <div key={data.id_nosotros}> </div>
              <i>{data.historia}</i>
            </div>
            <div>
            <div key={data.id_nosotros}>
                <button  className="actionsNosotros" onClick={() => this.borrarEmpleado(data.id)}>
                  Eliminar
                </button>
                <button  className="actionsNosotros" onClick={() => this.editarEmpleado(data.id)}>
                  Editar
                </button>
              </div>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Imagen</span>
            <div className="featuredMoneyContainer">
              <div key={data.id_nosotros}> </div>
              <img src={data.imagen} className="img-fluid rounded restaurante" alt="" />
            </div>
            <div>
            <div key={data.id_nosotros}>
                <button  className="actionsNosotros" onClick={() => this.borrarEmpleado(data.id)}>
                  Eliminar
                </button>
                <button  className="actionsNosotros" onClick={() => this.editarEmpleado(data.id)}>
                  Editar
                </button>
              </div>
            </div>
          </div>
         
        </div>
      );
    });
  }
}

export default Datos;
