const toggleSwitch = document.getElementById('toggleSwitch');
const body = document.body;

toggleSwitch.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if(mode === 'dark') {
    mode = 'light';
    container.setAttribute ('class', 'light');
  }
  else {
    mode = 'dark';
    container.setAttribute('class','dark');
  }
});
