// creo l'app vue
const { createApp } = Vue;

createApp({
    data(){
        return{
            // definisco l'array dove andro ad inserire gli indirizzi email generati
            randomEmails: null,
        }
    },
    methods: {
        // definisco la funzione per generare l'email
        generateTenRandomEmails(){
            // definisco un ciclo per iterare la chiamata che gerea l'email 10 volte 
            for (let i = 0; i < 10 ; i++){
                // utilizzo la libreria axios per chiamare l'api
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            }
        }
    }
})