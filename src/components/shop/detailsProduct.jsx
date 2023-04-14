import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
function DetailsProduct(){
    const param=useParams();
    const [product, setProduct] = useState ({});
    useEffect (() => {
    // Runs ONCE after initial rendering
    fetchProducts();
    }, []);
   const fetchProducts=()=>{
    fetch(`https://fakestoreapi.com/products/${param.id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
   }
//    console.log(product)
    return (
        <div key={product.id}>
        {/* <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={product.image} />
<Card.Body>
  <Card.Title>{product?.title}</Card.Title>
  <Card.Text>
    {product?.description}
  </Card.Text>
  </Card.Body>
</Card> */}
    <div className="rounded ">
        <img src={product.image} className="" style={{width:'30%',height:"30%"}} alt="" />
        <h1 className="m-5">{product.title} {product.price}$</h1>
       
        <p>{product.description} </p>
       
    </div>
    </div>
    )
}


export default DetailsProduct;