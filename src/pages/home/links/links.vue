<style lang="scss" scoped>@import 'core';
    .v-links {
        position: absolute;
        top: 0;
        right: 0;
    }

    a {
        align-items: center;
        color: #000;
        display: flex;
        opacity: 0.6;
        padding: 20px;
        text-decoration: none;
        transition: opacity 200ms ease-in-out;
        &:hover { opacity: 1 }
    }

    img {
        height: 16px;
        width: auto;
    }
</style>

<template>
    <div class="v-links">
        <a href="https://github.com/scottbedard/charsets.net">
            <img src="../../../assets/github.svg" alt="View source" />
        </a>
    </div>
</template>
