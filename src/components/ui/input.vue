<style lang="scss" scoped>@import 'core';
    input {
        padding: 6px 12px;
        border-radius: 3px;
        border: 1px solid #ccc;
        appearance: none;
        font-size: 20px;
        font-weight: 300;

        // hide number spinners
        &[type=number]::-webkit-inner-spin-button,
        &[type=number]::-webkit-outer-spin-button {
            appearance: none;
            margin: 0;
        }
    }
</style>

<template>
    <input
        ref="input"
        @input="onInput"
    />
</template>

<script>
    export default {
        methods: {
            onInput (e) {
                this.$emit('input', e.target.value);
            },
            setValue (value) {
                this.$refs.input.value = value;
            },
        },
    };
</script>
