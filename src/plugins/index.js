import {Button,Swipe,SwipeItem,Tab, Tabs } from 'vant';

let components=[
    Button,Swipe,SwipeItem
]

export default function GetAllComponent(app){
    components.forEach((item)=>{
        app.use(item)
    })
}