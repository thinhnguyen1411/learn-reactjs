import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    padding: 8,
  },
  imgContainer: {
    padding: 8,
  },
}));

Product.propTypes = {
  product: PropTypes,
};

function Product({ product }) {
  const classes = useStyles();
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
  return (
    <Box className={classes.boxContainer}>
      {/* <Skeleton variant="rect" width="100%" height={118} /> */}
      <Box className={classes.imgContainer}>
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        {product.salePrice} - {product.promotionPercent}
      </Typography>
    </Box>
  );
}

export default Product;
