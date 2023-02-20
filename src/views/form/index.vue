//商家管理
<template>
  <div id>
    <el-row>
      <el-col>
        <el-button
          type="primary"
          style="margin-left:900px;margin-top:20px"
          @click="setVisable(true)"
        >新增商家</el-button>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px;margin-left:40px">
      <el-col :span="6">
        <el-input v-model="businessname" placeholder="商家名称"></el-input>
      </el-col>
      <el-col :span="6" style="margin-left:20px">
        <el-button type="primary">查询</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="margin-left:40px;margin-top:20px">
      <el-table-column prop="businessname" label="商家" width="180"></el-table-column>
      <el-table-column prop="telephone" label="联系电话" width="180"></el-table-column>
    </el-table>

    <el-dialog title="编辑商家" :visible="dialogVisible">
      <div>
        <el-form :model="BusinessContent" :rules="rules">
          <el-form-item label="商家名称" prop="businessname">
            <el-input v-model="BusinessContent.businessname"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="telephone">
            <el-input v-model="BusinessContent.telephone"></el-input>
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
      businessname: "",
      tableData: [],
      BusinessContent: {
        businessname: "",
        telephone: ""
      },
      rules: {}
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
