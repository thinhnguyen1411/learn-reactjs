import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import productApi from 'api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';
import { Pagination } from '@material-ui/lab';
import ProductSort from '../components/ProductSort';
import ProductFilters from '../components/ProductFilters';
import FilterViewer from '../components/FilterViewer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
  },
  boxContainer: {
    paddingTop: 32,
  },
  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    marginTop: '30px',
    paddingBottom: '20px',
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState(() => ({
    ...queryParams,
    _page: Number.parseInt(queryParams._page) || 1,
    _limit: Number.parseInt(queryParams._limit) || 9,
    _sort: queryParams._sort || 'salePrice:ASC',
  }));

  useEffect(() => {
    history.push({
      pathName: history.location.pathName,
      search: queryString.stringify(filters),
    });
  }, [history, filters]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);

        setProductList(data);
        setPagination(pagination);
        // console.log(data, pagination);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSortChange = (newSortValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newSortValue,
    }));
  };

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const setNewFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Box className={classes.boxContainer}>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters filters={filters} onChange={handleFilterChange} />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
              <FilterViewer filters={filters} onChange={setNewFilters} />

              {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}
              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
