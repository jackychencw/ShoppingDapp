import React from 'react';

class OrderPage extends React.Component {
    constructor(props) {
        super(props);
        this.data = require('../data.json')
        this.state = {
            orders: null
        }

    }

    componentDidMount() {
        this.getOrders().then(orders => {
            if (orders) {
                for (var i = 0; i < orders.length; i++) {
                    var order = orders[i]
                    var newItems = []
                    order.items.forEach(item => {
                        console.log(item)
                        var f;
                        var found = this.data.some(function (e, index) { f = index; return e.id.toString() === item.id; });
                        if (found) {
                            var newItem = this.data[f]
                            newItem["amount"] = item.amount
                            console.log(newItem)
                            newItems.push(newItem)
                        }
                    })
                    orders[i].items = newItems;
                }
                this.setState({orders: orders})
            }
        });


    }

    getOrders = async () => {
        if (this.props.contract) {
            // const order_count = this.props.contract.methods.order_count.call().call()
            // console.log(order_count)
            var orders = [];
            await this.props.contract.methods.order_count.call().call().then(async order_count => {
                for (var i = 0; i < order_count; i++) {
                    await this.props.contract.methods.getOrder(i).call().then(async order_res => {
                        if (order_res.account === this.props.account) {
                            var order = { "id": order_res.order_id, "total": order_res.total }
                            var items = [];
                            for (var j = 0; j < order_res.item_count; j++) {
                                await this.props.contract.methods.getItem(i, j).call().then(item_res => {
                                    var item = { "id": item_res }
                                    var f;
                                    var found = items.some(function (e, index) { f = index; return e.id === item.id; });

                                    if (!found) {
                                        item["amount"] = 1
                                        items.push(item)
                                    } else {
                                        items[f].amount += 1
                                    }
                                    order["items"] = items;

                                })
                            }
                            orders.push(order)

                        }
                    })
                }
            })
            return orders;
        }
    }


    render() {
        return (
            <div>hi</div>
        )
    }
}

export default OrderPage;