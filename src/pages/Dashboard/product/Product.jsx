import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../../components/Dashboard/chart/Chart"
import {productData} from "../../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Productos</h1>
        <Link to="/products">
          <button className="productAddButton">Guardar</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://i.ibb.co/hcTYRZF/hamburguesa-especial.png" alt="" className="productInfoImg" /> 
                  <span className="productName">Hamburguesa especial</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Id:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Cantidad:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Activo:</span>
                      <span className="productInfoValue">Si</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">En inventario:</span>
                      <span className="productInfoValue">No</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Producto</label>
                  <input type="text" placeholder="Nombre del producto" />
                  <label>En inventario</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Si</option>
                      <option value="no">No</option>
                  </select>
                  <label>Activo</label>
                  <select name="active" id="active">
                      <option value="yes">Si</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://i.ibb.co/hcTYRZF/hamburguesa-especial.png" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Cargar</button>
              </div>
          </form>
      </div>
    </div>
  );
}
