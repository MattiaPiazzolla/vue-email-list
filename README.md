Esercizio di oggi: Vue Email List
nome repo: vue-email-list
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

SCOMPOSIZIONE DEL PROBLEMA
>Definisco la struttura dello scaffolding
>Definisco l'applicazione Vue 
    >>Definisco la funzione che Andrà a generare 10 indirizzi email
        >>>Itero la chiamata per 10 volte con una ciclo for 
            >>>>Chiamo la librerai Axios 
                >>>>>L'api di generazione email di boolean
                    >>>>>>Recupero il contenuto di Data dell'api