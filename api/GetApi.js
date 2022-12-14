import axios from "axios";

new Vue({
    el: '#app',
    data() {
        return {
            info: null
        };
    },
    mounted() {
        axios
            .get('http://localhost/api/pokemons')
            .then( response => (this.info = response));
    }
});