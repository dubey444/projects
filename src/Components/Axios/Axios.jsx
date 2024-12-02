import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Axios = () => {
    // Declare state to store fetched data
    const [data, setData] = useState([]);

    // Async function to fetch data
    const GetData = async () => {
        try {
            const response = await axios.get('https://picsum.photos/v2/list');
            setData(response.data); // Store the fetched data in state
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className='p-6'>
            <button onClick={GetData} className='bg-slate-400 text-white rounded active:scale-90'>
                Get Data
            </button>
            <div className='bg-teal-600'>
                {data.map((elem, idx) => (
                    <div key={idx} className='p-4'>
                        <img  src={elem.download_url} alt={elem.author} className='w-full h-auto' />
                        <p className='text-white'>{elem.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Axios;
