/*业主*/ 
<template>
  <div id>
    <el-row>
      <el-col :span="12">
        <el-button type="primary" style="margin-left:940px;margin-top:20px" @click="edituser()">新增业主</el-button>
      </el-col>
    </el-row>
    <el-form :model="user" ref="user" label-width="120px" style="margin-top:20px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="业主姓名">
            <el-input v-model="user.username" placeholder="请输入业主姓名"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="身份证号">
            <el-input v-model="user.identitynumber" placeholder="请输入身份证号"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="3">
          <el-form-item>
            <el-button type="primary" @click="getUerByCondition">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="tableData" style="width: 90%;margin-left:50px">
      >
      <el-table-column prop="username" label="业主姓名"></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column prop="phone" label="电话" width="180"></el-table-column>
      <el-table-column prop="avatar" label="头像" width="180"></el-table-column>
      <el-table-column prop="identitynumber" label="身份证号"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" type="warning" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑业主信息" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <div>
        <el-form :model="Content" :rules="rules">
          <el-row>
            <el-col :span="12">
              <el-form-item label="业主姓名" prop="username">
                <el-input v-model="Content.username" placeholder="请输入业主姓名"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="密码" prop="password">
                <el-input v-model="Content.password" placeholder="请输入密码" type="password"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="手机号" prop="phone">
                <el-input v-model="Content.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="头像" prop="avatar">
                <el-input v-model="Content.avatar" placeholder="请输入头像"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="身份证号" prop="identitynumber">
                <el-input v-model="Content.identitynumber" placeholder="请输入身份证号"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script >
import { getUser, deleuser, addcommonuser } from "@/api/user";
export default {
  name: "",
  data() {
    return {
      dialogVisible: false,
      user: {
        username: "",
        identitynumber: ""
      },

      Content: {
        username: "",
        password: "",
        phone: "",
        avatar: "",
        identitynumber: ""
      },
      tableData: []
    };
  },
  components: {},
  methods: {
    // 获得所有普通用户
    getData() {
      getUser(0).then(res => {
        console.log("res", res);
        if (res.success) {
          this.tableData = res.result;
        }
      });
    },
    // 删除用户
    handleDelete(index, row) {
      console.log("+++", index, row);
      deleuser(row.id).then(res => {
        if (res) {
          this.$message.success("删除成功");
        }
      });
    },
    // 关闭弹框
    handleClose() {
      this.dialogVisible = false;
    },
    // 新增业主按钮回调
    edituser() {
      this.dialogVisible = true;
    },
    // 弹框确认按钮回调
    confirmDialog() {
      let param = {
        username: this.Content.username,
        password: this.Content.password,
        phone: this.Content.phone,
        avatar: this.Content.avatar,
        identitynumber: this.Content.identitynumber
      };
      addcommonuser(param).then(res => {
        console.log("新增用户");
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style >
</style>
