import {useState, useEffect} from "react";


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fectData();
    }, []);

    const fectData = async() => {
        const response = await fetch('http://localhost:8080/products');
        const data = await response.json();
        setProducts(data);
    }

    return (
        <div>
            <ul>
                {products.map((product) => (
                <li key={ product.id }> { product.title } - { product.price } 
                    <button className= "button is-danger">Delete</button>
                </li>
                ))}
            </ul>
        </div>
    )
}
 
export default ProductList