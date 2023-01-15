import { AddBox, PermIdentity } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';

export default function ClientsWidget() {
  const [clients, setClients] = useState([]);

  const getClients = async () => {
    try {
      const response = await fetch('http://localhost:8000/allClients', {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();
      // console.log(parseRes);

      setClients(parseRes);
      console.log(clients);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClients();
  }, []);

  console.log(clients.length);

  return (
    <div className=''>
      {/* CLIENTS */}
      <div
        className='w-full  mt-5 p-8 rounded-xl border border-l-4 border-l-red-500 cursor-pointer hover:bg-red-500
        hover:text-white hover:text-base transition duration-150
        ease-in-out'
      >
        <div className='flex justify-between items-center'>
          <span className='text-xl'>Borrowers</span>
          {/* <button className='text-sm font-medium  py-2 px-2  rounded-md cursor-pointer '>
            <AddBox sx={{ color: 'rgba(239,68,68)' }} />
          </button> */}
        </div>
        <div className='my-3 '>
          <span className='text-3xl'>
            <PermIdentity fontSize='30px' /> {clients.length}
          </span>
        </div>
        <span className='text-base text-gray-500'>Total Clients Serviced</span>
      </div>
    </div>
  );
}