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
        delay:-1,
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


document.querySelectorAll(".elem").forEach(function(elem){
    var rot =0; var dif=0;
    elem.addEventListener("mousemove",function(details){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            duration:0.5,
        });
    });


    elem.addEventListener("mouseleave", function (dets) {
       
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          ease: Power3,
          
        });
      });

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        dif = dets.clientX - rot;
        rot = dets.clientX;
        gsap.to(elem.querySelector("img"), {
          opacity: 1,
          ease: Power3,
          top: diff,
          left: dets.clientX,
          rot: gsap.utils.clamp(-20, 20, dif * 0.5),
        });
      });

});

