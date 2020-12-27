import { Layout, Menu, Affix, Button, Badge, Dropdown, Table, List, Avatar, InputNumber } from 'antd';
import { MenuOutlined, ShoppingCartOutlined, MinusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import './HomePageLayout.css';
import 'antd/dist/antd.css';
import logo from './images/logo.png';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AirPurifierPage from '../ItemPage/Appliances/AirPurifiersPage/index.js';

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

class HomePageLayout extends React.Component {
  itemCount = +localStorage.getItem("itemCount") || 0;
  itemInCart = JSON.parse(localStorage.getItem("itemInCart") || "{}");
  total = +localStorage.getItem("total") || 0

  state = { itemCount: this.itemCount, itemInCart: this.itemInCart, total: this.total }

  updateTotal = (itemInCart) => {
    var total = 0
    itemInCart.forEach(item => {
      total += item.price * item.amount
    })
    localStorage.setItem("total", total);
    this.setState({ total: total })
  }

  handleAddItem = (newItemCount, newItemInCart) => {
    this.setState({ itemCount: newItemCount, itemInCart: newItemInCart });
    this.updateTotal(newItemInCart)
  }

  remove = (item) => {
    const itemCount = +localStorage.getItem("itemCount") || 0;
    var itemInCart = JSON.parse(localStorage.getItem("itemInCart") || "[]");


    const itemIndex = itemInCart.findIndex(function (e) {
      return e.id === item.id
    })

    if (itemIndex >= 0) {
      var newItemCount = itemCount - item.amount
      itemInCart.splice(itemIndex, 1)
      localStorage.setItem("itemCount", newItemCount);
      localStorage.setItem("itemInCart", JSON.stringify(itemInCart));
      this.setState({ itemCount: newItemCount, itemInCart: itemInCart });
      this.updateTotal(itemInCart)
    }

    
  }

  onChange(value, item) {
    if (value == 0) {
      this.remove(item)
    } else {
      const itemCount = +localStorage.getItem("itemCount") || 0;
      var itemInCart = JSON.parse(localStorage.getItem("itemInCart") || "[]");

      const itemIndex = itemInCart.findIndex(function (e) {
        return e.id === item.id
      })

      if (itemIndex >= 0) {
        var newItemCount = itemCount + value - item.amount
        itemInCart[itemIndex]["amount"] = value
        this.updateTotal(itemInCart)
        localStorage.setItem("itemCount", newItemCount);
        localStorage.setItem("itemInCart", JSON.stringify(itemInCart));
        this.setState({ itemCount: newItemCount, itemInCart: itemInCart });
      }
    }

    
  }

  render() {
    return (
      <Layout>
        <Router>
          <Header className="header">
            <img className="logo" src={logo} alt="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <SubMenu key="Categories" icon={<MenuOutlined />} title="Categories">
                {/* Appliances */}
                <SubMenu key="appliances" title="Appliances">
                  <Menu.Item key="rf">Refrigerators & Freezers</Menu.Item>
                  <Menu.Item key="cem">Coffee & Espresso Makers</Menu.Item>
                  <Menu.Item key="ap">
                    <Link to="air-purifiers">Air Purifiers</Link>
                  </Menu.Item>
                </SubMenu>
                {/* Computers, Tablets & Accessories */}
                <SubMenu key="cta" title="Computers, Tablets & Accessories">
                  <Menu.Item key="td">Laptops and Desktops</Menu.Item>
                  <Menu.Item key="tie">Tablets, iPads & eReaders</Menu.Item>
                </SubMenu>
                {/* Cell Phones */}
                <SubMenu key="cellphones" title="Cell Phones">
                  <Menu.Item key="iphones">iPhones</Menu.Item>
                  <Menu.Item key="sp">Samsung Phones</Menu.Item>
                  <Menu.Item key="gp">Google Phones</Menu.Item>
                </SubMenu>
              </SubMenu>
              <Menu.Item key="2" style={{ float: 'right' }} icon={<ShoppingCartOutlined />}></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Affix style={{ position: 'absolute', bottom: 45, right: 45 }}>
              <Badge count={this.state.itemCount}>
                <Dropdown style={{ width: 120 }} overlay={
                  <div>
                  <List
                    itemLayout="horizontal"
                    dataSource={this.state.itemInCart}
                    renderItem={item => (
                      <List.Item
                        actions={[<CloseCircleOutlined onClick={() => this.remove(item)} />]}
                      >
                        <List.Item.Meta
                          avatar={<Avatar src={item.picture} />}
                          title={<a href="https://ant.design">{item.name}</a>}
                          // description={"amount:" + item.amount + " price: $" + Math.round(item.price * item.amount, 4)}
                          description={<InputNumber defaultValue={item.amount} onChange={(value) => this.onChange(value, item)} />}
                        />
                        <div>Price: {item.price * item.amount}</div>
                      </List.Item>
                    )}
                  />
                  <div style={{ float: 'right' }}>total: ${this.state.total}</div>
                  </div>
                  } placement="topRight">

                  <div style={{ width: 420 }}>
                    <Button style={{ float: 'right' }} size="large" icon={<ShoppingCartOutlined />} type="primary" >
                      Shopping Cart
                      </Button>
                  </div>
                </Dropdown>
              </Badge>
            </Affix>
            <Route path="/air-purifiers"><AirPurifierPage onAddItem={this.handleAddItem}></AirPurifierPage></Route>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ethershop</Footer>
        </Router>
      </Layout >
    )
  }
}

export default HomePageLayout;