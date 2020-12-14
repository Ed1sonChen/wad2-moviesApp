import React, {useState} from 'react';
import {message, Input, Button} from 'antd';
import { withRouter } from "react-router-dom";
import './loginPage.css';

const LoginPage = ({history})=> {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const doLogin = () => {
    if (!username || !password) {
      message.warn("username or password cannot be empty.")
      return
    }
    // eslint-disable-next-line
    if(username!='chen'||password!='chen'){
      message.warn("username or password wrong.")
      return
    }
    history.push('/')
    window.username=username
  }
  return (
    <div className={'login-container'}>
      <div className={'login-card'}>
        <Input className={'input'} placeholder="Username"
               onChange={event => setUserName(event.target.value)}/>
        <Input.Password className={'input'} placeholder="Password"
                        onChange={event => setPassword(event.target.value)}/>
        <Button onClick={doLogin} type={"primary"}>LOGIN</Button>
      </div>
    </div>
  );
}

export default withRouter(LoginPage)
