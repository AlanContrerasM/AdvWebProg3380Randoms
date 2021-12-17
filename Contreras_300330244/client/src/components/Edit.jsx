import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Edit = () => {
    const url = "http://localhost:5000/api/finalExam/";
    const navigate = useNavigate();
    const {id} = useParams();

    const [newCar, setNewCar] = useState(
        {
            "carid": 0,
            "modelname": "",
            "brand": "",
            "price": 0,
            "safetyscore": 0,
    })


    const fetchData = async () =>{
        const resp = await axios.get(url + id);
        console.log(resp.data);
        setNewCar(resp.data);
        

    }

    useEffect(() => {
        fetchData();
        return () => {}
    }, [])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        //in this case no validation required. just use required on the form

        //send to our app, so they can update the state.
        try{

            await axios.put(url + newCar._id, newCar);
            navigate('/');

            
        }catch(err){
            console.log(err, "couldnt add new car");
        }
    }



    return (
        <div className="AddStudent">
            <div className="form-group container border p-2 my-2">
            <h1 className='text-center'>Add New Car Details Here...</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Car Id
                </label><br/>
                <input type="number" value={newCar.carid} onChange={(e)=>{setNewCar({...newCar, "carid": e.target.value})}} required disabled className="form-control"/>
                <br/>
                <label>
                    Model Name
                </label><br/>
                <input type="text" value={newCar.modelname} onChange={(e)=>{setNewCar({...newCar, "modelname": e.target.value})}} required disabled className="form-control"/>
                <br/>
                <label>
                    Brand
                </label><br/>
                <input type="text" value={newCar.brand} onChange={(e)=>{setNewCar({...newCar, "brand": e.target.value})}} required disabled className="form-control"/>
                <br/>
                <label>
                    Price
                </label><br/>
                <input type="number" value={newCar.price} onChange={(e)=>{setNewCar({...newCar, "price": e.target.value})}} required className="form-control"/>
                <br/>
                <label>
                    Safety Score
                </label><br/>
                <input type="number" value={newCar.safetyscore} onChange={(e)=>{setNewCar({...newCar, "safetyscore": e.target.value})}} required className="form-control"/>
                <br/>
                      
                <br/>
                <button type="submit" className='btn btn-primary btn-lg m-2'>Submit</button>
                <button onClick={()=>{navigate('/')}} className='btn btn-primary btn-lg'>Home</button>
            </form>
        </div>
        </div>
    )
}

export default Edit;
