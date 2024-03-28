const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submit = document.getElementById('enter');
const dataArray = JSON.parse(localStorage.getItem('data'));

function saveInformation() {
  const info = {
    username: username.value,
    title: title.value,
    content: content.value,
 };

dataArray.push(info)
  localStorage.setItem("data", JSON.stringify(dataArray));
}
// "owner", "information"
function renderInfo(){
  const info = JSON.parse(localStorage.getItem('data'));
  
  if (info !== null) {
    document.getElementById('id').innerHTML = info.username;
    // document.getElementById('owner').innerHTML = info.title;
    // document.getElementById('information').innerHTML = info.content;
  }
}

  submit.addEventListener('click', function(event) {
      event.preventDefault(); 
      saveInformation()
      location.href='blog.html'
  });

  function init() {
    renderInfo();
  }
  init();


// //Get info on HTML
// //Store the data UserName, Title, Content
// //Through "submit"