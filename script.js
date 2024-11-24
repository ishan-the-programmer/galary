function toggleMenu()
{
   var menuIcon = document.querySelector('.menu-icon');
   var menuOptions = document.querySelector('.menu-options');
   menuIcon.classList.toggle('open');
}

// Hide the menu when clicking outside of it
window.onclick = function(event) {
   if (!event.target.closest('.menu-container')) {
       var menuIcon = document.querySelector('.menu-icon');
       var menuOptions = document.querySelector('.menu-options');
       if (menuIcon.classList.contains('open')) {
           menuIcon.classList.remove('open');
       }
   }
}
