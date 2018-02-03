<template>
  <div>
    <top :slogan="slogan"/>
    <navigation/>
    <who-we-are/>
    <portfolio/>
    <projects/>
    <contact/>

    <button id="toTop" title="Go to top">&#8593;</button>
  </div>
</template>

<script>
  import Top from "./Top";
  import Navigation from "./Navigation";
  import WhoWeAre from "./WhoWeAre";
  import Portfolio from "./Portfolio";
  import Projects from "./Projects";
  import Contact from "./Contact";
  import animateScrollTo from 'animated-scroll-to';

  export default {
    components: {
      Contact,
      Projects,
      Portfolio,
      WhoWeAre,
      Navigation,
      Top
    },
    name: 'Home',
    data() {
      return {
        slogan: 'Technologies homunkulus'
      }
    },

    methods: {},

    mounted() {
      let toTop = document.querySelector('#toTop');
      let links = document.querySelectorAll('.navbar a');
      let navbar = document.querySelector('.navbar');
      let sticky = navbar.offsetTop;

      window.onscroll = function () {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
          toTop.style.display = 'block'
        } else {
          navbar.classList.remove("sticky");
          toTop.style.display = 'none'
        }
      };

      toTop.addEventListener('click', function () {
        animateScrollTo(0);
      });

      links.forEach(a => {
        a.addEventListener('click', ev => {
          ev.preventDefault();
          animateScrollTo(document.querySelector(a.attributes['href'].nodeValue).offsetTop);
        })
      });
    }
  }
</script>
