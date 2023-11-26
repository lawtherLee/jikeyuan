import React, { Component } from "react";

import styles from "./index.module.scss";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  LoginOutlined,
  HomeOutlined,
  FormOutlined,
  CopyOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const menuIcon = {
  "icon-data": <HomeOutlined />,
  "icon-content": <CopyOutlined />,
  "icon-publish": <FormOutlined />,
};

class LayoutIndex extends Component {
  state = {
    menus: [],
  };

  componentDidMount() {
    this.getMenus();
  }

  getMenus() {
    const menus = [
      { id: 1, name: "数据概览", icon: "icon-data" },
      { id: 2, name: "内容管理", icon: "icon-content" },
      { id: 3, name: "发布文章", icon: "icon-publish" },
    ];
    this.setState({
      menus: menus,
    });
  }

  render() {
    const { menus } = this.state;
    return (
      <div className={styles.layout}>
        <Layout>
          <Header style={{ padding: 0 }} className="header">
            <div className="logo" />
            <div className={"right"}>
              <span style={{ margin: "0 10px" }}>13111111111</span>
              <div>
                <LoginOutlined />
                <span>退出</span>
              </div>
            </div>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                theme={"dark"}
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                {menus.map((item) => (
                  <Menu.Item key={item.id} icon={menuIcon[item.icon]}>
                    {item.name}
                  </Menu.Item>
                ))}
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default LayoutIndex;
