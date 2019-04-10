/* 
--<>--<>--<>--<>--<>--<>-- TWEENMAX --<>--<>--<>--<>--<>--<>--
Syntaxe de TweenMax :
TweenMax.to("#target",duration,{vars});
--<>--<>--<>--<>--<>-- .to / .from / .staggerFrom / .staggerTo --<>--<>--<>--<>--<>--<>--
.to (du résultat CSS vers TweenMax)
.from (du résultat TweenMax vers CSS)
.staggerFrom & .staggerTo (Pareil mais avec une animation différée)
--<>--<>--<>--<>--<>-- Propriétés --<>--<>--<>--<>--<>--<>--
{y:800} OU {x : 600}
{left : 600}
{backgroundColor : “white”}
{borderColor : “#fff”}
{padding : 20}
{borderRadius : 25} ou {borderRadius : “50%”}
{rotation : 360}
{scale : 0.5} ou {scale : “50%”} 
{opacity : 0.8} ou {opacity : “80%”}
{ease:Back.easeOut} ou {ease:Elastic.easeOut} etc,...
https://greensock.com/ease-visualizer
{delay:0.5}
Exemple :
TweenMax.from(".class",2,{
    x:600,
    rotation: 360,
    opacity: 1,
})
Dans le cas d'un stagger, il faut rajouter un interval :
TweenMax.staggerFrom(".class",2,{
    x:600,
    rotation: 360,
    opacity: 1,
},0.5)
*/
let controller = new ScrollMagic.Controller();
// ------------------------------------------------- SLIDE 1 (Play with Gsap)
let title = new TimelineMax();
title
  .from("#play", 1.5, { x: -600, opacity: 0 })
  .from("#with", 1.5, { opacity: 0 })
  .from("#gsap", 1.5, { y: +600, opacity: 0 }, "-=1");

// ------------------------------------------------- SLIDE 2 (BANNIERE CHALET)
let chalet = new TimelineMax();
chalet
  .from("#banner1", 1, { x: -600, rotation: -360, opacity: 0 })
  .from(
    "#banner2",
    1,
    {
      y: +300,
      opacity: 0,
      ease: Back.easeOut.config(3),
      scale: 0.5
    },
    "-=1"
  )
  .from("#banner3", 1, { x: +600, rotation: 360, opacity: 0 }, "-=1");

new ScrollMagic.Scene({
  triggerElement: "#slidein2",
  triggerHook: "onLeave"
})
  .setTween(chalet)
  .addTo(controller)
  .addIndicators()
  .setPin("#slidein2");
// ------------------------------------------------- SLIDE 3 (3 BLOCS DE TEXTE)
let text = new TimelineMax();
text.staggerFrom(
  ".box",
  0.8,
  {
    x: -600,
    opacity: 0,
    ease: Back.easeOut
  },
  0.5
);

new ScrollMagic.Scene({
  triggerElement: "#slidein3",
  triggerHook: "onLeave"
})
  .setTween(text)
  .addTo(controller)
  .addIndicators()
  .setPin("#slidein3");
// ------------------------------------------------- SLIDE 4 (Zoom image montagne + texte)
let moutain = new TimelineMax();
moutain.to("#mountain2", 1, { scale: 2.5, ease: Back.easeOut }).staggerFrom(
  ".staggerline",
  2,
  {
    x: +800,
    ease: Bounce.easeOut
  },
  0.5
);
new ScrollMagic.Scene({
  triggerElement: "#slidein4",
  triggerHook: "onLeave"
})
  .setTween(moutain)
  .addTo(controller)
  .addIndicators()
  .setPin("#slidein4");
// ------------------------------------------------- SLIDE 5 (Animation de rideaux + texte)
let curtain = new TimelineMax();
curtain
  .from("#curtainLeft", 1, { y: 800, height: 0 })
  .from("#curtainRight", 1, { x: 800, height: 0 })
  .from("#lastText", 1, { opacity: 0, scale: 3 });

new ScrollMagic.Scene({
  triggerElement: "#slidein5",
  triggerHook: "onLeave"
})
  .setTween(curtain)
  .addTo(controller)
  .addIndicators()
  .setPin("#slidein5");
/*
--<>--<>--<>--<>--<>--<>-- TIMELINEMAX --<>--<>--<>--<>--<>--<>--
1. Créer une variable qui contient la timeline
    var MonAnimation = new TimelineMax();
2.
Ensuite, rajouter vos animation dans cette variable comme ceci :
var anim1 = TweenMax.to...
var anim2 = TweenMax.to...
MonAnimation
    .add(anim1)
    .add(anim2)
OU
MonAnimation
    .to(".class",2,{params})
    .from(".class",2,{params})
--<>--<>--<>--<>--<>-- SCROLLMAGIC --<>--<>--<>--<>--<>--<>--
1. On commence par initialiser le controller :
var controller = new ScrollMagic();
2. Créer une scène
new ScrollMagic.Scene({
    triggerElement: "#id", // Le point de commencement de l'animation
    triggerHook: "onEnter",// onEnter, onCenter, onLeave
})
    .setTween("#id")// Ajoute une animation gsap
    .addTo(controller) // Ajoute l'animation au controller
    .addIndicators(); // Permet de voir les triggers
    .setPin("#id"); // fixe une div au scroll (effet de volets)
*/
