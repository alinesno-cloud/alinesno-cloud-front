
<template>
<transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave">
  <section
    v-show="visible"
    class="h-transfer"
    :class="[tabConfig.length == 1 ? 'single-tab' : '']"
  >
    <div class="mask"></div>
    <!-- 内容面板 -->
    <div class="transfer__content">
      <!-- 面板顶部标题 -->
      <header class="transfer__header">
        <i class="el-icon-monitor"></i>
        {{ title }}
        <i class="el-icon-close" @click.self="handleWrapperClick"></i>
      </header>
      <!-- 穿梭框主要内容 -->
      <div class="transfer__body">
        <!-- 左边穿梭框 -->
        <div class="transfer-pane">
          <div class="transfer-pane__tools">
            <el-input
              v-model="searchString"
              class="search-input"
              size="small"
              style="width: 180px"
              type="search"
              placeholder="搜索人员"
              :disabled="!searchable"
            ></el-input>
            <span>
              <span style="margin-right: 1rem; font-size: 14px"
                >{{ selectedNum }} / {{ maxNum }}</span
              >
              <el-tooltip placement="top" content="清空">
                <i class="el-icon-delete" @click="removeAll"></i>
              </el-tooltip>
            </span>
          </div>
          <el-container class="transfer-pane__body shadow right-pane">
            <template v-for="type in tabKeys">
              <div
                v-for="(item, index) in selectedData[type]"
                :key="type + index"
                class="selected-item"
              >
                <span>
                  <!-- <i v-if="item.deptName" class="iconfont iconbumen"></i>
                  <i v-else class="iconfont iconyuangong"></i> &nbsp; -->
                  <span>{{ getNodeProp(item, "label") }}</span>
                </span>
                <i class="el-icon-delete" @click="removeData(item, type)"></i>
              </div>
            </template>
            <template v-for="type in tabKeys">
              <div
                v-for="(item, index) in aloneCheckedData[type]"
                :key="'alone' + type + index"
                class="selected-item"
              >
                <span>
                  <!-- <i v-if="item.deptName" class="iconfont iconbumen"></i>
                  <i v-else class="iconfont iconyuangong"></i> &nbsp; -->
                  <span>{{ getNodeProp(item, "label") }}</span>
                </span>
                <i
                  class="el-icon-delete"
                  @click="removeData(item, type, true)"
                ></i>
              </div>
            </template>
          </el-container>
          <footer class="transfer__footer">
            <el-button type="primary" plain size="small" @click="confirm"
              >确定</el-button
            >
            <el-button plain size="small" @click.self="handleWrapperClick">取消</el-button>
          </footer>
        </div>
        <!-- 右边穿梭框 -->

        <div class="transfer-pane">
          <!-- 操作栏 -->
          <!-- <div class="transfer-pane__tools">

          </div> -->
          <!-- 穿梭框 -->
          <div class="transfer-pane__body" style="height: 570px">
            <div class="enough-mask" v-show="isEnough">
              <span class="p-center">最多选择{{ maxNum }}项</span>
            </div>
            <div
              class="searchResPane"
              :class="{ active: searchMode }"
              v-loading="searchLoading"
            >
              <div class="hidden-tag" @click="searchString = ''">关闭</div>
              <div v-for="(item, index) in searchRes" :key="index" class="item">
                <div>
                  <div>{{ getNodeProp(item, "label") }}</div>
                  <div class="text-ellipsis search-res-tip">
                    {{ getNodeProp(item, "searchResTip") }}
                  </div>
                </div>
                <el-checkbox
                  @change="
                    (checked) =>
                      checked
                        ? addData(item)
                        : removeData(item, activeTabName, true)
                  "
                ></el-checkbox>
              </div>
            </div>

            <el-container style="height: 100%">
              <el-tabs
                v-model="activeTabName"
                type="border-card"
                style="min-height: 370px; width: 360px"
              >
                <el-tab-pane
                  v-for="(tab_item, idx) in tabConfig"
                  :name="tab_item.tabKey"
                  :label="tab_item.tabName"
                  :key="idx"
                >
                  <el-tree
                    :ref="tab_item.tabKey"
                    lazy
                    show-checkbox
                    :props="{
                      children: tab_item.children,
                      label: tab_item.label,
                      isLeaf: tab_item.isLeaf,
                      disabled: tab_item.disabled,
                    }"
                    :load="onLoad"
                    node-key="nodeId"
                    :check-strictly="true"
                    @check-change="
                      (data, checked) =>
                        onCheckChange(data, checked, tab_item.tabKey)
                    "
                  >
                  </el-tree>
                </el-tab-pane>
              </el-tabs>
            </el-container>
          </div>
        </div>
      </div>
    </div>
  </section>
  </transition>
