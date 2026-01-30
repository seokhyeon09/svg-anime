const btn = document.querySelector('.btn');
btn.addEventListener('click', nameDraw)

function nameDraw(){
    anime({
        targets:'.name path',
        strokeDashoffset: [anime.setDashoffset, 0,],
        duration:1000,
        delay:function(el, i){
            return i*250
        },
        // 가속화함수
        easing:'easeInOutSine',
        //끝점에서 시작점으로
        direction: 'alternate',
    })
}

// createTimeline 이 신버전용이라 안돌아감
const tl = anime.timeline({
    defaults: {
        //기존엔 1s가 1초지만 여기에선 1000이 1초
        duration: 750,
        // 기본제공형태 easing 검색
        easing:'easeOutBounce'
    },
});

tl.add({
    // 타임라인이 실행될 대상 지정
    targets:'.ellipse path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing:'easeInOutSine',
    duration:2500,
    // delay:function(el, i){return i*250;},
    loop:true,
    // 클래스가 여러개있을때 순차적으로 진행
    direction:'alternate',
});
tl.add({
    targets:'.ico',
    opacity:1,

})

const path=anime.path('.ellipse path')
anime({
    targets: '.ellipse path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 10000,
    // loop: true,
    // direction: 'alternate'
})
anime({
    targets: '.ico',
    translateX: path('x'), 
    translateY: path('y'), 
    rotate: path('angle'),
    easing: 'easeInOutSine', 
    duration: 3000,          
    loop: true,
    direction: 'alternate'
});