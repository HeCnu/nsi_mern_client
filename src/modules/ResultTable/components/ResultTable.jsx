import React, { Component } from 'react';
import { Layout, Input, Table, TreeSelect, Button, Modal} from "antd";
import { Link } from "react-router-dom";
import ModalWindow from "../../ModalWindow"

import data from "./objects.json";
import classes from "./classes1.json";

const { Content, Sider } = Layout;
const { Search } = Input;
const { confirm } = Modal;

let searchData = [];

const columns = [
    {
      title: "Наименование",
      dataIndex: "objectName",
      render: text => <a>{text}</a>
    },
    {
      title: "Базовая ЕИ",
      dataIndex: "basicMU"
    },
    {
      title: "Класс",
      dataIndex: "classID"
    }
];
  
  // rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    }
};

class ResultTable extends Component {

    onSelect = (selectedKeys, info) => {
        console.log("selected", selectedKeys, info);
    };
    
    state = {
        visible: false,
        value: undefined,
        key: undefined
    };
    
    onChange = (key, value) => {
        console.log(key);
        console.log(value);
        this.setState({
          value: value,
          key: key
        });
    };
    
    showModal = () => {
        this.setState({
          visible: true
        });
    };
    
    handleOk = e => {
        console.log("Инфо было записано!");
    
        let textReq = document.getElementById("textReq").value;
        console.log(textReq);
        this.setState({
          visible: false
        });
    };
    
    handleCancel = e => {
        console.log("Отмена");
        this.setState({
          visible: false
        });
    };
    
    constructor(props) {
        super(props);
        this.state = {
        hits: []
        };
    };

    render() {

        const { hits } = this.state;
        console.log(this.state.hits);

        function showConfirm(nameS, textS) {
            confirm({
                title: "Какую информацию Вы не можете найти?",
                content: <ModalWindow />,
                onOk() {
                console.log("Инфо было записано!");
                let textReq = document.getElementById("textReq").value;
                console.log(textReq);
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log("Oops errors!"));
                },
                onCancel() {}
            });
        }

        function ShowTable(props) {
            const length = props.length;
            if (length == 0) {
              return (
                <Table
                  rowSelection={rowSelection}
                  columns={columns}
                  dataSource={data}
                />
              );
            } else {
                return (
                    <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={searchData}
                    />
                );
            }
        }
        
        function ShowTableSearch(props, data1) {
            const value = props;
            searchData = [];
            data1.map(product => {
                var productNames = product.objectName.split(" ");
                var valueNames = value.split(" ");
                var count = 0;
                productNames.map(productName => {
                    valueNames.map(valueName => {
                        if (productName.toLowerCase().includes(valueName.toLowerCase())) {
                            count = count + 1;
                        }
                        //productName.toLowerCase().includes(valueName.toLowerCase()) ? count++ : null;
                    });
                });
                if (count == valueNames.length) {
                    searchData.push(product);
                }
                //count == valueNames.length ? searchData.push(product) : null;
            });
            return searchData;
        }

        function ShowTableCaregory(props, data1) {
            const classid = props;
            console.log(props);
            searchData = [];
            data1.map(product => {
                if (product.classID.includes(classid)) {
                    searchData.push(product);
                }
              //product.classID.includes(classid) ? searchData.push(product) : null;
            });
            console.log(searchData);
            return searchData;
          }

        return (
            <Layout>
                <Content
                    style={{
                        background: "#fff",
                        padding: 24,
                        margin: 0,
                        minHeight: 280
                    }}
                >
                    <Search
                        placeholder="Введите название ..."
                        onSearch={value => (
                            ShowTableSearch(value, data),
                            this.forceUpdate()
                        )}
                    />
                    <ShowTable length={searchData.length} />
                </Content>
                <Sider width={300} style={{ background: "#fff" }}>
                    <Content
                        style={{
                            background: "#fff",
                            paddingTop: 24,
                            margin: 0,
                            minHeight: 280
                        }}
                    >
                        <Layout>
                            <Link
                                onClick={showConfirm}
                                style={{
                                    padding: 20
                                }}
                                >
                                Не нашли нужную информацию?
                            </Link>
                            <Modal
                                title="Помогите найти для вас информацию"
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                                cancelText="Отменить"
                                okText="Отправить"
                            >
                            <ModalWindow />
                            </Modal>
                            <Content>
                            <TreeSelect
                                style={{ width: "100%" }}
                                value={this.state.value}
                                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                                treeData={classes}
                                placeholder="Выберите классификатор"
                                treeDefaultExpandAll
                                allowClear
                                onChange={this.onChange}
                            />
                            </Content>
                            <Button
                                type="primary"
                                onClick={() => (
                                    ShowTableCaregory(this.state.key, data), this.forceUpdate()
                                )}
                            >
                                Уточнить
                            </Button>
                        </Layout>
                    </Content>
                </Sider>
            </Layout>
        );
    }
}

export default ResultTable;