</template>

<script>
import { DEP_CONFIG, CONFIG_LIST } from "./config.js";
import { debounce } from "../../src/utils/index.js";

export default {
  name: "OrgTransfer",
  props: {
    //标题
    title: {
      type: String,
      default: "组织机构",
    },
    //是否显示
    show: {
      type: Boolean,
      reuired: false,
    },
    visible: {
      type: Boolean
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    //选择菜单，user为用户，dep为组织
    tabList: {
      type: Array,
      default: () => ["user", "dep"],
    },
    // 是否支持模糊查询
    searchable: {
      type: Boolean,
      default: true,
    },
    // 可选择的最大数量
    maxNum: {
      type: Number,
      default: 99,
    },
  },
  data() {
    return {
      //列表数据
      value: { user: [] },
      showTransfer: true ,
      closed: false,
      //列表数据结束
      searchRes: [], // 搜索后的结果
      selectedData: [], // 用户手动选择的节点(在tree里面已经显示的节点)
      aloneCheckedData: [], // 已有的 但是未在tree中渲染的数据 例如回显时的数据
      isEnough: false, // 是否选择了足够的人数
      searchString: "",
      searchMode: false, // 是否展示搜索面板
      searchLoading: false,
      activeTabName: "",
      tabConfig: [],
      tabKeys: [],
    };
  },
  computed: {
    selectedNum() {
      let num = 0;
      for (const key of this.tabKeys) {
        const data1 = this.selectedData[key];
        data1 && data1.length && (num += data1.length);
        const data2 = this.aloneCheckedData[key];
        data2 && data2.length && (num += data2.length);
      }
      return num;
    },
  },
  watch: {
    tabList: {
      //深度监听，可监听到对象、数组的变化
      handler(val, oldVal) {
        console.log("tabList: " + val, oldVal);
      },
      deep: true, //true 深度监听
    },
    value: {
      //深度监听，可监听到对象、数组的变化
      handler(val, oldVal) {
        console.log("value: " + val, oldVal);
      },
      deep: true, //true 深度监听
    },
  },
  mounted() {
    this.isNumEnough();
    this.debounceSearch = debounce(this.searchDepUser, 500);
    console.log("tabList", this.tabList);
    console.log("value", this.value);
  },
  methods: {
    afterEnter() {
      this.$emit('opened');
    },
    afterLeave() {
      this.$emit('closed');
    },
    onLoad(node, resolve) {
      const conf = this.tabConfig.find((t) => t.tabKey === this.activeTabName);
      // load 方法返回一个promise
      conf
        .onload(node)
        .then((res) => {
          const nodes = res.map((t) => ({ nodeId: conf.nodeId(t), ...t }));
          resolve(nodes);
        })
        .then((res) => {
          for (const tabKey of this.tabKeys) {
            const tree = this.$refs[tabKey][0];
            this.aloneCheckedData[tabKey].forEach((data) => {
              tree.setChecked(data.nodeId, true);
            });
          }
        });
    },

    searchDepUser() {
      if (!this.searchString) {
        this.searchRes = [];
        return;
      }
      this.searchLoading = true;
      const activeConfig = this.getActiveConf();
      new Promise((resolve, reject) => {
        activeConfig.onsearch(this.searchString, resolve, reject);
      })
        .then((res) => {
          this.searchRes = res.map((t) => ({
            nodeId: activeConfig.nodeId(t),
            ...t,
          }));
        })
        .catch((err) => console.warn(err))
        .finally(() => (this.searchLoading = false));
    },

    onCheckChange(data, checked, tabKey) {
      this.activeTabName = tabKey;
      const index = this.aloneCheckedData[tabKey].findIndex(
        (t) => t.nodeId === data.nodeId
      );
      if (index > -1) {
        this.aloneCheckedData[tabKey].splice(index, 1);
      }
      this.$nextTick(() => {
        const tree = this.$refs[tabKey][0];
        const nodes = tree.getCheckedNodes().map((t) => {
          !t.nodeId &&
            (t.nodeId = this.getNodeProp(t, "nodeId", this.activeTabName));
          return t;
        });
        this.$set(this.selectedData, this.activeTabName, nodes);
        this.isNumEnough();
        this.$forceUpdate();
      });
    },

    addData(data) {
      const tabKey = this.activeTabName;
      const tree = this.$refs[tabKey][0];
      tree.setChecked(data.nodeId, true);
      !tree.getCheckedKeys(data).includes(data.nodeId) &&
        !this.aloneCheckedData[tabKey].find((t) => t.nodeId === data.nodeId) &&
        this.aloneCheckedData[tabKey].push(data);
    },

    removeData(data, tabKey, fromAloneData = false) {
      if (fromAloneData) {
        const index = this.aloneCheckedData[tabKey].findIndex(
          (t) => t.nodeId === data.nodeId
        );
        index > -1 && this.aloneCheckedData[tabKey].splice(index, 1);
      } else {
        this.$refs[tabKey][0].setChecked(data.nodeId, false); // 触发onCheckChange
      }
    },

    removeAll() {
      for (const type of this.tabKeys) {
        const tree = this.$refs[type][0];
        tree.getCheckedKeys().forEach((key) => {
          tree.setCheckedKeys([]);
        });
        this.selectedData[type] = [];
        this.aloneCheckedData[type] = [];
      }
    },

    isNumEnough() {
      let count = 0;
      for (const type of this.tabKeys) {
        count += this.selectedData[type].length;
        count += this.aloneCheckedData[type].length;
      }
      this.isEnough = count >= this.maxNum;
    },

    closeTransfer() {
      this.$emit("update:show", false);
      this.tabKeys = [];
      this.isEnough = false;
      this.searchString = "";
    },

    confirm() {
      const res = {};
      for (const type of this.tabKeys) {
        res[type] = this.selectedData[type].concat(this.aloneCheckedData[type]);
      }
      this.$emit("confirm", res);
      this.closeTransfer();
    },

    handleWrapperClick() {

      console.log('handleWrapperClick') ;
      
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },

    handleClose() {
      if (typeof this.beforeClose === "function") {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },

    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
        this.$emit('close');
        if (this.destroyOnClose === true) {
          this.rendered = false;
        }
        this.closed = true;
      }
    },

    getActiveConf(tabKey) {
      const target = tabKey || this.activeTabName;
      return this.tabConfig.find((t) => t.tabKey === target);
    },

    getConfProp(propName, tabKey) {
      const conf = this.getActiveConf(tabKey);
      return conf ? conf[propName] : null;
    },

    getNodeProp(data, propName, tabKey) {
      try {
        const prop = this.getConfProp(propName, tabKey);
        if (typeof prop === "string") {
          return data[prop];
        }
        if (typeof prop === "function") {
          return prop(data);
        }
      } catch (e) {
        console.error(e);
        return "执行出错，可联系开发人员";
      }
    },

    dataInit() {
      this.aloneCheckedData = {};
      this.selectedData = {};
      this.tabConfig = [];
      this.tabKeys = [];
      const getTabProp = (tabItem) =>
        typeof tabItem === "object"
          ? [tabItem.key, tabItem.config]
          : [tabItem, {}];
      const initDefaultData = (key, mergedConfig) => {
        this.tabConfig.push(mergedConfig);
        this.tabKeys.push(key);
        let data = this.value && this.value[key] ? this.value[key] : [];
        data = data.map((t) => ({ nodeId: mergedConfig.nodeId(t), ...t }));
        this.$set(this.aloneCheckedData, key, data);
      };
      this.tabList.forEach((item) => {
        const [key, customConf] = getTabProp(item);
        this.$set(this.aloneCheckedData, key, []);
        this.$set(this.selectedData, key, []);
        const defaultConf = CONFIG_LIST.find((t) => t.tabKey === key);
        defaultConf &&
          initDefaultData(key, Object.assign({}, defaultConf, customConf));
      });
      this.activeTabName = this.tabKeys[0];
    },
  },
  watch: {
    searchString(newVal) {
      this.searchMode = !!newVal;
      this.debounceSearch();
    },

    show: {
      handler: function (show) {
        if (show) {
          this.dataInit();
          this.isNumEnough();
        }
      },
      immediate: true,
    },

    visible(val) {
      if (val) {
        this.closed = false;
        this.$emit('open');
        this.$el.addEventListener('scroll', this.updatePopper);
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      } else {
        this.$el.removeEventListener('scroll', this.updatePopper);
        if (!this.closed) this.$emit('close');
        if (this.destroyOnClose) {
          this.$nextTick(() => {
            this.key++;
          });
        }
      }
    },

    tabList: {
      handler: function (val) {
        this.dataInit(); // tablist 比show 延后
      },
      immediate: true,
      deep: true,
    },
  },
  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>
<style lang="scss">
.h-transfer {
  text-align: left;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2999;
  line-height: 32px;
  & > .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .el-tabs--border-card {
    box-shadow: none;
    height: 100%;
  }
  .el-tabs__content {
    overflow: visible;
    min-height: 250px;
  }
  .el-tabs__nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    & > .el-tabs__item {
      flex-grow: 1;
    }
  }
  &.single-tab {
    .el-tabs__item {
      text-align: center;
      background: #f5f7fa !important;
      border-bottom: 1px solid #e4e7ed;
      border-right-width: 0px;
    }
  }
  .searchResPane {
    position: absolute;
    overflow-y: auto;
    z-index: 99;
    left: 0;
    top: 100%;
    width: 100%;
    height: 100%;
    background: #fff;
    border: 1px solid #dcdfe6;
    transition: top 0.5s;
    &.active {
      top: 0;
    }
    .hidden-tag {
      color: #999;
      font-size: 12px;
      text-align: right;
      padding-top: 4px;
      padding-right: 12px;
      cursor: pointer;
      &:hover {
        color: #66b1ff;
      }
    }
    .item {
      padding: 4px 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 1.5;
      &:hover {
        background-color: #ecf5ff;
        color: #66b1ff;
        cursor: pointer;
      }
      .search-res-tip {
        font-size: 12px;
        color: #999;
        max-width: 280px;
      }
    }
  }
  .enough-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    color: #fff;
    font-size: 16px;
    z-index: 100;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    letter-spacing: 4px;
  }
  .p-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .transfer__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    background: #fff;
    overflow: hidden;
    border-radius: 4px;
  }
  .transfer__header {
    margin-bottom: 6px;
    background-color: #fafafa !important;
    color: #222 !important;
    padding: 6px 24px;
    .el-icon-close {
      cursor: pointer;
      float: right;
      margin-top: 10px;
    }
  }
  .transfer__body {
    padding: 12px 0;
    display: flex;
    justify-content: space-around;
  }
  .transfer-pane {
    width: 360px;
  }
  .search-input {
    input {
      border: 1px solid #dcdfe6 !important;
      &:focus {
        border-color: #409eff !important;
      }
    }
  }
  .transfer-pane__tools {
    margin-bottom: 10px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      &:last-child {
        cursor: pointer;
      }
    }
  }
  .transfer-pane__body {
    position: relative;
    width: 100%;
    height: 330px;
    overflow: hidden;
    font-size: 14px;
    & > {
      & > {
        & > .el-container__view {
          height: 100%;
        }
      }
    }
    .el-tabs__item {
      height: 36px;
      line-height: 36px;
      text-align: center;
    }
  }
  .transfer-icons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    i {
      margin-top: 20px;
      margin-bottom: 20px;
      cursor: pointer;
      font-size: 20px;
      color: #696969;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
    .node-label {
      max-width: 250px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
    }
    .node-checkbox {
      position: absolute;
      right: 0;
    }
    i {
      font-size: 10px;
      &:hover {
        color: #1485f8;
        cursor: pointer;
      }
    }
  }
  .right-pane {
    box-sizing: border-box;
    overflow-x: hidden;
    height: calc(100% - 150px);
    margin-bottom: 10px;
    .selected-item {
      padding: 0px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:hover {
        background-color: #f5f7fa;
      }
      span {
        max-width: 90%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      i {
        &:hover {
          color: #1485f8;
          cursor: pointer;
        }
      }
    }
  }
  .dot {
    width: 2px;
    height: 2px;
    display: inline-block;
    border-radius: 50%;
    background: #4caf50;
  }
  .text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
