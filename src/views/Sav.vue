<template>
    <section id="sav">
        <h1 class="warpper" style="font-size: 40px; padding: 30px 0 10px 0">Services Apres Vente</h1>
            <div v-for="inf in info" :key="inf">
                <TextImg 
                :type="inf.type"
                :titre="inf.titre"
                :paragraphe="inf.paragraphe"
                :img="inf.img"
                :bgcolor="inf.bgcolor"
                :color="inf.color"
                />
            </div>  
    </section>
</template>

<script>
import TextImg from '@/components/textImg.vue'
import infos from '@/assets/textes.json'

export default {
    name: 'Sav',
    components: {
        TextImg
    },
    data() {
        return {
            info : infos.sav
        }
    }
}
</script>