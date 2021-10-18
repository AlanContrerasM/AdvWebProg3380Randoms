import React, { useState } from 'react';


function Form(props) {
    const [name, setName] = useState(props.name);
    const [year, setYear] = useState(props.year);
    const [select, setSelect] = useState(props.select);
    const [selectMult, setSelectMult] = useState(props.selectMult);

    function handleSubmit(e) {
        e.preventDefault();    
        console.log('You clicked submit.');
        //do stuff
        console.log(name, year, select, selectMult);
        if(name && year && select && selectMult){
            //do stuff
        }else{
            alert("choose stuff please");
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name ||""} onChange={(e)=>{setName(e.target.value)}} required />        
                </label>
                <label>
                Year:
                <input type="text" value={year||""} onChange={(e)=>{setYear(e.target.value)}} />        
            </label>

            <label>
                Pick your favorite flavor:
                <select value={select || ""} onChange={(e)=>{setSelect(e.target.value)}}>    
                    <option value={undefined} >Select One</option>       
                    <option value="grapefruit" >Grapefruit</option>
                    <option value="lime">Lime</option>
                </select>
            </label>
            <label>
                Pick multiple favorite flavor:
                <select value={selectMult || []} multiple={true} onChange={(e)=>{
                    let value = Array.from(e.target.selectedOptions, option => option.value);
                    setSelectMult(value)}}>           
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="lime2">Lime2</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}



export default Form;