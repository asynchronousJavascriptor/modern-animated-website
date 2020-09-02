let circle = document.querySelector('#circle');

window.addEventListener('mousemove', function(details){
    let xValue = details.pageX;
    let yValue = details.pageY;

    setTimeout(function(){
        circle.style.top = yValue + 'px';
        circle.style.left = xValue + 'px';
    }, 100)
})

$('#down #text h3').textillate({
    autoStart: false,
    in: {
        effect: 'fadeInUp',
        delay: 15
    },
    callback: function () {
        gsap.fromTo('#down #text img', {
            opacity: 0,
            y: -30,
            duration: 2,
            ease: 'Expo.easeInOut'
        }, {
            opacity: 1,
            y: 0,
        })
    }
})


$('#hero h1').textillate({
    in: {
        effect: 'fadeInUp'
    },
    loop: true,
    out: {
        effect: 'fadeOutRight'
    }
})

gsap.to('.fader', {
   scrollTrigger: {
       trigger: '#down',
       start: 'top 5%',
       toggleActions: 'play pause resume reverse',
   },
   opacity: 0,
   y: -100,
   stagger: .3,
   duration: 2,
   onComplete: function(){
    $('#down #text h3').textillate('start')
   }
})

