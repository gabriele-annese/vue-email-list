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
        API: 'https://flynn.boolean.careers/exercises/api/random/mail',
        emailIndex:0
    },
    created() {
        this.genEmail(10);
    },
    methods:{

        genEmail(lun){
            // usiamo arry form per loopare 
            Array.from({length: lun}, (i) => {
                return axios.get(this.API).then(response => {
                    // pushiamo l email in array
                    this.emailArray.push(response.data.response)
                });
            })
            console.log(this.emailArray)
        }
    },
})