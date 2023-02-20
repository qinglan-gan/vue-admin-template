// 动态管理
<template>
  <div id>
    <el-row>
      <el-col :span="24">
        <el-button
          type="primary"
          style="margin-left:870px;margin-top:20px"
          @click="setVisible(1)"
        >新增产品</el-button>
      </el-col>
    </el-row>

    <el-form :model="form" ref="form" label-width="120px" style="margin-top:20px">
      <el-row>
        <el-col :span="7">
          <el-form-item label="产品类型">
            <el-select v-model="form.typeid" placeholder="请选择产品类型"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="产品状态">
            <el-select v-model="form.status" placeholder="请选择产品状态"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-table :data="tableData" style="margin-top:30px">
      <el-table-column label="产品编号"></el-table-column>
      <el-table-column label="购入时间"></el-table-column>
      <el-table-column label="使用时间"></el-table-column>
      <el-table-column label="报废时间"></el-table-column>
      <el-table-column label="单价"></el-table-column>
      <el-table-column label="状态"></el-table-column>
      <el-table-column label="位置"></el-table-column>
      <el-table-column label="类型"></el-table-column>
    </el-table>
    <el-dialog title="编辑动产信息" :visible="dialogVisiable">
      <el-form :model="EditContent">
        <el-form-item label="产品编号">
          <el-input v-model="EditContent.productId" placeholder="请输入产品编号"></el-input>
        </el-form-item>
        <el-form-item label="购入时间">
          <el-date-picker v-model="EditContent.purchasetime" type="date"></el-date-picker>
        </el-form-item>
        <el-form-item label="使用时间">
          <el-date-picker v-model="EditContent.usetime" type="date"></el-date-picker>
        </el-form-item>
        <el-form-item label="报废时间">
          <el-date-picker v-model="EditContent.scraptime" type="date"></el-date-picker>
        </el-form-item>
        <el-form-item label="单价">
          <el-input-number v-model="EditContent.price"></el-input-number>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="EditContent.status" placeholder></el-select>
        </el-form-item>
        <el-form-item label="位置">
          <el-input v-model="EditContent.location" placeholder></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="EditContent.typeid" placeholder></el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisiable= false">取 消</el-button>
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
      form: {
        typeid: "",
        status: ""
      },
      tableData: [],
      dialogVisiable: false,
      EditContent: {
        productId: "",
        purchasetime: "",
        usetime: "",
        scraptime: "",
        price: "",
        status: "",
        location: "",
        typeid: ""
      }
    };
  },
  components: {},
  methods: {
    setVisible(flag) {
      this.dialogVisiable = flag;
    },
    addConfirm() {
      this.dialogVisiable = false;
    }
  }
};
</script>

<style >
</style>
