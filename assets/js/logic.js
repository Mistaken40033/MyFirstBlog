const username = document.getElementById('id');
const title = document.getElementById('owner');
const content = document.getElementById('information');
const submit = document.getElementById('enter');

function saveInformation() {
  const info = {
    username: id.value,
    title: owner.value.trim,
    content: information.value.trim(),
 };
  localStorage.setItem('id', 'owner', 'information', JSON.stringify(info));
}

function renderInfo(){
  const info = JSON.parse(localStorage.getItem('info'));
  
  if (info !== null) {
    document.getElementById('id').innerHTML = info.username;
    document.getElementById('owner').innerHTML = info.title;
    document.getElementById('information').innerHTML = info.content;
  }
}

  submit.addEventListener('click', function(event) {
      event.preventDefault();
  });

  function init() {
    renderInfo();
  }
  init();


// //Get info on HTML
// //Store the data UserName, Title, Content
// //Through "submit"