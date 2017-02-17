<style lang="scss" scoped>@import 'core';
    header {
        text-align: center;
        font-weight: 300;
    }
</style>

<template>
    <div>
        <header>
            <h1>charsets.net</h1>
            <p>The simplest random character generator around.</p>
        </header>
        <v-output></v-output>
        <v-controls></v-controls>
        <v-links></v-links>
    </div>
</template>

<script>
    export default {
        components: {
            'v-controls': require('./controls/controls'),
            'v-links': require('./links/links'),
            'v-output': require('./output/output'),
        },
    };
</script>
