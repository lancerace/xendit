import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Grid from '@material-ui/core/Grid';
import Product from './pages/Products';
import Home from './pages/Home';
function App() {
  return (
    <Grid container className={["background", "App"].join(' ')}>
      <Grid container>
        <NavBar hoverColor="blue">
          <NavBar.Item to="/">Home</NavBar.Item>
          <NavBar.Item to="/">Shopping Carts</NavBar.Item>
          <NavBar.Item to="/products">Products</NavBar.Item>
          <NavBar.Item to="/category">Category</NavBar.Item>

        </NavBar>
      </Grid>


      <Switch>
        <Route path="/products" component={Product} />
        <Route path="/" component={Home} />
      </Switch>


      {/**footer */}
      {/*<Grid container style={{ background: "black", zIndex: 99, color: "white", height: "5vh" }}>
        <Grid item md={1}></Grid>
        <Grid item md>Xendit pte ltd. © </Grid>
  </Grid>*/}
    </Grid>
  );
}

export default App;
