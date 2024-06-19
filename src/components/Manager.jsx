import React, { useState ,useRef, useEffect} from 'react';
const Manager = () => {
  const ref = useRef()
  const [form, setform] = useState({site:"", username:"", password:""})
  const [pass, setpass] = useState()
  const   [passwordArray, setpasswordArray] = useState([])
  useEffect(() => {
      let password = localStorage.getItem("password")
      if(password){
        setpasswordArray(JSON.parse(password))
      }
    }, [])
  
  const savePassword = ()=>{
    setpasswordArray([...passwordArray,form])
    localStorage.setItem("password", JSON.stringify([...passwordArray,form]))
    console.log([...passwordArray,form])
   
  }
  const handleChange = (e)=>{
    setform({...form, [e.target.name]: e.target.value})
  }
  const showPassword = ()=>{
    if(ref.current.src.includes("icons/eyecross.png")){
      setpass('text')
      ref.current.src = "icons/eye.png"
    }else{
      
      setpass('password')
      ref.current.src = "icons/eyecross.png"
    }
  }
  return (
    <>
  <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div></div>
   
    <div className="myconatiner">
        <h1 className='text-4xl text font-bold text-center'>
        <span className='text-green-500'>&lt;</span>
             Pass
            <span className='text-green-500'>Op/&gt;</span></h1>
        <p className='text-green-900 text-lg text-center'>Your own password manager</p>
        <div className="flex flex-col p-4 text-black gap-5 items-center">
            <input value={form.site} onChange={handleChange} placeholder='Enter website URL' name='site' type="text " className="text rounded-full border border-green-500 w-full p-4 py-1" />

            <div className="flex w-full justify-between gap-5">
            <input  value={form.username} onChange={handleChange} placeholder='Enter Username' name='username' type="text " className="text rounded-full border border-green-500 w-full p-4 py-1" />
            
            <div className="relative">
              <input value={form.password} onChange={handleChange} placeholder='Enter Password' name='password' type={pass} className="text rounded-full border border-green-500 w-full p-4 py-1" />
              <span className='absolute right-2 top-1' onClick={showPassword}>
              <img ref={ref} width={25} src="icons/eye.png" alt="eye" />
              </span>
            </div>
        </div>
            <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-500 rounded-full px-4 py-1 hover:bg-green-400 w-fit border-2 border-green-100'>
            <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="loop-on-hover">
            </lord-icon>
            Add Password</button>
        </div>
        <div className="password">
          <h2 className='font-bold text-2xl py-4'>Your password</h2>
          {passwordArray.length === 0 && <div>No password to show</div> }
          {passwordArray.length != 0 &&<table className="table-auto w-full rounded-md overflow-hidden ">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className='py-2'>Site</th>
                  <th className='py-2'>Username</th>
                  <th className='py-2'>Password</th>
                </tr>
              </thead>
              <tbody className='bg-green-50'>
                {passwordArray.map((item, index)=>{
                  return <tr key={index}>
                  <td className='py-2 border border-white text-center min-w-32'> <a href={item.site} target="_blank">{item.site}</a></td>
                  <td className='py-2 border border-white text-center min-w-32'>{item.username}</td>
                  <td className='py-2 border border-white text-center min-w-32'>{item.password}</td>
               </tr>
                })}
                
              </tbody>
          </table>}
        </div>
    </div>
    </>
  );
}

export default Manager;
