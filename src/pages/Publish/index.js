import React, { Component, createRef } from "react";
import {
  Breadcrumb,
  Button,
  Divider,
  Form,
  Image,
  Input,
  message,
  Modal,
  Radio,
  Upload,
} from "antd";
import styles from "./index.module.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SelectChannel from "components/SelectChannel";
import { baseURL } from "../../utils/request";
import {
  editArticleAPI,
  getArticleDetailAPI,
  publicArticleAPI,
} from "../../api/article";

class Publish extends Component {
  constructor() {
    super();
    this.formRef = createRef();
  }

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
    // always setState
    this.setState({ fileList: [...file.fileList] });
  };

  // 封面数量变化
  coverChange = (e) => {
    this.setState({
      type: e.target.value,
    });
  };

  // 提交
  onSubmit = async (values) => {
    await this.onPublish(values);
  };

  // 抽离的公共提交方法
  onPublish = async ({ content, channel_id, type, title, draft }) => {
    if (this.state.type !== this.state.fileList.length)
      return message.error("图片上传数量不对");
    const params = {
      content,
      channel_id,
      title,
      cover: {
        type,
        images: this.state.fileList,
      },
      draft: !!draft,
    };
    try {
      if (this.props.match.params.id) {
        await editArticleAPI({ ...params, id: this.props.match.params.id });
        message.success("编辑成功");
      } else {
        const res = await publicArticleAPI(params);
        message.success(res.message);
      }
    } catch (err) {
      message.error("发布失败");
    } finally {
      this.props.history.push("/home/article");
    }
  };

  // 存草稿
  saveArticle = async () => {
    try {
      const values = await this.formRef.current.validateFields();
      values.draft = true;
      await this.onPublish(values);
    } catch (err) {
      message.error("信息请补全");
    }
  };

  // 配置编辑回显
  async componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      const res = await getArticleDetailAPI(this.props.match.params.id);
      console.log(res.data);
      // 组件回显的方法
      this.formRef.current.setFieldsValue({
        ...res.data,
        type: res.data.cover.type,
      });
      this.setState({
        type: res.data.cover.type,
        // fileList: res.data.cover.images,
      });
    }
  }

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
        <Form
          ref={this.formRef}
          onFinish={this.onSubmit}
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 10 }}
          initialValues={{
            type: type,
          }}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[
              {
                required: true,
                message: "请输入标题",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="频道"
            name={"channel_id"}
            rules={[
              {
                required: true,
                message: "请选择频道",
              },
            ]}
          >
            <SelectChannel />
          </Form.Item>

          <Form.Item name={"type"} label="封面">
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

          <Form.Item
            label={"内容"}
            name={"content"}
            rules={[
              {
                required: true,
                message: "请输入内容",
              },
            ]}
          >
            <ReactQuill
              placeholder={"请输入内容"}
              style={{ width: 600 }}
            ></ReactQuill>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              {this.props.match.params.id ? "修改文章" : "发布文章"}
            </Button>
            <Button onClick={this.saveArticle}>存为草稿</Button>
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
