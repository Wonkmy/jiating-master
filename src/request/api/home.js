import server from "..";
export function getBanner(){
    return server({
        method:"GET",
        url:"/banner?type=2"
    })
}