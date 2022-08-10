<template>
     <div>
       <van-cell>
         <!-- 标题区域的插槽 -->
         <template #title>
           <div class="title-box">
             <!-- 标题 -->
             <span>{{ title }}</span>
             <!-- 单张图片 -->
             <img v-if="cover.type===1" :src="cover.images[0]" alt="" class="thumb">
           </div>
           <!-- 三张图片 -->
           <div class="thumb-box" v-if="cover.type===3">
             <img :src="item" alt="" class="thumb" v-for="(item,i) in cover.images" :key="i">
           </div>
         </template>
         <!-- label 区域的插槽 -->
         <template #label>
           <div class="label-box">
             <span>作者:{{author}} &nbsp;&nbsp; {{num}}评论 &nbsp;&nbsp; {{date}}</span>
             <!-- 关闭按钮 -->
             <van-icon name="cross" />
           </div>
         </template>
       </van-cell>
     </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    num: {
      type: [Number, String],
      default: 0
    },
    date: {
      type: String,
      default: ''
    },
    cover: {
      type: Object,
      // 通过default 函数,返回cover属性的默认值
      default: function () {
        return { cover: 0 }
      }
    }
  }
}
</script>
<style scoped lang="less">
  .label-box {
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   .thumb {
     // 矩形黄金比例：0.618
     width: 113px;
     height: 70px;
     background-color: #f8f8f8;
     object-fit: cover;
   }

   .title-box {
     display: flex;
     justify-content: space-between;
     align-items: flex-start;
   }

   .thumb-box {
     display: flex;
     justify-content: space-between;
   }
</style>
