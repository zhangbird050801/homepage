// 添加视差效果
var image = document.getElementsByClassName('banner-pic-img');
new simpleParallax(image, {
  orientation: 'up',
  scale: 1.2,
  delay: 2,
  transition: 'cubic-bezier(0,0,0,1)',
  maxTransition: 50,
  overflow: true
});

// 添加菜单点击事件
var menuButton = document.getElementById("nav-menu");
menuButton.addEventListener('click',function(){
  if(document.getElementById("body").classList.contains('show-menu')) {
    homepage.hideMenu();
  }else {
    homepage.showMenu();
  }
},false)

//关闭菜单
$('.menu-list').click(function () {
	homepage.hideMenu();
});

//阻止菜单滚动
document.querySelector('.menu-list').addEventListener('wheel',(e)=>{
  e.preventDefault()
})


// 检查AVIF图片是否支持，并处理图片加载格式
// 如不支持，则换成webp格式
function checkAvif() {
  // 从页面中提取第一个AVIF图片链接
  function getFirstAvifUrl() {
      const images = document.querySelectorAll('img');
      for (let img of images) {
        if (img.src.endsWith('.avif')) {
          return img.src;
        }
      }
      return null;
    }
    
    // 检测浏览器是否支持AVIF格式
    function supportsAvif(url) {
      return new Promise(resolve => {
        const avif = new Image();
        avif.src = url;
        avif.onload = () => {
          resolve(true);
        };
        avif.onerror = () => {
          resolve(false);
        };
      });
    }
    
    // 替换图片URL中的avif为webp
    function replaceAvifWithWebp() {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (img.src.endsWith('.avif')) {
          console.log("Replacing AVIF with WebP for image:", img.src);
          img.src = img.src.replace('.avif', '.webp');
        }
      });
    }
    
    const firstAvifUrl = getFirstAvifUrl(); // 获取第一个AVIF图片链接
    if (firstAvifUrl) {
      // 使用第一个AVIF图片链接进行检测
      supportsAvif(firstAvifUrl).then(supported => {
        if (!supported) {
          replaceAvifWithWebp();
        }
      });
    }
}

var homepage = {
  //显示菜单
  showMenu: function() {
    document.getElementById("body").classList.add("show-menu");
  },

  hideMenu: function() {
    document.getElementById("body").classList.remove("show-menu");
  },

  //跳转到id
  scrollTo(id) {
    let target = document.getElementById(id);
    if (!target) return;
    let targetPosition = target.offsetTop - 60;
    let startPosition = window.scrollY;
    let distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, distance, 600);
      window.scrollTo(0, run);
      if (timeElapsed < 600) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
}

//滚动页面动画
function scrollToTopWithAnimation() {
  const duration = 600; // in milliseconds
  const startPosition = window.pageYOffset;
  const distance = -window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const scrollY = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, scrollY);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

function initNav(){
  const n = document.querySelector('.nav'); 
  n.classList.toggle("top", document.documentElement.scrollTop===0);
}

window.addEventListener('scroll',function(){
  initNav()
})

initNav()

document.addEventListener('DOMContentLoaded', function () {
  checkAvif()
})