<template>
  <div id>
    <el-table :data="tableData" style="margin-top:20px;margin-left:50px">
      <el-table-column label="报修时间" prop="time"></el-table-column>
      <el-table-column label="损坏类型" prop="type"></el-table-column>
      <el-table-column label="内容描述" prop="content"></el-table-column>
      <el-table-column label="图片详情" prop="image"></el-table-column>
    </el-table>
  </div>
</template>

<script >
export default {
  name: "",
  data() {
    return {
      tableData: []
    };
  },
  components: {},
  methods: {}
};
</script>

<style >
</style>
