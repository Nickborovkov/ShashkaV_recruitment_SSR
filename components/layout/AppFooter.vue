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
        padding: 20px 0;
        background-color: #000000;
        bottom: 0;
        width: 100%;
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
