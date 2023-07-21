$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });
  
 window.onload = function(){
    document.querySelector('#input-color').addEventListener('change', function() {
        var r = document.querySelector(':root');
        Array.from(document.querySelectorAll('.update-fill')).forEach(v => v.style.fill = this.value);
        Array.from(document.querySelectorAll('.update-stroke')).forEach(v => v.style.stroke = this.value);
        r.style.setProperty('--main-color', this.value);
    });
};