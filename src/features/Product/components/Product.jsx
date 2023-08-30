import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    padding: 8,
  },
  imgContainer: {
    padding: 8,
  },
  boxPrice: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: 8,
  },
}));

Product.propTypes = {
  product: PropTypes,
};

function Product({ product }) {
  const history = useHistory();
  const classes = useStyles();
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
  const handleClick = () => {
    history.push(`/products/${product.id}`);
  };
  return (
    <Box className={classes.boxContainer} onClick={handleClick}>
      {/* <Skeleton variant="rect" width="100%" height={118} /> */}
      <Box className={classes.imgContainer} minHeight="215px">
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" className={classes.boxPrice}>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  );
}

export default Product;
