<style lang="scss" scoped>@import 'core';
    .v-options {
        display: flex;
        justify-content: center;

        > div {
            margin: 12px;
            text-align: left;

            label {
                display: block;
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 4px;
            }

            input {
                min-width: 100px;
            }
        }
    }
</style>

<template>
    <div class="v-options">
        <div>
            <label for="length">Length</label>
            <v-input
                id="length"
                max="100"
                min="1"
                ref="length"
                type="number"
                @input="onLengthInput"
            />
        </div>
        <div>
            <label for="quantity">Quantity</label>
            <v-input
                id="quantity"
                max="20"
                min="1"
                ref="quantity"
                type="number"
                @input="onQuantityInput"
            />
        </div>
        <div>
            <label for="lowercase">Lowercase letters</label>
            <v-checkbox
                id="lowercase"
                ref="lowercase"
                @input="onLowercaseChanged"
            />
    </div>
</template>

<script>
    import defaultValues from 'src/app/defaults';

    export default {
        mounted () {
            Object.keys(defaultValues).forEach(this.setInitialValue);
        },
        methods: {
            navigate (options) {
                const query = Object.assign({}, this.$route.query, options);

                Object.keys(query)
                    .filter(key => typeof query[key] === 'undefined')
                    .forEach(key => delete query[key]);

                this.$router.replace({ query });
            },
            onLengthInput (length) {
                this.navigate({ length });
            },
            onLowercaseChanged (lowercase) {
                this.navigate({ lowercase });
            },
            onQuantityInput (quantity) {
                this.navigate({ quantity });
            },
            setInitialValue (key) {
                const { query } = this.$route;
                const value = typeof query[key] === 'undefined'
                    ? defaultValues[key]
                    : query[key];

                this.$refs[key].setValue(value);
            },
        },
    };
</script>
