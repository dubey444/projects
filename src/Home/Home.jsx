// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';

const Home = () => {
  const [userName, setuserName] = useState("")

  

  const onSubmit = (e) =>{
    e.preventDefault()
    console.log(userName)
    setuserName('')



  }
  const onChange =(e)=>{
    setuserName(e.target.value)

  }
  return (
    <div>
      {/* Simple Form */}
      <form onSubmit={onSubmit}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <input
        value={userName}
        onChange={onChange}
          type="text"
          placeholder="Type here"
          className="border rounded px-3 py-2 mb-4"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>

    
    </div>
  );
};

export default Home;
