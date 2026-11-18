document.addEventListener('DOMContentLoaded', () => {
  // --- 1. ページトップボタンのフェードイン/アウト ---
  const pagetop = document.querySelector('.pagetop');
  
  if (pagetop) {
    window.addEventListener('scroll', () => {
      // スクロール量が500pxを超えたら 'is-show' クラスをつけて表示
      if (window.scrollY > 500) {
        pagetop.classList.add('is-show');
      } else {
        pagetop.classList.remove('is-show');
      }
    });
  }

  // --- 2. ページ内スムーススクロール ---
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // "#" または空の場合のターゲット（ページ最上部）
      const target = (href === '#' || href === '') 
        ? document.documentElement 
        : document.querySelector(href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
