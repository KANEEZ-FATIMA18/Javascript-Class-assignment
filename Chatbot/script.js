import { DotLottie } from '@lottiefiles/dotlottie-web';

const dotLottie = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector('#dotlottie-canvas'),
    src: "<https://lottie.host/YOUR_ANIMATION_ID.lottie>", // replace with your .lottie or .json file URL
});
