// import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import { Link, Route, NavLink, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom';
import NotFound from './components/NotFound';
import { useEffect } from 'react';
import productApi from './api/productApi';
import CounterFeature from './features/Counter';
import styled from 'styled-components';

//CSS in JS
const Title = styled.h1`
  text-align: center;
  font-weight: bold;

  color: ${(props) => props.color || 'green'};
`;

function App() {
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
  return (
    <div className="App">
      <Title color="goldenrod">Heading</Title>
      <p>
        {' '}
        <NavLink to="/todos" activeClassName="active-menu">
          ToDo
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums">Album</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      {/* <TodoFeature /> */}
      {/* <AlbumFeature /> */}
    </div>
  );
}

export default App;
