function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
loadingAnimation();
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
locomotiveAnimation();

function navAnimation(){
    var nav = document.querySelector("nav")

nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline()

    tl.to("#nav-bottom", {
        height: "21vh",
        duration: 0.5
    })
    tl.to(".nav-part2 h5", {
        display: "block",
        duration: 0.1

    })
    tl.to(".nav-part2 h5 span", {
        y: 0,
        // duration:0.3,
        stagger: {
            amount: 0.5
        }
    })
})

nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span", {
        y: 25,
        stagger: {
            amount: 0.2
        }
    })
    tl.to(".nav-part2 h5", {
        display: "none",
        duration: 0.1
    })
    tl.to("#nav-bottom", {
        height: 0,
        // duration: 0.3
    })
})

}
navAnimation();

// Page 2 animation

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {

            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 45,
                y: dets.y - elem.getBoundingClientRect().y - 115
            })
        })
    })

  
}

page2Animation();

// page3 Animation
function page3VideoAnimation() {
    var page3 = document.getElementById("page3");
    var video = document.querySelector("#page3 video");
    var cursor = document.getElementById("cursor");

    // Cursor Animation: Mouse Movement
    page3.addEventListener("mousemove", function (event) {
        // Move the cursor to follow the mouse
        gsap.to(cursor, {
            left: event.clientX + "px", // Position relative to the viewport
            top: event.clientY + "px",
            duration: 0.1, // Slight delay for smoothness
            ease: "power2.out",
        });
    });

    // Cursor Hover Animation: Video
    page3.addEventListener("mouseenter", function () {
        cursor.innerHTML = "WATCHOUR <br> SHOWREEL";
        gsap.to(cursor, {
            scale: 5,
            backgroundColor: "#0BA34E",
            marginTop :10 
        });
    });

    page3.addEventListener("mouseleave", function () {
        cursor.innerHTML = ""; // Reset text
        gsap.to(cursor, {
            scale: 0,
            backgroundColor: "#fff",
        });
    });

    // Video Animation: Play and Pause
    var page3Center = document.querySelector(".page3-center");

    page3Center.addEventListener("click", function () {
        video.play();
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0,
        });
    });

    video.addEventListener("click", function () {
        video.pause();
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px",
        });
    });
}

page3VideoAnimation();



// page4 Animation

function page4Animation() {
    const sections = document.querySelectorAll(".sec-right");

    sections.forEach(function (section) {
        const video = section.querySelector("video"); 
        section.addEventListener("mouseenter", function () {
            video.style.opacity = 1; 
            video.play(); 
        });
        section.addEventListener("mouseleave", function () {
            video.style.opacity = 0; 
            video.pause();
        });
    });
}

page4Animation();

function page6Animations() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
    gsap.from("#btm6-part3 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part3",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
    gsap.from("#btm6-part4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part3",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })

}

page6Animations();
