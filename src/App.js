// import './App.css';
import Header from 'components/Header';
import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';
import { Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import ProductFeature from 'features/Product';

function App() {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fectchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fectchProducts();
  }, []);

  const showNoti = () => {
    enqueueSnackbar('Register successfully', { variant: 'info' });
  };

  return (
    <div className="App">
      <Header />
      {/* <Button onClick={showNoti}>Show noti</Button> */}
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />

        <Route component={NotFound} />
      </Switch>
      {/* <TodoFeature /> */}
      {/* <AlbumFeature /> */}
    </div>
  );
}

export default App;
