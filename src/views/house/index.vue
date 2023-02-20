<template>
  <div id>
    <!-- 拥有
  查询，
  添加，
  修改
  查看业主信息
    -->

    <el-row>
      <el-col :span="3">
        <el-button
          type="primary"
          style="margin-left:900px;margin-top:20px"
          @click="setVisable(1)"
        >新增house</el-button>
      </el-col>
    </el-row>
    <el-form :model="formState" :inline="true" style="margin-top:20px;margin-left:20px">
      <el-row>
        <el-col :span="6">
          <el-form-item label="房间号">
            <el-input v-model="formState.housenumber"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="楼栋">
            <el-select v-model="formState.buildid"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="状态">
            <el-select v-model="formState.status"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-button type="primary">查询</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="tableData">
      <el-table-column label="房间号" prop="housenumber"></el-table-column>
      <el-table-column label="占地面积" prop="area"></el-table-column>
      <el-table-column label="状态" prop="status"></el-table-column>
      <el-table-column label="所属栋" prop="buildid"></el-table-column>
      <el-table-column label="所属单元" prop="unitid"></el-table-column>
      <el-table-column label="业主" prop="userid"></el-table-column>
    </el-table>
    <el-dialog title="编辑房屋信息" :visible="dialogVisible">
      <el-form :model="EditContent">
        <el-form-item label="房间号">
          <el-input v-model="EditContent.housenumber"></el-input>
        </el-form-item>
        <el-form-item label="占地面积">
          <el-input-number v-model="EditContent.area"></el-input-number>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="EditContent.status"></el-select>
        </el-form-item>
        <el-form-item label="所属栋">
          <el-select v-model="EditContent.buildid"></el-select>
        </el-form-item>
        <el-form-item label="所属单元">
          <el-select v-model="EditContent.unitid"></el-select>
        </el-form-item>
        <el-form-item label="业主">
          <el-select v-model="EditContent.userid"></el-select>
        </el-form-item>
      </el-form>
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
      formState: {
        housenumber: "",
        buildid: "",
        status: ""
      },
      tableData: [],
      dialogVisible: false,
      EditContent: {
        housenumber: "",
        area: "",
        status: "",
        buildid: "",
        unitid: "",
        userid: ""
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
