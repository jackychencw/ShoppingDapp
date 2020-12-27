import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, MenuOutlined } from '@ant-design/icons';
import React from "react";
import './HomePageLayout.css';
import 'antd/dist/antd.css';
import logo from './images/logo.png';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


class HomePageLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <img className="logo" src={logo} alt="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <SubMenu key="Categories" icon={<MenuOutlined />} title="Categories">
              {/* Appliances */}
              <SubMenu key="appliances" title="Appliances">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </SubMenu>
              {/* Computers, Tablets & Accessories */}
              <SubMenu key="cta" title="Computers, Tablets & Accessories">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </SubMenu>
              {/* Cell Phones */}
              <SubMenu key="cellphones" title="Cell Phones">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </SubMenu>
              {/* Cameras, Camcorders & Drones */}
              <SubMenu key="ccd" title="Cameras, Camcorders & Drones">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </SubMenu>
              {/* Musical Instruments */}
              <SubMenu key="mi" title="Musical Instruments">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </SubMenu>
              {/* TV & Home Theatre */}
              <SubMenu key="tht" title="TV & Home Theatre">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </SubMenu>
              {/* Video Games & Movies */}
              <SubMenu key="vgm" title="Video Games & Movies">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </SubMenu>
              {/* Wearable Tech, Health & Fitness */}
              <SubMenu key="wthf" title="Wearable Tech, Health & Fitness">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </SubMenu>
            </SubMenu>
            {/* <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item> */}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}

export default HomePageLayout;