// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Link doc Axios: https://github.com/axios/axios;
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.
// Buon lavoro di nuovo e benvenuti nel mondo :api:


const app = new Vue({
    el: "#app",
    data:{
        emailArray : [],
        API: 'https://flynn.boolean.careers/exercises/api/random/mail'
    },
    created() {
        this.genEmail();
    },
    methods:{
        genEmail(){
        axios.get(this.API)
        .then(response => {
        //    console.log(response.data.response)
        for(let i = 0; i < 10; i++){
            this.emailArray.push(response.data.response)
        }
        console.log(this.emailArray)
    })
        .catch(error => {
            // handle error
            console.log(error);
        })
        }
    },
})