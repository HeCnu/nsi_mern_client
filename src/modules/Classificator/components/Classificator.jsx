import React, { Component } from 'react';
import { PageHeader } from 'antd';
import { Link } from 'react-router-dom'

class Classificator extends Component {

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

    render() {
        return (
            <div>
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
                    <ModalNewReq />
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
                icon="search"
                onClick={() => (
                    ShowTableCaregory(this.state.key, data), this.forceUpdate()
                )}
                >
                Уточнить
                </Button>
            </div>
        );
    }
}

export default Classificator;