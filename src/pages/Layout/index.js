import React, { Component } from "react";

import styles from "./index.module.scss";
import { Layout, Menu, message, Popconfirm } from "antd";
import {
  LoginOutlined,
  HomeOutlined,
  FormOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import { Link, Route } from "react-router-dom";
import Home from "../Home";
import Article from "../Article";
import Publish from "../Publish";
import { removeToken } from "../../utils/storage";

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
      { id: 1, name: "数据概览", path: "/home", icon: "icon-data" },
      {
        id: 2,
        name: "内容管理",
        path: "/home/article",
        icon: "icon-content",
      },
      {
        id: 3,
        name: "发布文章",
        path: "/home/publish",
        icon: "icon-publish",
      },
    ];
    this.setState({
      menus: menus,
    });
  }

  logout = async () => {
    console.log(111);
    removeToken();
    await this.props.history.push("/login");
    message.success("退出成功");
  };

  render() {
    const { menus } = this.state;
    return (
      <div className={styles.layout}>
        <Layout>
          <Header style={{ padding: 0 }} className="header">
            <div className="logo" />
            <div className={"right"}>
              <span style={{ margin: "0 10px" }}>13111111111</span>
              <Popconfirm
                onConfirm={this.logout}
                title="是否退出?"
                okText="Yes"
                cancelText="No"
              >
                <div style={{ cursor: "pointer" }}>
                  <LoginOutlined />
                  <span>退出</span>
                </div>
              </Popconfirm>
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
                    <Link to={item.path}>{item.name}</Link>
                  </Menu.Item>
                ))}
              </Menu>
            </Sider>
            <Layout style={{ padding: "20px" }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Route exact path={"/home"} component={Home}></Route>
                <Route exact path={"/home/article"} component={Article}></Route>
                <Route exact path={"/home/publish"} component={Publish}></Route>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default LayoutIndex;
