import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Product from '../pages/admin/Product'
import Category from '../pages/admin/Category'
import Order from '../pages/admin/Order'
import Collection from '../pages/admin/Collection'
import ProductEdit from '../pages/admin/Edit'

export default function App() {
  return (
    
        <Switch>
          <Route exact path="/admin/product">
            <Product />
          </Route>
          <Route path="/admin/Category">
            <Category />
          </Route>
          <Route path="/admin/Collection">
            <Collection />
          </Route>
          <Route path="/admin/Order">
            <Order />
          </Route>
          <Route exact path="/admin/product/create">
            <ProductEdit/>
          </Route>
          <Route exact path="/admin/product/:id">
            <ProductEdit/>
          </Route>
        </Switch>
  );
}
