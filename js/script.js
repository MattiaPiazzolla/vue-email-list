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

        }
    }
})