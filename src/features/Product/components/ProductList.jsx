import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Product from './Product';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    padding: 8,
  },
}));

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.defaultProps = {
  data: [],
};

function ProductList({ data }) {
  const classes = useStyles();
  return (
    <Box>
      <Grid container>
        {data.map((product, index) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
