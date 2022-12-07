import React, { useState , useEffect} from 'react'
import axios from 'axios';

function Boots() {
    const [num,setnum] = useState('')
    const [name,setname] = useState('')
    const [moves,setmoves] = useState('')
function changefn(event){
setnum(event.target.value)
}

useEffect(() => {
  // alert('hii');
  async function getdata () {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
    
    setname(res.data.name);
    setmoves(res.data.moves.length)
  }
  getdata();
 
});
 
  return (
   <>
   <div className='container'>
   <select class="form-select mt-3" aria-label="Default select example " onChange={changefn}>
  
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  <option value="25">25</option>
</select>

   </div>
   <div className='container mt-5'>
   <h1>MY NAME IS <span style={{color:'red'}}>{num}</span></h1>
    <h1>MY NAME IS <span style={{color:'red'}}>{name}</span></h1>
    <h1>MY MOVIES ARE <span style={{color:'red'}}>{moves}</span></h1>
   </div>
   </>
  )
}

export default Boots;