// 车位管理

<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-button
          type="primary"
          style="margin-left:900px;margin-top:20px"
          @click="setVisble(true)"
        >新增车位</el-button>
      </el-col>
    </el-row>

    <el-form :model="formState" label-width="100px" style="margin-top:20px">
      <el-row>
        <el-col :span="7">
          <el-form-item label="车位编号">
            <el-input v-model="formState.parkid" placeholder></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="车位状态">
            <el-input v-model="formState.status" placeholder></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="车位归属人">
            <el-input v-model="formState.userid" placeholder></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2" style="margin-left:20px">
          <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </el-form>

    <el-table :data="tableData" height="500" style="width: 80%;margin-left:50px;margin-top:10px">
      <el-table-column prop="parkid" label="车位编号" width="180"></el-table-column>
      <el-table-column prop="parklocation" label="车位位置" width="180"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="userid" label="车位归属人"></el-table-column>
    </el-table>

    <el-dialog title="编辑车位信息" :visible="dialogVisiable">
      <div>
        <el-form :model="Content" :rules="rules">
          <el-row>
            <el-col :span="24">
              <el-form-item label="编号" prop="parkid">
                <el-input v-model="Content.parkid" placeholder="请输入编号"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="位置" prop="parklocation">
                <el-input v-model="Content.parklocation" placeholder="请输入位置"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="状态" prop="cartag">
                <el-select v-model="Content.status" placeholder="请选择状态">
                  <el-option label="已售出" :value="1"></el-option>
                  <el-option label="未售出" :value="0"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="归属人" prop="userid">
                <el-input v-model="Content.userid" placeholder="请输入车牌号"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisiable = false">取 消</el-button>
        <el-button type="primary" @click="addConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formState: {
        parkid: "",
        status: "",
        userid: ""
      },
      tableData: [],
      dialogVisiable: false,
      rules: {},
      Content: {
        parkid: "",
        status: "",
        parklocation: "",
        userid: ""
      }
    };
  },
  methods: {
    setVisble(flag) {
      this.dialogVisiable = flag;
    },
    addConfirm() {
      this.setVisble(false);
    }
  }
};
</script>

<style>
</style>