import React from 'react';
import { Helmet } from 'react-helmet';
import TopBar from '../../containers/TopBar';


function Home() {
  return (
    <div>
      <Helmet>
        <title>MercadoLibre</title>
        <meta
          name="description"
          content="La comunidad de compra y venta online más grande de América Latina."
        />
      </Helmet>
      <TopBar />
    </div>
  );
}


export default Home;
