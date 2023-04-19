/*
gsap.from('.homepage-btn', {duration:1, delay: .5, stagger:1, y:'-400%', ease:'bounce'})
gsap.from('.work-link', {duration:1, delay: 1, stagger:1, y:'-400%', ease:'bounce'})
gsap.from('.about-link', {duration:1, delay: 1.5, stagger:1, y:'-400%', ease:'bounce'})
gsap.to('.work-content', {duration: 1, x: 0, ease:'rough', delay: 1.8})
gsap.to('.footer', {duration:1.5, y:0, ease:'elastic', delay: 2})
*/

const timeline = gsap.timeline({defaults: {duration:0.5, delay:0.5 }});
timeline
  .from('.homepage-btn', { delay: .5, stagger:1, y:'-400%', ease:'circ'})
  .from('.work-link', { stagger:1, y:'-400%', ease:'circ'})
  .from('.about-link', { stagger:1, y:'-400%', ease:'circ'})
  .to('.footer', { y:0, ease:'expo' })
  .to('.work-content', { x: 0, ease:'rough' })

console.log('version6');