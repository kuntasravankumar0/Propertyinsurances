import { useEffect, useState } from "react";
import axios from "axios";

const Array = () => {
    const [value, setValue] = useState([]);

    useEffect(() => {
        // Fetch data from the server when the component mounts
        axios.get("http://localhost:9090/customer/get")
            .then((res) => {
                setValue(res.data); // Update the state with the fetched data
            })
            .catch((err) => {
                console.error("Error fetching data:", err); // Log errors if any
            });
    }, []);


    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Customer ID</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {value.map((item, hi) => (
                        <tr key={hi}>
                            <td>{hi + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.customerId}</td>
                            <td>{item.mobileNo}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Array;