<template>
    <section>
        
        <NavCategorie />

        <button >TEST</button>
    </section>
    
</template>

<script>
import NavCategorie from "@/components/NavCategorie.vue"

export default {
    name: 'Accueil',
    components: {
        NavCategorie
    }
}
</script>

<style>
 p {
     font-size: 30px;
     color: black;
 }
</style>