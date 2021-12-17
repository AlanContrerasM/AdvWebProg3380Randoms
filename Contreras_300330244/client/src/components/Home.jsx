import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const url = "http://localhost:5000/api/finalExam/";
    const [cars, setCars] = useState();

    const navigate = useNavigate();
    

    const fetchData = async () =>{
        const resp = await axios.get(url);
        console.log(resp.data);
        setCars(resp.data);
        

    }

    useEffect(() => {
        fetchData();
        return () => {}
    }, [])


    const deleteCar = async (id) => {
        setCars(null);
        const resp = await axios.delete(url + id);
        console.log(resp);
        fetchData();
        
    }


    return (
        <div className="table-responsive text-center">
            <h2>Car Safety scores information</h2>
            <button onClick={()=>{navigate('/addCar')}} className="btn btn-primary m-2">Add New Record</button>
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Car Id</th>
                <th scope="col">Model Name</th>
                <th scope="col">Brand Name</th>
                <th scope="col">Price</th>
                <th scope="col">Safety Score</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {!cars ? <tr><td>loading</td></tr> : cars.map(car=>{
                    console.log("creating car: ", car.carid);
                    return (
                    <tr key={car.carid}>
                        <td>{car.carid}</td>
                        <td>{car.modelname}</td>
                        <td>{car.brand}</td>
                        <td>{car.price}</td>
                        <td>{car.safetyscore}</td>
                        <td><button  onClick={()=>{navigate(`/editCar/${car._id}`)}} className="btn btn-primary m-2">Update</button>
                        <button  onClick={()=>{deleteCar(car._id)}}className="btn btn-danger">Delete</button></td>
                    </tr>
                    );
                })}
            </tbody>
            </table>
        </div>
    )
}

export default Home;
