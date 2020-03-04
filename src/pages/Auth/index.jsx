import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { Block, Button } from 'components';

import "./Auth.scss"

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
const tailLayout = {
wrapperCol: { offset: 8, span: 16 },
};

const Auth = () => {

    const onFinish = values => {
        console.log('Success:', values);
      };
    
    const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    };

    return(
        <section className="auth">
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                <Block className>
                    <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input size="large"/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password size="large"/>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" size="large" htmlType="submit">
                            Войти в аккаунт
                            </Button>
                        </Form.Item>
                    </Form>
                </Block>
            </div>
        </section>
    );
};


export default Auth;