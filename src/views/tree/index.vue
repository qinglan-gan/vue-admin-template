// 车辆信息管理


<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-button
          type="primary"
          style="margin-left:900px;margin-top:20px"
          @click="setVisble(true)"
        >新增车辆</el-button>
      </el-col>
    </el-row>

    <el-form :model="formState" label-width="100px" style="margin-top:20px">
      <el-row>
        <el-col :span="7">
          <el-form-item label="车辆类型">
            <el-input v-model="formState.cartype" placeholder></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="车牌号">
            <el-input v-model="formState.carnumber" placeholder></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="车主">
            <el-input v-model="formState.userid" placeholder></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2" style="margin-left:20px">
          <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </el-form>

    <el-table :data="tableData" height="500" style="width: 80%;margin-left:50px;margin-top:10px">
      <el-table-column prop="cartype" label="车辆类型" width="180"></el-table-column>
      <el-table-column prop="carcolor" label="车辆颜色" width="180"></el-table-column>
      <el-table-column prop="carnumber" label="车牌号"></el-table-column>
      <el-table-column prop="cartag" label="品牌"></el-table-column>
      <el-table-column prop="userid" label="车主"></el-table-column>
    </el-table>

    <el-dialog title="编辑车辆信息" :visible="dialogVisiable">
      <div>
        <el-form :model="Content" :rules="rules">
          <el-row>
            <el-col :span="24">
              <el-form-item label="类型" prop="cartype">
                <el-select v-model="Content.cartype" placeholder="请选择车辆类型"></el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="车辆颜色" prop="carcolor">
                <el-input v-model="Content.carcolor" placeholder="请输入颜色"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="品牌" prop="cartag">
                <el-input v-model="Content.cartag" placeholder="请输入品牌"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="车牌号" prop="carnumber">
                <el-input v-model="Content.carnumber" placeholder="请输入车牌号"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="车主" prop="userid">
                <el-select v-model="Content.userid" placeholder="请输入车牌号"></el-select>
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
      dialogVisiable: false,
      formState: {
        cartype: "",
        userid: "",
        carnumber: ""
      },
      tableData: [],
      Content: {
        cartype: "",
        carcolor: "",
        cartag: "",
        carnumber: "",
        userid: ""
      },
      rules: {}
    };
  },
  methods: {
    setVisble(flag) {
      this.dialogVisiable = flag;
    },
    addConfirm() {
      this.dialogVisiable = false;
    }
  }
};
</script>

<style>
</style>