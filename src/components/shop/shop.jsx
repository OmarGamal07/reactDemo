import { useEffect } from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
function Shop(){
    const [products, setProducts] = useState ([]);
useEffect (() => {
    // Runs ONCE after initial rendering
    fetchProducts();
    }, []);
   const fetchProducts=()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))
   }
console.log(products);
    return (
        products.map((product)=>{
           // console.log("asd");
        return(
            <div className='d-inline-flex flex-wrap justify-content-between mt-5 me-5 ms-5 ' key={product.id}>
        <Card style={{ width: '40rem' ,height:'40rem'}}>
        <Card.Img style={{ width:"100%",height:"60%" }} variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>
            {product?.description}
          </Card.Text>
          <Button  as={Link} to={`/product/${product?.id}`}  variant="primary">More Details</Button>
        </Card.Body>
      </Card>
            </div>
        );
        })
        
    )
}


export default Shop;