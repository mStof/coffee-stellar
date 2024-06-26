// main.js
import cafeImg1 from "../../../../public/img/cafe-1.webp";
import cafeImg2 from "../../../../public/img/cafe-2.webp";
import cafeImg3 from "../../../../public/img/cafe-3.webp";
import cafeImg4 from "../../../../public/img/cafe-4.webp";
const mainJs = [cafeImg1, cafeImg2, cafeImg3, cafeImg4];

// menu.js
import sun from "../../../../public/svg/sun.svg";
const menuJs = sun;

// stars.js
import starFull from "../../../../public/svg/full-star.svg";
import starEmpty from "../../../../public/svg/empty-star.svg";
const starsJs = [starEmpty, starFull];

// locate.js
import locateImg1 from "../../../../public/img/locate-1.webp";
import locateImg2 from "../../../../public/img/locate-2.webp";
import locateImg3 from "../../../../public/img/locate-3.webp";
import locateImg4 from "../../../../public/img/locate-4.webp";

import accessTime from "@material-design-icons/svg/round/access_time.svg";
import pinDrop from "@material-design-icons/svg/outlined/pin_drop.svg";
import phone from "@material-design-icons/svg/round/phone.svg";

import instagram from "../../../../public/svg/Instagram-icon.svg";
import twitter from "../../../../public/svg/Twitter-icon.svg";
import facebook from "../../../../public/svg/facebook-icon.svg";
import whatsapp from "../../../../public/svg/whatsapp-icon.svg";

const locateJs = [
  [locateImg1, locateImg2, locateImg3, locateImg4],
  [accessTime, pinDrop, phone],
  [instagram, twitter, facebook, whatsapp],
];

// aboutUs.js
import coffee1 from "../../../../public/img/coffee-img-1.webp";
import coffee2 from "../../../../public/img/coffee-img-2.webp";
import coffee3 from "../../../../public/img/coffee-img-3.webp";
import coffee4 from "../../../../public/img/coffee-img-4.webp";
const aboutUsJs = [coffee1, coffee2, coffee3, coffee4];

// footer.js
import logoFooter from "../../../../public/img/logo-footer.svg";
import instagramFooter from "../../../../public/svg/footer-instagram.svg";
import githubFooter from "../../../../public/svg/footer-github.svg";
import linkedinFooter from "../../../../public/svg/footer-linkedin.svg";
const footerJs = [logoFooter, instagramFooter, githubFooter, linkedinFooter];

// Player.js
import skipPrevious from "@material-design-icons/svg/round/skip_previous.svg";
import pause from "@material-design-icons/svg/round/pause.svg";
import skipNext from "@material-design-icons/svg/round/skip_next.svg";
import play from "@material-design-icons/svg/round/play_arrow.svg";
import mscCoverlessBook from "../../../../public/music/coverless-book.mp3";
import mscGoodNight from "../../../../public/music/good-night.mp3";
import mscLofiStudy from "../../../../public/music/lofi-study.mp3";
import mscOnceInParis from "../../../../public/music/once-in-paris.mp3";
import mscTvariTokyocCafe from "../../../../public/music/tvari-tokyo-cafe.mp3";
const playerJs = [
  skipNext,
  pause,
  skipPrevious,
  play,
  [
    { src: mscCoverlessBook, name: "Coverless Book", },
    { src: mscGoodNight, name: "Good Night", },
    { src: mscLofiStudy, name: "Lofi Study", },
    { src: mscOnceInParis, name: "Once in Paris" },
    { src: mscTvariTokyocCafe, name: "Tvari Tokyo Cafe" },
  ],
];

const assets = {
  aboutUsJs,
  locateJs,
  menuJs,
  starsJs,
  mainJs,
  footerJs,
  playerJs,
};
export default assets;
