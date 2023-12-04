import React, {useEffect, useState} from 'react';

const Reservation = () => {
    const [adult,setAdult] = useState("");
    const [count, setCount]= useState(0);
    const [count2, setCount2]= useState(0);
    const [count3, setCount3]= useState(0);
    const [children,setChildren] = useState(0);
    const [room, setRoom] = useState(0);
    const [calculation, setCalculation]= useState(0);
    const [calculation2, setCalculation2]= useState(0);
    const [calculation3, setCalculation3]= useState(0);
  
    useEffect(() => {
      setCalculation(() => count);
    }, [count]);

    useEffect(()=>{
      setCalculation2(() =>count2)
    }, [count2]); 

    useEffect(()=>{
      setCalculation3(() =>count3)
    }, [count3]); 

  
  return (
    <>
<ul>
  <li className='my-2'>
<button className='btn btn-accent mx-1 w-[90px] text-white font-bold' onChange={() => setAdult(adult)}>Adult</button>
  <button className='btn btn-base mx-1' onClick={()=>setCount((c) =>c-1)}>-</button>
  <button className='btn btn-base mx-1'>{count}</button>
  <button className='btn btn-base mx-1' onClick={()=>setCount((c) =>c+1)}>+</button> 
  </li>
  <p>Adult: {calculation}</p>
  <li className='my-2'>
<button className='btn btn-accent mx-1 w-[90px] text-white font-bold' onChange={() => setChildren(children)}>Children</button>
  <button className='btn btn-base mx-1' onClick={()=>setCount2((d) =>d-1)}>-</button>
  <button className='btn btn-base mx-1'>{count2}</button>
  <button className='btn btn-base mx-1' onClick={()=>setCount2((d) =>d+1)}>+</button> 
  </li>
  <p>Children: {calculation2}</p>

  <li className='my-2'>
<button className='btn btn-accent mx-1 w-[90px] text-white font-bold' onChange={() => setRoom(room)}>Room</button>
  <button className='btn btn-base mx-1' onClick={()=>setCount3((e) =>e-1)}>-</button>
  <button className='btn btn-base mx-1'>{count3}</button>
  <button className='btn btn-base mx-1' onClick={()=>setCount3((e) =>e+1)}>+</button> 
  </li>
  <p>Room: {calculation3}</p>

  
  
</ul>     
    


    </>
   
  );
};

export default Reservation