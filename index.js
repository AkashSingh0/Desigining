gsap.to(".header-heading h3", {
    y:-30,
    duration:1,
    opacity:1,
})
const t = gsap.timeline();
t.to(".main-heading-one h1, .main-heading-two h1",{
    y:-232,
    opacity: 1,
    stagger:.1,
    // repeat:10;
})