import React, { Component } from 'react';
import { PageHeader } from 'antd';
import { Link } from 'react-router-dom'

const IconLink = ({ src, text }) => (
    <Link
        style={{
            marginRight: 16,
            display: "flex",
            alignItems: "center"
        }}
    >
        <img
            style={{
                marginRight: 8,
                height: 30
            }}
            src={src}
            alt="Аватар"
        />
        {text}
    </Link>
);

class HeaderBlock extends Component {
    render() {
        return (
                <PageHeader
                    title="НСИ"
                    extra={[
                    <IconLink
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        text="Волкова Анна"
                    />
                    ]}
                />
        );
    }
}

export default HeaderBlock;