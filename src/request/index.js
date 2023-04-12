import axios from "axios";

let server=axios.create({
    baseURL:"http://wonkmygame.com",
    timeout:1000
})
export default server;