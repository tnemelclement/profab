<template>
    <div id="imageImg" :style="'height:'+height+'; width:'+width+'; background-image: url('+imgActive+')'">
        <p @click="prev"> o </p>
        <p @click="next"> o </p>
    </div>
</template>

<script>
export default {
    name: 'smallImg',
    props: {
        height: String,
        width: String,
        img: {
            type: Array,
            function () { return [] }
        }
    },
    data() {
        return {
            imgActive: "",
            pos: 0
        }
    },
    methods: {
        next() {
            this.pos = this.pos >= this.img.length-1? this.pos : this.pos+1;
            this.imgActive = this.img[this.pos]
        },
        prev() {
            this.pos = this.pos <= 0 ? this.pos : this.pos-1;
            this.imgActive = this.img[this.pos]
        }
    },
    mounted() {
        this.imgActive = this.img[0]
    }
    
}
</script>

<style>

#imageImg {
    background-size: cover;

    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 40px;

}

#imageImg p {
    margin: 0 20px;

    cursor: pointer;
    
    
}

</style>