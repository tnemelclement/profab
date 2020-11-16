<template>
    <div id="tableau">
        <tr id="lines">
            <td v-for="nom in noms" :key="nom" id="col">
                {{nom}}
            </td>
        </tr>
        <tr v-for="n in 10" :key="n" id="lines">
            <td v-for="n in 5" :key="n" id="col">
                test
            </td>
        </tr>
    </div>
</template>

<script>
export default {
    name: 'adminTab',
    props: {
        donnee: null,
        noms: []
    }
}
</script>

<style>

    #tableau {
        width: 800px;
        margin: 20px auto;
    }

    #tableau #lines {
        height: 60px;
    }

    #tableau #col {
        border: solid 1px;
        padding: 0 10px;
    }
</style>