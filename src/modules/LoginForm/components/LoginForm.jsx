import React, { Component } from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom'

import { Block, Button } from 'components';

class LoginForm extends Component {

    render() {

        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };

        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };

        const onFinish = values => {
            console.log('Success:', values);
        };
        
        const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
        };

        return (
            <div>
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                <Block>
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
                            rules={[{ required: true, message: 'Пожалуйста введите имя пользователя!' }]}
                        >
                            <Input size="large"/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
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
        );
    }
}

export default LoginForm;