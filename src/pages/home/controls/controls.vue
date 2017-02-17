<style lang="scss" scoped>@import 'core';
    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        > div {
            margin: 12px;
            text-align: center;

            label {
                display: block;
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 4px;
            }

            input {
                min-width: 100px;
                text-align: center;
            }
        }
    }
</style>

<template>
    <div class="v-options">
        <div class="row">
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
                    max="100"
                    min="1"
                    ref="quantity"
                    type="number"
                    @input="onQuantityInput"
                />
            </div>
        </div>
        <div class="row">
            <div>
                <label for="lowercase">Lowercase</label>
                <v-checkbox
                    id="lowercase"
                    ref="lowercase"
                    @input="onLowercaseChanged"
                />
            </div>
            <div>
                <label for="uppercase">Uppercase</label>
                <v-checkbox
                    id="uppercase"
                    ref="uppercase"
                    @input="onUppercaseChanged"
                />
            </div>
            <div>
                <label for="numbers">Numbers</label>
                <v-checkbox
                    id="numbers"
                    ref="numbers"
                    @input="onNumbersChanged"
                />
            </div>
            <div>
                <label for="symbols">Symbols</label>
                <v-checkbox
                    id="symbols"
                    ref="symbols"
                    @input="onSymbolsChanged"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import defaultValues from 'src/app/defaults';
    import { convertToBoolean } from 'src/app/utilities/conversion';

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
            onNumbersChanged (numbers) {
                this.navigate({ numbers });
            },
            onQuantityInput (quantity) {
                this.navigate({ quantity });
            },
            onSymbolsChanged (symbols) {
                this.navigate({ symbols });
            },
            onUppercaseChanged (uppercase) {
                this.navigate({ uppercase });
            },
            setInitialValue (key) {
                let { query } = this.$route;

                let value = typeof query[key] === 'undefined'
                    ? defaultValues[key]
                    : query[key];

                if (['uppercase', 'lowercase'].indexOf(key) > -1) {
                    value = convertToBoolean(value);
                }

                this.$refs[key].setValue(value);
            },
        },
    };
</script>
