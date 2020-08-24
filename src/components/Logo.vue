<template>
    <div id="landingLogo">
        <div data-icon="border" class="border leftBorder"></div>
        <!-- <div class="backgroundBox"></div> -->
        <div data-icon="landing" class="center fade-out" id="mainLogo">

            <div id="footerLogo">Graphics</div>
        </div>
        <div class="artistName center fade-in">
            <div class="name">
                Alexandros Efthymiou
            </div>
            <div class="description">
                Graphics Designer <span style="color: var(--MainText)">-</span> Concept Artist
            </div>
        </div>
        <div data-icon="border" class="border rightBorder"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@font-face {
  font-family: "Gilroy-Bold";
  src: local("GilroyBold"),
   url(../assets/fonts/Gilroy-ExtraBold.otf) format("truetype");
}
    #landingLogo{
        display: flex;
        width: fit-content;
        width: -moz-fit-content;
        margin: auto;
        font-family: "Gilroy-Bold";
    }

    #mainLogo{
        z-index: 1;
        font-family: "Gilroy";
    }

    .border{
        height: fit-content;
        height: -moz-fit-content;
        margin-top: 5rem;
        z-index: 2;
        visibility: hidden;
    }

    .rightBorder{
        padding-left:10rem;
    }

    .leftBorder{
        padding-right: 10rem;
    }

    .name{
        font-size: 7rem;
    }

    .description{
        color:var(--LightColor);
        font-size: 1.2rem;
    }

    .artistName{
        letter-spacing: 5px;
    }

    #footerLogo[data-v-4ef0a45b] {
        text-transform: capitalize;
        font-size: 3rem;
        color: var(--LightColor);
        position: absolute;
        letter-spacing: .4rem;
        margin-top: -8rem;
        margin-left: 15rem;
    }
</style>>
