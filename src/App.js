// import './App.css';
import Header from 'components/Header';
import ProductFeature from 'features/Product';
import { useSnackbar } from 'notistack';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';
import CartFeature from './features/Cart';
function App() {
  const { enqueueSnackbar } = useSnackbar();

  const showNoti = () => {
    enqueueSnackbar('Register successfully', { variant: 'info' });
  };

  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />
        <Route component={NotFound} />
      </Switch>
      {/* <TodoFeature /> */}
      {/* <AlbumFeature /> */}
    </div>
  );
}

export default App;
