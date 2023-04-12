<template>
    <div id="swiperTop">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in images" :key="image">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
import {getBanner} from '@/request/api/home.js'
import { onMounted } from 'vue';
export default {
    setup() {
        const images = [
            'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
            'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
        ];
        onMounted(async ()=>{
            //let res = await getBanner();
        })
        return { images };
    },
};

</script>
<style lang="less">
#swiperTop {
    .van-swipe {
        width: 100%;
        padding: 10px;

        .van-swipe-item {
            padding: 0 0.2rem;
            img {
                width: 100%;
                height: 150px;
                border-radius: 0.2rem;
            }
        }
        .van-swipe__indicator--active{
            background-color: pink;
        }
    }
}
</style>