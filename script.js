let mm = gsap.matchMedia()

mm.add("(min-width: 800px", () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page-2",
            scroller: "body",
            start: "0% 80%",
            end: "0% 0%",
            // markers: true,
            scrub: 2
        }
    });
    
    tl
        .from(".text-1", { x: "-50%", duration: 1 }, "a")
        .from(".text-2", { x: "70%", duration: 1 }, "a")
    
        .to(".cards img", { y: "37%" }, "b")
    
        .to([".card-1 img", ".card-2 img", ".card-3 img", ".card-4 img"], {
            top: "14%",
            duration: 1
        }, "c")
        .to([".card-1 img"], { left: "10%" }, "c")
        .to([".card-2 img"], { left: "33%" }, "c")
        .to([".card-3 img"], { left: "56%" }, "c")
        .to([".card-4 img"], { left: "79%" }, "c");
})



mm.add("(max-width: 800px", () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page-2",
            scroller: "body",
            start: "0% 80%",
            end: "0% -20%",
            // markers: true,
            scrub: 2
        }
    });
    
    tl
        .from(".text-1", { x: "-50%", duration: 1 }, "a")
        .from(".text-2", { x: "70%", duration: 1 }, "a")
    
    
        .to([".card-1 img", ".card-2 img", ".card-3 img", ".card-4 img"], {
            left: "0%",
            duration: 1
        }, "c")
        .to([".card-1 img"], { top: "-5%" }, "c")
        .to([".card-2 img"], { top: "19%" }, "c")
        .to([".card-3 img"], { top: "43%" }, "c")
        .to([".card-4 img"], { top: "68%" }, "c");
})