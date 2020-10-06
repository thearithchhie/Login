import React,{ useState , useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';


//Start Ant Design
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 1, span: 16 },
};
    
    const onFinish = values => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    //End Ant Design 
const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    useEffect(() => {
        let val = '';
        setUsername(val);
        setPassword(val);
    }, []);
    const usenameOnChangle = (e) => {
        setUsername(e.target.value);
    }

    const passwordOnChangle = (e) => {
        setPassword(e.target.value)
    }
    const onSubmit  = () => {
      if(setUsername == "admin" && setPassword == "123456"){
        alert("Success")
      }else
      {
        alert("Error");
      }
    }
  return (
<Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="username"
        name="username"
        value={username}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="Enter your username"  onChange={usenameOnChangle} autoComplete="off" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        value={password} 
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Enter your password" onChange={passwordOnChangle}  autoComplete="off" />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onSubmit={onSubmit}>
          Submit
        </Button>
      </Form.Item>
                <h1>{"Usename : "+username}</h1>
                <h1>{"Password : "+password}</h1>
    </Form>
  );
};
export default Login;