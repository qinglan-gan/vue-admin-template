<template>
  <div id>
    <el-button
      type="primary"
      icon="el-icon-edit"
      style="margin-left:900px;margin-top:20px"
      @click="addVisable()"
    >发布通知</el-button>
    <el-form :model="form" ref="form" label-width="120px" style="margin-top:20px">
      <el-row>
        <el-col :span="7">
          <el-form-item label="发布人">
            <el-select v-model="form.userid" placeholder="请选择发布人">
              <el-option :label="item.username" :value="item.id" v-for="item in PublisherList" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="通知类型">
            <el-select v-model="form.noticetypeid" placeholder="请选择消息类型">
              <el-option
                :label="item.noticetype"
                :value="item.noticetypeid"
                v-for="item in NoticeType"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-button type="primary" @click="getNoticeCondition">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="tableData" style="width: 90%;margin-left:50px">
      >
      <el-table-column prop="title" label="通知标题"></el-table-column>
      <el-table-column prop="content" label="通知内容"></el-table-column>
      <el-table-column prop="noticetypeid" label="通知类型" width="180"></el-table-column>
      <el-table-column prop="createtime" label="发布时间" width="180"></el-table-column>
      <el-table-column prop="userid" label="发布人"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      style="margin-left:600px;margin-top:10px"
    ></el-pagination>
    <el-dialog title="编辑通知内容" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <div>
        <el-form :model="noticeContent" :rules="rules">
          <el-row>
            <el-col :span="24">
              <el-form-item label="发布人" prop="userid">
                <el-select v-model="noticeContent.userid" placeholder="请选择发布人">
                  <el-option :label="item.username" :value="item.id" v-for="item in PublisherList" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="通知类型" prop="noticetypeid">
                <el-select v-model="noticeContent.noticetypeid" placeholder="请选择通知类型">
                  <el-option
                    :label="item.noticetype"
                    :value="item.noticetypeid"
                    v-for="item in NoticeType"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="标题" prop="title">
                <el-input v-model="noticeContent.title" placeholder="请输入通知标题"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="通知内容" prop="content">
                <el-input type="textarea" v-model="noticeContent.content" placeholder="请输入通知内容"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addNoticeConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script >
import {
  getallNotice,
  deleNotice,
  getType,
  insertnotice,
  getusertype
} from "@/api/notice.js";
import { title } from "../../settings";
export default {
  name: "",
  data() {
    return {
      PublisherList: [],
      NoticeType: [],
      form: {},
      tableData: [],
      dialogVisible: false,
      noticeContent: {
        noticetypeid: "",
        title: "",
        content: "",
        userid: ""
      },
      rules: {
        userid: [{ required: true, message: "请选择发布人", trigger: "blur" }],
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        content: [{ required: true, message: "请输入内容", trigger: "blur" }],
        noticetypeid: [
          { required: true, message: "请选择通知类型", trigger: "blur" }
        ]
      }
    };
  },
  components: {},
  methods: {
    // 获得所有消息
    getData() {
      getallNotice().then(response => {
        this.tableData = response.result;
      });
    },
    //  根据条件查询消息
    getNoticeCondition() {},
    // 删除消息
    handleDelete(index, row) {
      deleNotice(row.id).then(res => {
        if (res) {
          this.$message.success("删除成功");
        }
      });
    },
    addVisable() {
      this.dialogVisible = true;
    },
    // 获得消息类型
    getNoticeType() {
      getType().then(res => {
        this.NoticeType = res.result;
      });
    },
    // 添加通知
    addNoticeConfirm() {
      this.dialogVisible = false;
      let data = {
        noticetypeid: this.noticeContent.noticetypeid,
        title: this.noticeContent.title,
        content: this.noticeContent.content,
        userid: this.noticeContent.userid
      };
      insertnotice(data).then(res => {
        console.log(res);
      });
    },
    // 获得发布人
    getUserList() {
      getusertype(1).then(res => {
        if (res.success) {
          this.PublisherList = res.result;
        }
      });
    },
    handleClose() {
      this.dialogVisible = false;
    }
  },
  created() {
    this.getData();
    this.getNoticeType();
    this.getUserList();
  }
};
</script>

<style >
</style>
