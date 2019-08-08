<template>
  <div class="interviewListWrap">
    <ul class="interviewListHeader">
      <li
        v-for="item in list"
        :key="item.id"
        :class="ind===item.id?'active':''"
        @click="check(item)"
      >{{item.text}}</li>
    </ul>
    <div class="interviewMain">
      <ListBox :listAll="listAll" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ListBox from "@/components/listBox";
export default {
  data() {
    return {
      ind: 0,
      list: [
        { text: "未开始", id: 0 },
        { text: "已开始", id: 1 },
        { text: "已放弃", id: 2 },
        { text: "全部", id: 3 }
      ]
    };
  },
  //传入组件
  components: {
    ListBox
  },
  computed: {
    ...mapState({
      listAll: state => state.interviewList.listAll
    })
  },

  methods: {
    ...mapActions({
      getState: "interviewList/getState"
    }),
    check: function(item) {
      this.getState(item); //调用方法传参数
      this.ind = item.id; //点击切换
    }
  },

  created() {
    this.getState();
  }
};
</script>

<style scoped lang="scss">
.interviewListWrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(238, 238, 238);
}
.interviewListHeader {
  background: #fff;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  li {
    text-align: center;
    padding: 15rpx 0;
  }
}
.interviewMain {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.active {
  color: rgb(39, 133, 195);
  border-bottom: 1px solid rgb(39, 133, 195);
}
</style>
