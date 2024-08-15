const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function fpage(){
    var tl= gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration:1,
        ease: Expo.easeInOut
    })
    .to(".boundt",{
        y: 0,
        ease: Expo.easeInOut,
        duration:1,
        stagger:.1
    })
    .from("#herofoot",{
        y: -10,
        opacity:0,
        duration:1.5,
        delay: -4,
        ease:Expo.easeInOut
    })
}

function circleMfolo(){
    window.addEventListener("mousemove",function(dets){
       document.querySelector("#mincir").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}
circleMfolo();
fpage();
