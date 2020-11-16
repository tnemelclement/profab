<template>
   <section class="warpper">
       <button @click="reload" >Charger la page</button>
      <div class="fb-page" data-tabs="timeline" data-href="https://www.facebook.com/ProfabFR" data-width="800" data-height="800"></div>        
   </section>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        reload() {
            window.location.reload()
        }
    },
    mounted() {
        
        
    }
    
}
</script>

<style>
   
 .fb-page {
     width: 100%;
     margin: 20px 200px;
 }

</style>