
  //dinosaur animation 

  import { getAnimationNames, getEasingNames } from '/dist/utilities/animation.js';

  const container = document.querySelector('.animation-sandbox');
  const animation = container.querySelector('sl-animation');
  const animationName = container.querySelector('.controls sl-select:nth-child(1)');
  const easingName = container.querySelector('.controls sl-select:nth-child(2)');
  const playbackRate = container.querySelector('sl-input[type="number"]');
  const animations = getAnimationNames();
  const easings = getEasingNames();

  animations.map(name => {
    const option = Object.assign(document.createElement('sl-option'), {
      textContent: name,
      value: name
    });
    animationName.appendChild(option);
  });

  easings.map(name => {
    const option = Object.assign(document.createElement('sl-option'), {
      textContent: name,
      value: name
    });
    easingName.appendChild(option);
  });

  animationName.addEventListener('sl-change', () => (animation.name = animationName.value));
  easingName.addEventListener('sl-change', () => (animation.easing = easingName.value));
  playbackRate.addEventListener('sl-input', () => (animation.playbackRate = playbackRate.value));



  //image gallery slide
(function() {
    function scrollH(e) {
        // Prevent scroll default
        e.preventDefault();
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('.slidea').scrollLeft -= (delta * 40);
    }
    if (document.querySelector('.slidea').addEventListener) {
        document.querySelector('.slidea').addEventListener('mousewheel', scrollH, false);
        document.querySelector('.slidea').addEventListener('DOMMouseScroll', scrollH, false);
    }
})();
