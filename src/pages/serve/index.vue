<template>
  <div class="serveWrap">
    <SeverBox></SeverBox>
  </div>
</template>

<script>
import SeverBox from "@/components/NiForm";
import ListBox from "@/components/listBox";
export default {
  data() {
    return {};
  },
  //传入组件
  components: {
    SeverBox
  },

  methods: {}
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
