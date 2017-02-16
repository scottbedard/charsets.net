<template>
    <div>
        <h1>Charsets</h1>
        <v-output></v-output>
        <v-controls></v-controls>
    </div>
</template>

<script>
    export default {
        components: {
            'v-controls': require('./controls/controls'),
            'v-output': require('./output/output'),
        },
    };
</script>
