/* import "./QuienesSomosAdmin.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { Component } from "react";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import EditIcon from "@mui/icons-material/Edit";

class QuienesSomosAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      modalActualizar: false,
      form: {
        id_nosotros: "",
        historia: "",
        imagen: "",
      },
    };
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

  modalActualizar = () => {
    this.setState({ modalActualizar: !this.state.modalActualizar });
  };

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
   
  };

  editar(dato) {
    fetch("http://localhost:41399/api/nosotros/", {
      method: "PUT",
      body: JSON.stringify(dato),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("dato editado");
        this.setState({ modalActualizar: false });
        this.fetchData();
      });
  }

  render() {
    const { form } = this.state;
    console.log(form);
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
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    
                    this.modalActualizar(data);
                  }}
                >
                  <EditIcon />
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
                <button
                  className="actionsNosotros"
                  onClick={() => this.editar(data.id_nosotros)}
                >
                  Editar
                </button>
              </div>
            </div>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Imagen</span>
            <div className="featuredMoneyContainer">
              <div key={data.id_nosotros}> </div>
              <img
                src={data.imagen}
                className="img-fluid rounded restaurante"
                alt=""
              />
            </div>
            <div>
              <div key={data.id_nosotros}>
                <button
                  className="actionsNosotros"
                  onClick={() => this.modalActualizar()}
                >
                  Editar
                </button>
              </div>
            </div>
          </div>

          <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader style={{ display: "block" }}>
              <span
                style={{ float: "right" }}
                onClick={() => this.modalActualizar()}
              >
                x
              </span>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label className="nombresFormTitulo" htmlFor="id_nosotros">
                  ID
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="id_nosotros"
                  id_nosotros="id_nosotros"
                  readOnly
                  onChange={this.handleChange}
                  value={this.state.form.id_nosotros}
                />
                <br />
                <label className="nombresFormTitulo" htmlFor="hitoria">
                  Texto
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="historia"
                  id_nosotros="historia"
                  onChange={this.handleChange}
                  value={form.id_historia}
                />
                <br />
                <label className="nombresFormTitulo" htmlFor="imagen">
                  Imagen
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="imagen"
                  id_nosotros="imagen"
                  onChange={this.handleChange}
                  value={form.imagen}
                />
              </div>
            </ModalBody>

            <ModalFooter>
              <button className="btn btn-primary" onClick={() => this.editar()}>
                Actualizar
              </button>

              <button
                className="btn btn-danger"
                onClick={() => this.modalActualizar()}
              >
                Cancelar
              </button>
            </ModalFooter>
          </Modal>
        </div>
      );
    });
  }
}

export default QuienesSomosAdmin;
 */

import "./QuienesSomosAdmin.css";
import React, { Component } from "react";
import EditIcon from "@mui/icons-material/Edit";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

import Button from "react-bootstrap/Button";

class QuienesSomosAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      modalActualizar: false,
      modalCerrar: false,
      form: {
        id_nosotros: "",
        historia: "",
        imagen: "",
      },
    };
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

  editar(dato) {
    fetch("http://localhost:41399/api/nosotros/", {
      method: "PUT",
      body: JSON.stringify(dato),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("dato editado");
        this.setState({ modalActualizar: false });
        this.fetchData();
      });
  }

  abrirVentanaEditar(dato) {
    this.setState({ modalActualizar: true, form: dato });
  }
  cerrarVentana(close) {
    this.setState({ modalCerrar: close, modalActualizar: false });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        {this.state.datos.map((data) => (
          <div className={data.historia} id={data.historia}>
            <div className="featured">
              <div className="featuredItem">
                <div className="featuredMoneyContainer">
                  <div key={data.id_nosotros}> </div>
                  {data.historia}
                  <img
                    src={data.imagen}
                    className="img-fluid rounded restaurante"
                    alt=""
                  />
                </div>
                <div>
                  <div key={data.id_nosotros}>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.abrirVentanaEditar(data)}
                    >
                      <EditIcon />
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
          <Modal.Header /* style={{ display: "block" }} */>
          <Modal.Title>Editar quienes somos</Modal.Title>
            <button
              style={{ float: "right" }}
              ClassName="btn btn-primary"
              variant="secondary"
              onClick={() => this.cerrarVentana(true)}
            >
              X
            </button>
          </Modal.Header>
         

          <Modal.Body>
            <label className="nombresFormTitulo">Nombre producto</label>

            <input

              className="form-control"
              name="id_nosostros"
              type="number"
              readOnly
              value={this.state.form.id_nosotros}
              onChange={this.handleChange}
            />
            <br />
            <label className="nombresFormTitulo">Precio</label>

            <input
              
              className="form-control"
              name="historia"
              type="text"
              value={this.state.form.historia}
              onChange={this.handleChange}
            />
            <br />
            <label className="nombresFormTitulo">Descripción</label>
            <input
              className="form-control"
              name="imagen"
              type="text"
              value={this.state.form.imagen}
              onChange={this.handleChange}
            />
            <br />
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default QuienesSomosAdmin;
