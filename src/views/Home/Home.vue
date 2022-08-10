<template>
  <div class="home-continer">
    <div class="header">
      <van-nav-bar
        title="Aliang头条"
        fixed
      />
    </div>
    <van-pull-refresh :disabled="finished" v-model="isLoading" @refresh="onRefresh">
    <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad">
    <Article
    v-for="item in list" :key="item.art_id"
    :title="item.title"
    :author="item.aut_name"
    :num="item.comm_count"
    :date="item.pubdate"
    :cover="item.cover"
    />
    </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import Article from '../../components/article/Article.vue'
import { getArticleListAPI } from '@/api/articleApi.js'
import _ from 'lodash'
let fn = null
export default {
  name: 'Home',
  components: { Article },
  data () {
    return {
      list: [],
      page: 1,
      limit: 10,
      loading: true, // 是否正在加载下一页数据,如果 loading为true，则不会反复触发load 事件.每当下一页数据请求回来之后，千万要记得，把 loading 从 true改为 false
      finished: false, // 所有数据是否加载完毕了，如果没有更多数据了，一定要把 finished 改成 true
      count: 0,
      isLoading: false
    }
  },
  methods: {
    async initArticleList (isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      if (isRefresh) {
        this.list = [...res, ...this.list]
        this.isLoading = false
      } else {
        this.list = [...this.list, ...res]
        this.loading = false
      }
      if (res.length === 0) {
        this.finished = true
      }
    },
    // 只要onLoad被调用，就应该请求下一页数据
    onLoad () {
      // 异步更新数据
      this.page++
      this.initArticleList()
    },
    onRefresh () {
      this.page++
      this.initArticleList(true)
    },
    recordTopHandler () {
      return _.debounce(
        () => {
          this.$route.meta.top = window.scrollY
        },
        50,
        { trailing: true }
      )
    }
  },
  created () {
    this.initArticleList()
  },
  activated () {
    fn = this.recordTopHandler()
    window.addEventListener('scroll', fn)
  },
  deactivated () {
    window.removeEventListener('scroll', fn)
  }
}
</script>

<style scoped lang="less">
.home-continer {
  .header {
    height: 45px;
      .van-nav-bar {
        background-color: #007bff;

      }
      /deep/ .van-nav-bar__title {
          color: aliceblue;
        }
  }
}
</style>
