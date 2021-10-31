import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';




const UpdateOrder = () => {
    const [updateOrder, setUpdateOrder] = useState({})
    const {id}=useParams();

    useEffect(()=>{
        const url =`https://frightening-cheateau-28703.herokuapp.com/manageorders/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUpdateOrder(data))
    },[id])

    //update status
    const handleUpdateOrder = e =>{
        const url =`https://frightening-cheateau-28703.herokuapp.com/manageorders/${id}`;
        fetch(url, {
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateOrder)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Updated Successfully');
                setUpdateOrder({});
            }
            // console.log(data)
        })
        e.preventDefault()
      }
      const handleStatus = e =>{
          const updateStatus = e.target.value;
        //   console.log(updateStatus)
          const updatedStaus = {status:updateStatus}
          setUpdateOrder(updatedStaus);
      }

    return (
        <div>
            <h2>Now status: {updateOrder.status || ""}</h2>
            <form onSubmit={handleUpdateOrder} >
            <input className='border-2' onChange={handleStatus} type="text" placeholder='Status'/>
            <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default UpdateOrder;