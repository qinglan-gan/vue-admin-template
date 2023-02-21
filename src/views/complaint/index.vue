// 投诉模块
<template>
  <div id>
    <el-table :data="tableData" border style="margin-top:20px">
      <el-table-column label="内容" prop="content"></el-table-column>
      <el-table-column label="创建时间" prop="creatTime" width="170px"></el-table-column>
    </el-table>
    <el-pagination
      style="margin-top:15px;margin-left:700px"
      background
      layout="total,prev, pager, next"
      :total="total"
      :current-page="currentPage"
      :page-size="pageSize"
      @next-click="nextpage"
      @prev-click="prePage"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script >
import { getAllComp } from "@/api/complaint.js";
export default {
  name: "",
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 10, //    每页的数据
      total: 100
    };
  },
  components: {},
  methods: {
    // 上一页
    prePage() {
      if (this.currentPage >= 2) {
        this.currentPage = this.currentPage - 1;
        this.handleCurrentChange(this.currentPage);
      }
    },
    // 下一页
    nextpage() {
      this.currentPage = this.currentPage + 1;
      this.handleCurrentChange(this.currentPage);
    },
    handleCurrentChange(pageNum) {
      getAllComp(pageNum, this.pageSize).then(res => {
        this.total = res.total;
        this.tableData = res.data;
      });
    }
  },
  created() {
    this.handleCurrentChange(1);
  }
};
</script>

<style >
</style>
