import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { getProducts } from "../Services/contactService";
import { Link } from "react-router-dom";

const Products = () => {
    const [data, setData] = useState([]);


    const getProductData = async () => {
        const { data } = await getProducts();
        setData(data);
    };
    useEffect(() => {
        getProductData();
        console.log(data)
    }, []);
    return (<>
        <NavBar />
        <div className="flex justify-center w-full mt-6">

            <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data) =>
                            <tr class="odd:bg-white  even:bg-gray-50  border-b ">
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {data.id}
                                </td>
                                <td class="px-6 py-4 text-gray-600">
                                    {data.title}
                                </td>
                                <td class="px-6 py-4 text-gray-600">
                                    {data.category.name}
                                </td>
                                <td class="px-6 py-4 text-gray-600">
                                    `$ {data.price}`
                                </td>
                                <td class="px-6 py-4 text-gray-600">
                                    <Link to={`/product/${data.id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>



        </div>
    </>);
}

export default Products;