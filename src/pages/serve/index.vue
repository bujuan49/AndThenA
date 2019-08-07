<template>
  <div class="serveWrap">
    <NiForm></NiForm>
  </div>
</template>

<script>
import NiForm from "@/components/NiForm";
export default {
  data() {
    return {};
  },
  //传入组件
  components: {
    NiForm
  },

  methods: {},
  onLoad() {
    wx.setNavigationBarTitle({
      title: "服务通知"
    });
  }
};
</script>

<style scoped lang="scss">
.serveWrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f0eeee;
}
</style>
