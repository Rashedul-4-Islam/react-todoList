import React, { useState } from 'react';
import '../App.css';
import document from "../images/document.jpg"

const Todo = () => {
     const [inputData,setInputData] = useState('');
     
     const [items,setItems] = useState([]);

     const addItem = () =>{
         if(!inputData){

         }else{
            setItems([...items, inputData]);
            setInputData('')
         }
     }

     const deleteItem = (id) => {
            const data = items.filter((td,index) => index!== id);
            setItems(data);
     }
     const remove = () =>{
         setItems([]);
     }

    return (
        <>
             <div className="main-div">
                 <div className="child-div">
                    <figure>
                        <img className='doc-image' src={document} alt="Trulli" />
                        <figcaption>Add your list here</figcaption>
                    </figure>
                    <div className='addItems'>
                         <input type="text" placeholder='Add Items' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                         <i className="fa-solid fa-plus add-btn" onClick={addItem} title='add-item'></i>
                    </div>
                    <div className="showDetails">
                    {
                                items.map((data ,index)=> (
                        <div className="eachItem" key={index}>
                           
                                    <h3>{data}</h3>
                                  <i className="fa-solid fa-trash" onClick={() => deleteItem(index)}></i>
                        </div>
                               
                               ))
                     }
                    </div>

                    <div className="show">
                         <button data-sm-link-text="delete all" onClick={remove}><span>Remove All </span></button>
                    </div>

                 </div>
             </div>
        </>
    );
};

export default Todo;