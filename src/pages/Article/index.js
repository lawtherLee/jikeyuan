import React, { Component } from "react";
import {
  Breadcrumb,
  Button,
  DatePicker,
  Radio,
  Divider,
  Form,
  Select,
} from "antd";
import styles from "./index.module.scss";
import { getAllChannelsAPI } from "../../api/channel";
import { Option } from "antd/es/mentions";

const { RangePicker } = DatePicker;

class Article extends Component {
  state = {
    channelList: [],
  };
  onFinish = (values) => {};

  getAllChannels = async () => {
    try {
      const res = await getAllChannelsAPI();
      console.log(res);
      const data = res.data.channels.map((item) => {
        return {
          value: item.id,
          label: item.name,
        };
      });
      this.setState({
        channelList: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  async componentDidMount() {
    await this.getAllChannels();
  }

  render() {
    return (
      <div className={styles.article}>
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => this.props.history.push("/home")}>
            首页
          </Breadcrumb.Item>
          <Breadcrumb.Item>文章管理</Breadcrumb.Item>
        </Breadcrumb>

        <Divider />

        <Form
          initialValues={{
            status: -1,
            channel: 0,
          }}
          name="basic"
          onFinish={this.onFinish}
        >
          <Form.Item name="status" label={"状态"}>
            <Radio.Group>
              <Radio value={-1}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
              <Radio value={3}>审核失败</Radio>
            </Radio.Group>{" "}
          </Form.Item>

          <Form.Item label={"频道"} name={"channel"}>
            <Select
              style={{
                width: 200,
              }}
              options={this.state.channelList}
            >
              {/*<Option></Option>*/}
            </Select>
          </Form.Item>
          <Form.Item label={"日期"}>
            <RangePicker />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              筛选
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Article;
