<style lang="scss" scoped>@import 'core';
    .error {
        color: #ef5350;
        text-align: center;
        padding: 40px 0;
        font-weight: 300;
    }

    .strings {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0 auto;
        max-width: 1200px;
        padding: 40px 20px;

        > div {
            font-size: 24px;
            font-weight: 300;
            padding: 10px;
        }
    }
</style>

<template>
    <div class="v-output">
        <div class="error" v-if="! characters.length">No character sets are selected.</div>
        <div class="error" v-else-if="quantity <= 0">Set the quantity to a number greater than zero.</div>
        <div class="error" v-else-if="length <= 0">Set the string length to a number greater than zero.</div>
        <div class="strings" v-else>
            <div v-for="string in strings">
                {{ string }}
            </div>
        </div>
    </div>
</template>

<script>
    import defaultValues from 'src/app/defaults';
    import { convertToBoolean } from 'src/app/utilities/conversion';

    let sets = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '012345679',
        symbols: '~!@#$%^&*()_+-=?',
    };

    export default {
        computed: {
            characters () {
                let characters = '';

                if (this.useLowercase) characters += sets.lowercase;
                if (this.useNumbers) characters += sets.numbers;
                if (this.useSymbols) characters += sets.symbols;
                if (this.useUppercase) characters += sets.uppercase;

                return characters;
            },
            length () {
                if (typeof this.$route.query.length !== 'undefined') {
                    return Number(this.$route.query.length);
                }

                return defaultValues.length;
            },
            quantity () {
                if (typeof this.$route.query.quantity !== 'undefined') {
                    return Number(this.$route.query.quantity);
                }

                return defaultValues.quantity;
            },
            strings () {
                let strings = [];

                for (let i = 0; i < this.quantity; i++) {
                    let string = '';
                    for (let j = 0; j < this.length; j++) {
                        string += this.characters.charAt(Math.floor(Math.random() * this.characters.length));
                    }

                    strings.push(string);
                }

                return strings;
            },
            useLowercase () {
                return (typeof this.$route.query.lowercase !== 'undefined' && convertToBoolean(this.$route.query.lowercase))
                    || (typeof this.$route.query.lowercase === 'undefined' && defaultValues.lowercase);
            },
            useNumbers () {
                return (typeof this.$route.query.numbers !== 'undefined' && convertToBoolean(this.$route.query.numbers))
                    || (typeof this.$route.query.numbers === 'undefined' && defaultValues.numbers);
            },
            useSymbols () {
                return (typeof this.$route.query.symbols !== 'undefined' && convertToBoolean(this.$route.query.symbols))
                    || (typeof this.$route.query.symbols === 'undefined' && defaultValues.symbols);
            },
            useUppercase () {
                return (typeof this.$route.query.uppercase !== 'undefined' && convertToBoolean(this.$route.query.uppercase))
                    || (typeof this.$route.query.uppercase === 'undefined' && defaultValues.uppercase);
            },
        },
    };
</script>
