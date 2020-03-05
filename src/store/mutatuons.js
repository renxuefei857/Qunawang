export default {
    //定位
    chanCtiyvalue(state, city) {
        state.city = city


            //本地存储
        try {
            localStorage.city = city
        } catch (e) {

        }
        // localStorage.city = city
    }
}