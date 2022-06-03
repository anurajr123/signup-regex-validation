import React, { useState } from "react";
import './App.css';
import {fName,uName,uEmail,uPassword} from "./regex.js";


function App() {
  const [fname, setName] = useState("");
  const [uname, setUserName] = useState("");
  const [uemail, setEmail] = useState("");
  const [upsd, setPassword] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [userNameErr, setUserNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const signUp = () => {
    const nameLength = fname.length;
    const userNameLength = uname.length;
    const pswdLength = upsd.length;
    if (!fName.test(fname) || nameLength < 4) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    if (!uName.test(uname) || userNameLength < 4) {
      setUserNameErr(true);
    } else setUserNameErr(false);

    if (!uEmail.test(uemail)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (!uPassword.test(upsd) || pswdLength < 8) {
      setPwdError(true);
    } else {
      setPwdError(false);
    }
    if (
      fName.test(fname) &&
      uName.test(uname) &&
      uEmail.test(uemail) &&
      uPassword.test(upsd)
    ) {
      alert(
        "Successful...!" +"\n" +
          "Name : " +fname +"\n" +
          "User name : " +uname +"\n" +
          "Email : " +uemail
      );
    }
  };


  return (
    <div className="App">
      <h2>WELCOME</h2><br/>
      <div className='main-body'>
      <div>
        <input type={"text"} className={'tfield'} value={fname} onChange={(e) => {
              setName(e.target.value);
            }} id={'name'} placeholder={'Enter Name..'}></input>
            {nameErr && <p> Invalid ..</p>}
      </div>
      
      <div>
        <input type={"text"} className={'tfield'} value={uname} onChange={(e) => setUserName(e.target.value)} placeholder={'Enter User name..'}></input>
        {userNameErr && <p> Invalid..</p>}
      </div>
      
      <div>
        <input type={"email"} className={'tfield'} value={uemail} onChange={(e) => setEmail(e.target.value)} placeholder={'Enter Email..'}></input>
        {emailErr && <p>Invalid</p>}
      </div>
      
      <div>
        <input type={"password"} className={'tfield'} value={upsd} onChange={(e) => setPassword(e.target.value)} placeholder={'Enter Password..'}></input>
        {pwdError && <p>Invalid..</p>}
      </div>
      
      <button
            type={"submit"}
            className={"button"}
            onClick={signUp}
          >
            Signup
          </button>
      
      </div>
      
    </div>
  );
}

export default App;
