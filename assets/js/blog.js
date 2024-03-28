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
//Read Local Storage
//Loop through the blogs, populating in the contatiner area
const dataArray = JSON.parse(localStorage.getItem('data'));
{/* <div class="box">Box 1</div> */}
for (let index = 0; index < dataArray.length; index++) {
  
  const boxDiv = document.createElement("div")
  // <div></div>


  boxDiv.classList.add("box")
  // <div class="box"></div>

  boxDiv.textContent = dataArray[index].title + " - " + dataArray[index].content
  // <div class="box">Title - Content</div>

  document.getElementById("data-container").append(boxDiv)

}