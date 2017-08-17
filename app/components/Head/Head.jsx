import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';


function Head(props) {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={props.description} />
      <base href="/" />
    </Helmet>
  );
}


Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Head.defaultProps = {
  title: 'MercadoLibre',
  description: 'La comunidad de compra y venta online más grande de América Latina.',
};


export default Head;
