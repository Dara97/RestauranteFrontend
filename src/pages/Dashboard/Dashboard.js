import Sidebar from "../../components/Dashboard/sidebar/Sidebar";
import Topbar from "../../components/Dashboard/topbar/Topbar";
import "./Dashboard.css";
import Inicio from "./Inicio/Inicio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./userList/UserList";
import User from "./user/User";
import NewUser from "./newUser/NewUser";
import ClientList from "./clientList/ClientList";
import Client from "./client/Client";
import NewClient from "./newClient/NewClient";
import ProductList from "./productList/ProductList";
import Product from "./product/Product";
import NewProduct from "./newProduct/NewProduct";
import { CommentsList } from "./CommentsList/CommentsList";


function Dashboard() {
  return (
    <Router>
      <br />
      <Topbar />
      <br />
      <div className="containerD">
        <Sidebar />
        <Switch>
          <Route path="/inicio">
            <Inicio />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/clients">
            <ClientList />
          </Route>
          <Route path="/client/:clientId">
            <Client />
          </Route>
          <Route path="/newclient">
            <NewClient />
          </Route>
          <Route path="/products">
            <ProductList />
           
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/comments">
            <CommentsList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Dashboard;
