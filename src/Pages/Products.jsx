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

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            information
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, index) => (
                        <tr className="odd:bg-white  even:bg-gray-50 border-b ">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                   {data.id} 
                            </th>
                            <td className="px-6 py-4">
                                {data.title}
                            </td>
                            <td className="px-6 py-4">
                                 {data.price}  $
                            </td>
                            <td className="px-6 py-4">
                                2020/05/24
                            </td>
                            <td className="px-6 py-4">
                                <Link to={`/product/${data.id}`} className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-2 py-1 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
                                    <a className="font-medium text-white">information</a>
                                </Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    </>);
}

export default Products;