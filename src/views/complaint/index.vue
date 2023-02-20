// 投诉模块
<template>
  <div id>
    <el-table :data="tableData" border style="margin-top:20px">
      <el-table-column label="内容" prop="content"></el-table-column>
      <el-table-column label="创建时间" prop="createTime" width="170px"></el-table-column>
    </el-table>
  </div>
</template>

<script >
export default {
  name: "",
  data() {
    return {
      tableData: [
        {
          content: "mmm",
          createTime: "mm"
        }
      ]
    };
  },
  components: {},
  methods: {}
};
</script>

<style >
</style>
