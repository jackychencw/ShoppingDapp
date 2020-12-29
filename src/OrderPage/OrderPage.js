import React from 'react';

import { List, Avatar, Card } from 'antd';

class OrderPage extends React.Component {
    render() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={this.props.orders}
                renderItem={item => (
                    <Card title={`Order Number: ${item.id}`} extra={`total: $${item.total}`} style={{ marginTop: 10, width: "80%" }}>
                        <List
                            dataSource={item.items}
                            renderItem={subitem => (
                                <List.Item key={subitem.id}>
                                    <List.Item.Meta
                                        style={{ "margin-left": 20, }}
                                        avatar={<Avatar src={subitem.picture} />}
                                        title={<div>{subitem.name}</div>}
                                        description={<div>amount: {subitem.amount}</div>}
                                    />
                                    <div style={{ width: 100, "margin-right": 20, }}>
                                        ${Math.round(subitem.price * subitem.amount, 5)}
                                    </div>
                                </List.Item>
                            )}
                        >
                        </List>
                    </Card>
                )}
            />
        )
    }
}

export default OrderPage;