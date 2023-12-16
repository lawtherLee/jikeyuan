import React, { Component } from "react";
import {
  Breadcrumb,
  Button,
  Divider,
  Form,
  Image,
  Input,
  Modal,
  Radio,
  Upload,
} from "antd";
import styles from "./index.module.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SelectChannel from "components/SelectChannel";
import { baseURL } from "../../utils/request";

class Publish extends Component {
  state = {
    fileList: [],
    type: 1,
    isModalOpen: false,
    previewImg: "",
  };

  handleOk = () => {
    this.handleCancel();
  };
  handleCancel = () => {
    this.setState({
      isModalOpen: false,
    });
  };
  onPreview = (val) => {
    console.log(val);
    this.setState({
      isModalOpen: true,
      previewImg: val.response.data.url,
    });
  };

  onFileChange = (file) => {
    // console.log(file);
    // always setState
    this.setState({ fileList: [...file.fileList] });
  };

  // 封面数量变化
  coverChange = (e) => {
    this.setState({
      type: e.target.value,
    });
  };

  render() {
    const { fileList, type, previewImg } = this.state;
    return (
      <div className={styles.publish}>
        {/*面包屑*/}
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => this.props.history.push("/home")}>
            首页
          </Breadcrumb.Item>
          <Breadcrumb.Item>文章管理</Breadcrumb.Item>
        </Breadcrumb>
        <Divider />

        {/*发布文章*/}
        <Form name="basic" labelCol={{ span: 4 }} wrapperCol={{ span: 10 }}>
          <Form.Item
            label="标题"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="频道">
            <SelectChannel />
          </Form.Item>

          <Form.Item initialValue={1} name={"type"} label="封面">
            <Radio.Group onChange={this.coverChange}>
              <Radio value={1}>单图</Radio>
              <Radio value={3}>三图</Radio>
              <Radio value={0}>无图</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Upload
              onChange={this.onFileChange}
              fileList={fileList}
              accept={".png,.jpg,.gif"}
              name={"image"}
              action={`${baseURL}v1_0/upload`}
              listType="picture-card"
              maxCount={type}
              onPreview={this.onPreview}
            >
              上传
            </Upload>
          </Form.Item>

          <Form.Item label={"内容"}>
            <ReactQuill
              placeholder={"请输入内容"}
              style={{ width: 600 }}
            ></ReactQuill>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        <Modal
          footer={null}
          title="预览"
          open={this.state.isModalOpen}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Image src={previewImg} />
        </Modal>
      </div>
    );
  }
}

export default Publish;
