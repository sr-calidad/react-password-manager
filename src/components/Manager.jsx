import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
import "react-toastify/dist/ReactToastify.css";

const Manager = () => 

  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [pass, setpass] = useState();
  const [passwordArray, setpasswordArray] = useState([]);
  useEffect(() => {
    let password = localStorage.getItem("password");
    if (password) {
      setpasswordArray(JSON.parse(password));
  

  const savePassword = () => {
    if((form.site.length > 3)  && (form.username.length >3) && (form.password.length > 3 )){
      setpasswordArray([...passwordArray, {...form, id:uuidv4()}]);
      localStorage.setItem("password", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]));
      setform({ site: "", username: "", password: "" })
    }else{
      toast('Error: Password not saved')
    }
  };

  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete this ?")
    if(c){

      setpasswordArray(passwordArray.filter(item=>item.id!==id));
      localStorage.setItem("password", JSON.stringify(passwordArray.filter(item=>item.id!==id)));
    }
  };

  const editPassword = (id) => {
    console.log('editing id', id)
    setform(passwordArray.filter(item=>item.id===id)[0])
    setpasswordArray(passwordArray.filter(item=>item.id!==id));
    // setpasswordArray([...passwordArray, {...form, id:uuidv4()}]);
    // localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const showPassword = () => {
    if (ref.current.src.includes("icons/eyecross.png")) {
      setpass("text");
      ref.current.src = "icons/eye.png";
    } else {
      setpass("password");
      ref.current.src = "icons/eyecross.png";
    }
  };

  const copyText = (text) => {
    toast("Copied to clipboard", {
      position: "bottom-right",
      autoClose: 100,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="p-3 md:myconatiner min-h-[80vh]">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">Op/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own password manager
        </p>
        <div className="flex flex-col p-4 text-black gap-5 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            name="site"
            type="text "
            className="text rounded-full border border-green-500 w-full p-4 py-1"
              id="site"
          />

          <div className="flex w-full justify-between gap-5">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              name="username"
              type="text "
              className="text rounded-full border border-green-500 w-full p-4 py-1"
              id="username"
            />

            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                name="password"
                type={pass}
                className="text rounded-full border border-green-500 w-full p-4 py-1"
                id="password"
              />
              <span className="absolute right-2 top-1" onClick={showPassword}>
                <img ref={ref} width={25} src="icons/eye.png" alt="eye" />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 bg-green-500 rounded-full px-4 py-1 hover:bg-green-400 w-fit border-2 border-green-100"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="loop-on-hover"
            ></lord-icon>
            Save Password
          </button>
        </div>
        <div className="password">
          <h2 className="font-bold text-2xl py-4">Your password</h2> 
          {passwordArray.length === 0 && <div>No password to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden ">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-50">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" py-2 border border-white text-center">
                        <div className="flex items-center justify-center">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div
                            className="lordiconCopy size-7"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/uecgmesg.json"
                              trigger="hover"
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "4px",
                                paddingLeft: "3px",
                              }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 border border-white text-center">
                        <div className="flex items-center justify-center">
                          <span>{item.username}</span>
                          <div
                            className="lordiconCopy size-7"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/uecgmesg.json"
                              trigger="hover"
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "4px",
                                paddingLeft: "3px",
                              }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 border border-white text-center ">
                        <div className="flex items-center justify-center">
                          <span>{item.password}</span>
                          <div
                            className="lordiconCopy size-7"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/uecgmesg.json"
                              trigger="hover"
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "4px",
                                paddingLeft: "3px",
                              }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 border border-white text-center">
                      <span className="mx-1" onClick={()=>{editPassword(item.id)}}>
                          <lord-icon
                            src="https://cdn.lordicon.com/zfzufhzk.json"
                            trigger="hover"
                            colors="primary:#121131,secondary:#c71f16,tertiary:#e8e230,quaternary:#f9c9c0,quinary:#3a3347"
                            ></lord-icon>
                        </span>
                        <span className="mx-1" onClick={()=>{deletePassword(item.id)}}>
                          <lord-icon
                            src="https://cdn.lordicon.com/xekbkxul.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#e83a30,tertiary:#646e78,quaternary:#ebe6ef"
                          ></lord-icon>
                        </span>
                       
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
