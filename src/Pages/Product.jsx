import { useParams } from "react-router-dom";
import { getProduct } from "../Services/contactService";
import { useEffect, useState } from "react";
import Particle from "../Utils/Particle";

const Product = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);


    const getProductData = async () => {
        const { data } = await getProduct(id);
        setData(data);
    };
    useEffect(() => {
        getProductData();
    }, []);
    return (<div className="flex justify-center items-center">
            <Particle/>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#">
                    <img class="rounded-t-lg" src={data.images} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 ">{data.description}</p>
                    <a class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        ${data.price}
                    </a>
                </div>
            </div>
    </div>);
}

export default Product;