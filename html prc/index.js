// function toggleSidebar(){
//     document.getElementById("sidebar").classList.toggle("active");
// }


const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview-container");
const error = document.getElementById("error");
const browseBtn = document.getElementById("browseBtn");

/* OPEN FILE SELECT */
browseBtn.onclick = () => fileInput.click();

/* DRAG EVENTS */

dropArea.addEventListener("dragover",(e)=>{
e.preventDefault();
dropArea.classList.add("highlight");
});

dropArea.addEventListener("dragleave",()=>{
dropArea.classList.remove("highlight");
});

dropArea.addEventListener("drop",(e)=>{
e.preventDefault();
dropArea.classList.remove("highlight");

const file = e.dataTransfer.files[0];
handleFile(file);
});

/* FILE SELECT EVENT */

fileInput.addEventListener("change",()=>{
const file = fileInput.files[0];
handleFile(file);
});

/* HANDLE FILE */

function handleFile(file){

preview.innerHTML="";
error.textContent="";

if(!file.type.startsWith("image/")){
error.textContent="Invalid file type! Please upload an image.";
return;
}

const reader = new FileReader();

reader.onload = function(e){

preview.innerHTML = `
<p>${file.name}</p>
<img src="${e.target.result}">
<br>
<button class="remove">Remove</button>
`;

document.querySelector(".remove").onclick = ()=>{
preview.innerHTML="";
}

}

reader.readAsDataURL(file);

}