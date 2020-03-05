
//本地存储
let defaultCity = "邓州"
try {

    if (localStorage.city) {
        defaultCity = localStorage.city
    }

} catch (e) {

}


export default{
    city:defaultCity
}