import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
     const cardStyle = {
    width: '250px', 
    height: '450px', 
    marginTop:'50px',
    marginBottom:'100px'
  };

  const imageStyle = {
    width: '100%', 
    height: '250px', 
    objectFit: 'cover', 
  };
    const header = <Link to={`/detail/${product.id}`}><img alt="Card" src={product.thumbnail} style={imageStyle}/></Link>;
    const footer = (
     
      <>
        <Link to={`/detail/${product.id}`}><Button label="Detail" icon="pi pi-check" /></Link>
        <Button label="buy" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
      </>
    );
  
    return (
      <div className="card  " style={cardStyle}>
        <Card title={product.title} subTitle={product.brand} footer={footer} header={header} border-2>
          {/* <p className="m-0">{product.description}</p> */}
          <p className="m-0">Price: ${product.price}</p>
          <p className="m-0">Stock: {product.stock}</p>
        </Card>
      </div>
    );
  };

  export default ProductCard;