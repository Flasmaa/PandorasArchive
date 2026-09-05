const backHtml = `
<style>
  .fixed-back {
    position: fixed !important;
    top: 12px; left: 12px;
    width: 70px; height: 70px;
    z-index: 2147483647 !important;
    display: inline-flex; align-items: center; justify-content: center;
    pointer-events: auto; transition: transform 160ms ease, opacity 160ms ease;
    transform: translateZ(0); will-change: transform, opacity;
  }
  .fixed-back img { width: 100%; height: auto; display: block; pointer-events: none; }
  .fixed-back:hover { transform: translateY(-4px) scale(1.03);}
   @media (max-width: 480px) { .fixed-back { width: 48px; height: 48px; top: 8px; left: 8px; } }
</style>
<a href="scroller.html" class="fixed-back" aria-label="Back" title="Back">
  <img src="img/back.svg" alt="Back" onerror="this.onerror=null;this.src='img/back.png'">
</a>
`;

var placeholder = document.getElementById('back-placeholder');
if (placeholder) {
  placeholder.innerHTML = backHtml;
} else if (document.body) {
  document.body.insertAdjacentHTML('afterbegin', backHtml);
} else {
  document.addEventListener('DOMContentLoaded', function() {
    var ph = document.getElementById('back-placeholder');
    if (ph) ph.innerHTML = backHtml; else document.body.insertAdjacentHTML('afterbegin', backHtml);
  });
}
/* pang ayos ng code sabi ni youtube */
const load = (src) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.body.appendChild(script);
};
