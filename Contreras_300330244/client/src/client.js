import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';

const Client = () => {


    return (
        <div>
            {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> */}

            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/addCar' element={<Add/>} />
              <Route path='/editCar/:id' element={<Edit/>} />
            </Routes>
        </div>
    )
}

export default Client;
