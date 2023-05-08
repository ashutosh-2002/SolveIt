localStorage.setItem('time', '600');
localStorage.setItem('score', '0');

const hi = document.querySelector('#hello')

hi.textContent = 'Hello, ' + JSON.parse(localStorage.getItem('currUser')).name;
