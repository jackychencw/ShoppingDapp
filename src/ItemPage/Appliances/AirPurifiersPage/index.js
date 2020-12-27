import { Card, List } from 'antd';
import { Breadcrumb } from 'antd';
import React from 'react';
import './index.css';
import { StarOutlined, PlusCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;

class AirPurifiersPage extends React.Component {
    data = require('./data.json')

    add(item) {
        const itemCount = +localStorage.getItem("itemCount") || 0;
        var newItemCount = itemCount + 1
        var itemInCart = JSON.parse(localStorage.getItem("itemInCart") || "[]");
        const itemIndex = itemInCart.findIndex(function(e) {
            return e.id === item.id
        })

        if (itemIndex >= 0){
            itemInCart[itemIndex].amount += 1
        } else {
            item["amount"] = 1
            itemInCart.push(item)
        }

        localStorage.setItem("itemCount", newItemCount);
        localStorage.setItem("itemInCart", JSON.stringify(itemInCart))

        this.props.onAddItem(newItemCount, itemInCart);


        // localStorage.setItem("itemCount", 0);
        // localStorage.setItem("itemInCart", JSON.stringify([]))
    }

    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Appliances</Breadcrumb.Item>
                    <Breadcrumb.Item>Air Purifiers</Breadcrumb.Item>
                </Breadcrumb>
                <List
                    grid={{
                        gutter: 16,
                        column: 8
                    }}
                    dataSource={this.data}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                size="small"
                                cover={<img alt={item.name} src={item.picture} />}
                                actions={[
                                    <StarOutlined />,
                                    <div />,
                                    <PlusCircleOutlined onClick={() => this.add(item)} />
                                ]}>
                                <Meta

                                    title={item.name}
                                    description={<div class="description">{"$" + item.price}</div>}
                                />
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default AirPurifiersPage;