<style lang="scss" scoped>@import 'core';

</style>

<template>
    <div class="v-output">
        <div v-for="string in strings">
            {{ string }}
        </div>
    </div>
</template>

<script>
    import defaultValues from 'src/app/defaults';

    let sets = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '012345679',
    };

    export default {
        computed: {
            characters () {
                let characters = '';

            },
            strings () {
                let strings = [];

                for (let i = 0; i < this.quantity; i++) {
                    strings.push(this.generateString());
                }

                return strings;
            },
            quantity () {
                if (typeof this.$route.query.quantity !== 'undefined') {
                    return Number(this.$route.query.quantity);
                }

                return defaultValues.quantity;
            },
        },
        methods: {
            generateString () {
                return 'yo';
            },
        },
    };
</script>
