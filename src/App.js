import './App.css';
import {useState} from 'react'
import axios from 'axios'
// import Login from './Login'
import { Routes,Route } from 'react-router-dom';


function App() {
  const [title,settitle] = useState();
  const [img,setimg] = useState(' ')
  const [desc,setdesc] = useState(' ')
  const [downloadurl,setdownloadurl] = useState(' ')
  axios.defaults.withCredentials = true;

  const changehandler = async(e)=>{
    e.preventDefault()
    await axios.post('https://card-data-3go1.vercel.app/login',{title,img,desc,downloadurl})
    .then((result)=>{
      console.log('data saved successfully')
      console.log(result)
    })
    .catch((e)=>{
      console.log('data failed')
      console.log(e)
    })
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <form action="" onSubmit={changehandler} className=''>
       <label htmlFor="">tfsdfsdfsditle</label>
       <input type="text" name="" id="" onChange={(e)=>settitle(e.target.value)} />
       <label htmlFor="">img</label>
       <input type="text" name="" id=""  onChange={(e)=>setimg(e.target.value)}/>
       <label htmlFor="" className='desc'>Description</label>
       <input type="text" name="" id=""  onChange={(e)=>setdesc(e.target.value)}/>
       <label htmlFor="">Download url</label>
       <input type="text"  onChange={(e)=>setdownloadurl(e.target.value)}/>
       <button type='submit'>submit</button>
       </form>
      // <Routes>
      //   <Route path ='/home' element={<Login/>}>Home</Route>
      // </Routes>
        // <Login/>
    </div>
  );
}

export default App;
