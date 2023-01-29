<template>
    <div class="footer">
        <div class="footer__inner">

            <p class="footer__text"><span class="mdi mdi-copyright"/> ShashkaV recruitment</p>

        </div>
    </div>
</template>

<script>
    export default {
        name: "AppFooter",
    }
</script>

<style scoped>
    .footer {
        padding: 0 20px;
        background-color: #000000;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        /*width: 100%;*/
        font-family: "Montserrat Normal";
    }

    .footer__inner {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .footer__text {
        color: #ffffff;
    }
</style>
