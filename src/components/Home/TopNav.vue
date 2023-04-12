<template>
    <div class="topNav">

        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-31liebiao"></use>
            </svg>
        </div>

        <div class="topContent">
            <span class="active">物品</span>
            <span>备忘</span>
            <span>日子</span>
            <span>家人</span>
        </div>

        <div class="topRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-ic_search24px"></use>
            </svg>
        </div>

    </div>
</template>
<style lang="less" scoped>
    .topNav{
        width: 100%;
        height: 1rem;
        padding: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .topContent{
            width: 65%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            font-size: 0.36rem;

            .active{
                font-weight: 900;
            }
        }
    }
</style>