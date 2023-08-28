import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    padding: 8,
  },
}));
Product.propTypes = {
  product: PropTypes,
};

function Product({ product }) {
  const classes = useStyles();
  return (
    <Box className={classes.boxContainer}>
      <Skeleton variant="rect" width="100%" height={118} />
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        {product.salePrice} - {product.promotionPercent}
      </Typography>
    </Box>
  );
}

export default Product;
