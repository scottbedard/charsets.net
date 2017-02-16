<style lang="scss" scoped>@import 'core';

</style>

<template>
    <input
        ref="checkbox"
        type="checkbox"
        @change="onChange"
    />
</template>

<script>
    export default {
        methods: {
            onChange (e) {
                this.$emit('input', e.target.checked);
            },
            setValue (isChecked) {
                this.$refs.checkbox.checked = isChecked;
            },
        },
    };
</script>
