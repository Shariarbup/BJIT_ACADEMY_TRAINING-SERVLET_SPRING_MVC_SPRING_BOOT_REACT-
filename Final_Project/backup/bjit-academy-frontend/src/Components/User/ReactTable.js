import React, { useEffect, useState } from 'react';

const ReactTable = () => {
    const[userList, setUserList] = useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(response=> response.json())
        .then(result => setUserList(result))
        .catch(error=> console.log(error))
    },[])
  return (
    <div>
        <BootStrapTable/>
    </div>
  )
}

export default ReactTable