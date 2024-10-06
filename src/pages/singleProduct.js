import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { fetchSingleProduct } from "../service";
import ProductDetail from "../components/productDetail";

export default function SingleProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        const data = await fetchSingleProduct(navigate, id);
        setProduct(data);
    };

    return (
        <div>
           {product ? <ProductDetail product={product} /> : <div>No Product in this id</div>} 
        </div>
    );
}
