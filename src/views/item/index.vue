// 项目管理
<template>
  <div id>
    <el-row>
      <el-col>
        <el-button
          type="primary"
          style="margin-left:900px;margin-top:20px"
          @click="setVisable(true)"
        >新增项目</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5" style="margin-left:30px;margin-top:20px">
        <el-input v-model="inputData.itemname" placeholder="请输入项目名"></el-input>
      </el-col>
      <el-col :span="5" style="margin-left:30px;margin-top:20px">
        <el-select v-model="inputData.bussinessid" placeholder="请选择商家"></el-select>
      </el-col>
      <el-col :span="5">
        <el-button type="primary" style="margin-left:30px;margin-top:20px">查询</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="margin-left:40px;margin-top:15px">
      <el-table-column label="项目名称" prop="itemname"></el-table-column>
      <el-table-column label="项目价格" prop="itemprice"></el-table-column>
      <el-table-column label="生效时间" prop="createtime"></el-table-column>
      <el-table-column label="失效时间" prop="endtime"></el-table-column>
      <el-table-column label="商家名称" prop="bussinessid"></el-table-column>
    </el-table>
    <el-dialog title="编辑项目" :visible="dialogVisible">
      <div>
        <el-form :model="ItemContent" :rules="rules">
          <el-form-item label="项目名称" prop="itemname">
            <el-input v-model="ItemContent.itemname"></el-input>
          </el-form-item>
          <el-form-item label="项目价格" prop="itemprice">
            <el-input v-model="ItemContent.itemprice"></el-input>
          </el-form-item>

          <el-form-item label="生效时间" prop="createtime">
            <el-date-picker v-model="ItemContent.createtime" type="date"></el-date-picker>
          </el-form-item>
          <el-form-item label="失效时间" prop="endtime">
            <el-date-picker v-model="ItemContent.endtime" type="date"></el-date-picker>
          </el-form-item>
          <el-form-item label="商家名称" prop="bussinessid">
            <el-select v-model="ItemContent.bussinessid"></el-select>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script >
export default {
  name: "",
  data() {
    return {
      dialogVisible: false,
      tableData: [],
      rules: {},
      inputData: {
        itemname: "",
        bussinessid: ""
      },
      ItemContent: {
        itemname: "",
        itemprice: "",
        createtime: "",
        endtime: "",
        bussinessid: ""
      }
    };
  },
  components: {},
  methods: {
    setVisable(flag) {
      this.dialogVisible = flag;
    },
    addConfirm() {
      this.dialogVisible = false;
    }
  }
};
</script>

<style >
</style>
