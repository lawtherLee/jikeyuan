import React, { Component } from "react";
import { Breadcrumb } from "antd";
import styles from "./index.module.scss";

class Article extends Component {
  render() {
    return (
      <div className={styles.article}>
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => this.props.history.push("/home")}>
            首页
          </Breadcrumb.Item>
          <Breadcrumb.Item>文章管理</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default Article;
