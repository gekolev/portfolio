<template>
    <div class="home-wrapper relative bg-white">
        <!-- <Mouse /> -->
        <div class="p-2 md:p-10 flex flex-col justify-between w-full h-screen relative">
            <div>
                <h1 class="text-5xl font-bold">George Kolev</h1>
            </div>
            <div class=" flex justify-end md:justify-start">
                <!-- <a class="" href="mailto:george.gkolev@gmail.com">  -->
                    <div class="cta-button flex justify-center items-center">
                        <div class="rotate w-20 h-20 border-dashed border-4 border-black rounded-full absolute">
                        </div>
                        <div class="w-16 h-16 rounded-full bg-black absolute">
                        </div>
                        <svg class="absolute" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9162 3.71857C13.6568 3.71857 3.71851 13.6568 3.71851 25.9163C3.71851 38.1755 13.6568 48.1139 25.9162 48.1139C38.1757 48.1139 48.114 38.1755 48.114 25.9163C48.114 13.6568 38.1757 3.71857 25.9162 3.71857ZM0.213623 25.9163C0.213623 11.7211 11.721 0.213684 25.9162 0.213684C40.1112 0.213684 51.6189 11.7211 51.6189 25.9163C51.6189 40.1114 40.1112 51.6188 25.9162 51.6188C11.721 51.6188 0.213623 40.1114 0.213623 25.9163Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M49.282 27.4738H2.55017V24.3583H49.282V27.4738Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3583 49.2821V2.55015H27.4738V49.2821H24.3583ZM37.1126 25.9161C37.1126 17.4547 34.0697 9.08398 28.1043 3.54928L29.9584 1.5509C36.5853 7.69916 39.8386 16.853 39.8386 25.9161C39.8386 34.9792 36.5853 44.133 29.9584 50.2814L28.1043 48.2828C34.0697 42.7482 37.1126 34.3775 37.1126 25.9161ZM12.285 25.9161C12.285 16.8661 15.4323 7.71707 21.8573 1.56562L23.7425 3.53468C17.965 9.06626 15.0111 17.4416 15.0111 25.9161C15.0111 34.3906 17.965 42.7661 23.7425 48.2976L21.8573 50.2666C15.4324 44.1151 12.2851 34.9662 12.285 25.9161Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9162 12.1225C34.3642 12.1225 42.9552 13.6846 48.7784 16.9377C49.4358 17.3048 49.671 18.1352 49.3038 18.7924C48.9369 19.4495 48.1062 19.6847 47.4493 19.3176C42.1923 16.3811 34.1256 14.8485 25.9162 14.8485C17.7068 14.8485 9.64008 16.3811 4.3832 19.3176C3.72599 19.6847 2.89564 19.4495 2.52852 18.7924C2.16144 18.1352 2.39658 17.3048 3.05379 16.9377C8.87733 13.6846 17.4681 12.1225 25.9162 12.1225ZM25.9162 38.9622C34.3642 38.9622 42.9552 37.3998 48.7784 34.1468C49.4358 33.7797 49.671 32.9494 49.3038 32.2922C48.9369 31.635 48.1062 31.3998 47.4493 31.7669C42.1923 34.7034 34.1256 36.2361 25.9162 36.2361C17.7068 36.2361 9.64008 34.7034 4.3832 31.767C3.72599 31.3998 2.89564 31.635 2.52852 32.2922C2.16144 32.9494 2.39658 33.7797 3.05379 34.1468C8.87733 37.3998 17.4681 38.9622 25.9162 38.9622Z" fill="white"/>
                        </svg>
                    </div>
                <!-- </a> -->
            </div>
            <div class="flex md:justify-end justify-start">
                <div class="md:w-2/6 w-full flex justify-between">
                    <div>
                        <div class="max-w-sm">
                            <p>Site under development...<br /><br />
                                Currently working as a creative developer at Syncronized Studio.
                                </p>
                        </div>
                    </div>
                    <div class="mx-3 timezone flex flex-col justify-between">
                        <span>GMT+2</span>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>

export default {
  setup() {

  }
};

</script>

<style lang="scss" scoped>


@keyframes rotating {
    from{
        -webkit-transform: rotate(0deg);
    }
    to{
        -webkit-transform: rotate(360deg);
    }
}

.rotate{
    animation: rotating 5s linear infinite;
}

.cta-button {
    // width: 100px;
    // height: 100px;
    width: 100%;
    height: 100%;
}

.description {
    border-left: solid 1px black;
    padding-left: 1em;
    max-width: 325px;
}
</style>