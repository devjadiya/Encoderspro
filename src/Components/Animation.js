import GSAP from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
// import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import SplitType from 'split-type';
export default class Animation {

  static instance;

  constructor() {
    if (!Animation.instance) {
      this.setPath();
      GSAP.registerPlugin(ScrollTrigger, MotionPathPlugin);

      Animation.instance = this;
    }

    return Animation.instance;
  }

  setPath() {

    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load, resize"
    });
    this.timeline = GSAP.timeline();
    let mm = GSAP.matchMedia();
    const details = GSAP.utils.toArray(".desktopContentSection:not(:first-child)")
    const photos = GSAP.utils.toArray(".desktopPhoto:not(:first-child)")
    const splitTypes = document.querySelectorAll('.reveal-type');
    const allPhotos = GSAP.utils.toArray(".desktopPhoto")








    mm.add("(min-width: 1500px)", () => {
      GSAP.set(photos, { yPercent: 101 })
      GSAP.to(".right", {
        scrollTrigger: {
          trigger: ".gallery",
          start: "top top",
          end: "bottom bottom",
          pin: ".right",


        }
      });


      details.forEach((detail, index) => {

        let headline = detail.querySelector(".gallery-head ")
        let animation = GSAP.timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 1 })
        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,

          scrub: true,

        })
      })

      GSAP.fromTo("#vector1", {
        width: 0,


      }, {


        width: '100%',
        duration: 5,
        ease: "linear",
        scrollTrigger: {
          trigger: '.svg-division',
          start: 'top 37%',
          end: 'bottom bottom',
          scrub: true,

        },
      });
      GSAP.fromTo("#vector2", {
        autoAlpha: 0,


      }, {
        autoAlpha: 1,


        duration: 5,

        scrollTrigger: {
          trigger: '.svg-division',
          start: 'top 12%',
          end: 'top 44%',
          endTrigger: '',
          scrub: true,
          

        },
      });
      GSAP.fromTo("#main-line-0", {

        height: 0,

      }, {


        height: '55%',
        duration: 0.0001,

        scrollTrigger: {
          trigger: '.svg-division',
          start: 'top 12%',
          end: 'top 44%',
          endTrigger: '#item-1',
          scrub: true,
          toggleActions: 'play none none reverse'


        },
      });

      GSAP.fromTo("#item-1", {
        color: '#323131',
        scale: 0.75,
      },
        {
          scale: 1,
          color: '#FF5327',
          scrollTrigger: {
            trigger: '#item-1',
            start: 'top 44%',
            end: 'bottom bottom',
            scrub: 1,

          }
        })


      GSAP.fromTo("#item-1-white", {


      },
        {

          fill: '#ffffff',
          scrollTrigger: {
            trigger: '#item-1',
            start: 'top 44%',
            end: 'bottom bottom',
            scrub: 1,

          }
        })

      GSAP.fromTo("#main-line-1", {

        height: 0,

      }, {


        height: '102%',
        duration: 4,

        scrollTrigger: {
          trigger: '#item-1',
          start: 'bottom 45%',
          end: 'bottom 50%',
          endTrigger: '#item-2',

          scrub: .6,
          toggleActions: 'play none none reverse'


        },
      });
      GSAP.fromTo("#item-2", {
        color: '#323131',
        scale: 0.75,
      },
        {
          scale: 1,
          color: '#FF5327',
          scrollTrigger: {
            trigger: '#item-2',
            start: 'top 44%',
            end: 'bottom bottom',
            scrub: 1,

          }
        })


      GSAP.fromTo("#item-2-white", {

        fill: '#323131'
      },
        {

          fill: '#ffffff',
          scrollTrigger: {
            trigger: '#item-2',
            start: 'top 44%',
            end: 'bottom bottom',
            scrub: 1,

          }
        })

      GSAP.fromTo("#item-3", {
        color: '#323131',
        scale: 0.65,
      },
        {
          scale: .9,
          color: '#FF5327',
          scrollTrigger: {
            trigger: '#item-3',
            start: 'top 46%',
            end: 'bottom bottom',
            scrub: 1,

          }
        })


      GSAP.fromTo("#item-3-white", {

        fill: '#323131'
      },
        {

          fill: '#ffffff',
          scrollTrigger: {
            trigger: '#item-3',
            start: 'top 46%',
            end: 'bottom bottom',
            scrub: 1,

          }
        })
      GSAP.fromTo("#main-line-2", {

        height: 0,

      }, {


        height: '98%',
        duration: 4,

        scrollTrigger: {
          trigger: '#item-2',
          start: 'bottom 45%',
          end: 'bottom 50%',
          endTrigger: '#item-3',

          scrub: .6,
          toggleActions: 'play none none reverse'


        },
      });



      GSAP.fromTo("#item-4", {
        color: '#323131',
        scale: 0.65,
      },
        {
          scale: .9,
          color: '#FF5327',
          scrollTrigger: {
            trigger: '#item-4',
            start: 'top 46%',
            end: 'bottom bottom',
            scrub: 1,

          }
        })


      GSAP.fromTo("#item-4-white", {

        fill: '#323131'
      },
        {

          fill: '#ffffff',
          scrollTrigger: {
            trigger: '#item-4',
            start: 'top 46%',
            end: 'bottom bottom',
            scrub: 1,

          }
        })


      GSAP.fromTo("#main-line-3", {

        height: 0,

      }, {


        height: '84%',
        duration: 4,

        scrollTrigger: {
          trigger: '#item-3',
          start: 'bottom 45%',
          end: 'bottom 50%',
          endTrigger: '#item-4',

          scrub: .6,
          toggleActions: 'play none none reverse'


        },
      });

      GSAP.fromTo("#item-5", {
        color: '#323131',
        rotate: '360deg',
        scale: 0.65,
      },
        {
          rotate: 0,
          scale: .9,
          color: '#FF5327',
          scrollTrigger: {
            trigger: '#item-5',
            start: 'top 24%',
            end: 'bottom bottom',
            scrub: 1,

          }
        })


      GSAP.fromTo("#item-5-white", {

        fill: '#323131',

      },
        {

          fill: '#ffffff',
          scrollTrigger: {
            trigger: '#item-5',
            start: 'top 24%',
            end: 'bottom bottom',
            scrub: 1,

          }
        })


      GSAP.fromTo("#main-line-4", {

        height: 0,

      }, {


        height: '77.5%',
        duration: 4,

        scrollTrigger: {
          trigger: '#item-4',
          start: 'bottom 45%',
          end: 'bottom 50%',
          endTrigger: '#item-5',

          scrub: .6,
          toggleActions: 'play none none reverse'


        },
      });

      GSAP.fromTo("#main-line-5", {

        height: 0,

      }, {


        height: '100.5%',
        duration: 3,

        scrollTrigger: {
          trigger: '#item-5',
          start: 'bottom 26%',
          end: 'bottom 50%',
          endTrigger: '#item-5',

          scrub: .6,
          toggleActions: 'play none none reverse'


        },
      });



    })

    mm.add("all", () => {
      GSAP.to(".nav-fixed", {
        background: 'transparent',

        scrollTrigger: {
          trigger: '.wrapper',
          start: 'top top',
          end: 'bottom bottom',
       
          pin: '.nav-fixed',
          pinSpacing: false,
          toggleActions: 'play none none reverse'

        }
      })
      ScrollTrigger.create({
        trigger: '.overview',
        start: "top center",
        end: "bottom center",

        onToggle: self => {
          if (self.isActive) {
            GSAP.to('.course', {  background: '#C7BCFF' })
          } else {
            GSAP.to('.course', { background: '#FFF' })
          }
        }
      });


      ScrollTrigger.create({
        trigger: '#content',
        start: "top center",
        end: "bottom center",

        onToggle: self => {
          if (self.isActive) {
            GSAP.to('.content', {  background: '#C7BCFF' })
          } else {
            GSAP.to('.content', {  background: '#FFF' })
          }
        }
      });

      ScrollTrigger.create({
        trigger: '#instructor',
        start: "top center",
        end: "bottom center",

        onToggle: self => {
          if (self.isActive) {
            GSAP.to('.instructor', {  background: '#C7BCFF' })
          } else {
            GSAP.to('.instructor', {  background: '#FFF' })
          }
        }
      });
      ScrollTrigger.create({
        trigger: '#certificate',
        start: "top center",
        end: "bottom center",

        onToggle: self => {
          if (self.isActive) {
            GSAP.to('.certificate', {  background: '#C7BCFF' })
          } else {
            GSAP.to('.certificate', {  background: '#FFF' })
          }
        }
      });
   

      GSAP.fromTo(".gradient-stroke-text", {
        opacity: 0,
      }, {
        duration: 1,
        opacity: .8,
        scrollTrigger: {
          trigger: '.text-wrapper',
          start: 'top center',
          end: 'bottom bottom',
          scrub: 1,
          toggleActions: 'play none none reverse',


        }



      })

      splitTypes.forEach((char, i) => {

        const bg = char.dataset.bgColor
        const fg = char.dataset.fgColor

        const text = new SplitType(char, { types: 'chars' })

        GSAP.fromTo(text.chars,
          {

            color: bg,
          },
          {

            color: fg,
            duration: 0.001,
            stagger: 0.02,
            scrollTrigger: {
              trigger: char,
              start: 'top 100%',
              end: 'top 50%',
              scrub: true,

              toggleActions: 'play play reverse reverse'
            }
          })
      })











    })






  }
}
