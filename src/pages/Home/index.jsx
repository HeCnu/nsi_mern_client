import React, { Component } from 'react';
import { Layout, Input, Button, Table, TreeSelect, Modal } from "antd";
import { Link } from "react-router-dom";

import { HeaderBlock } from 'modules';

import "./Home.scss";
import { ResultTable } from '../../modules';

const { Header} = Layout;


class Home extends Component {

    render() {

        return (
            <section className="home">
                <Layout>
                    <Header className="header" style={{ background: "#555" }}>
                        <HeaderBlock />
                    </Header>
                    <ResultTable/>
                </Layout>
            </section>
        );
    }
};

export default Home;