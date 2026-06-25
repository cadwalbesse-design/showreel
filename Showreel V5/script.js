const section =
document.querySelector('.showreel');

const centerVideo =
document.querySelector('#center-video');

const cards =
document.querySelectorAll('.video-card');

cards.forEach(card => {

card.style.opacity = "0";

card.style.transform =
"translateY(60px) scale(.85)";

});

function lerp(start,end,t){

return start + (end-start)*t;

}

window.addEventListener('scroll',()=>{

const rect =
section.getBoundingClientRect();

let progress = Math.min(
Math.max(
(-rect.top) /
(section.offsetHeight-window.innerHeight),
0
),
1
);

progress = Math.max(
0,
(progress - 0.15) / 0.85
);

const width =
lerp(95,34,progress);

const height =
lerp(95,28,progress);

centerVideo.style.width =
width + 'vw';

centerVideo.style.height =
height + 'vh';

cards.forEach((card,index)=>{

const delay =
0.15 + (index * 0.03);

const p =
Math.max(
0,
Math.min(
1,
(progress-delay)/0.35
)
);

card.style.opacity = p;

card.style.transform =
`translateY(${60-(60*p)}px)
scale(${0.85+(0.15*p)})`;

});

});