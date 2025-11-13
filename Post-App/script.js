// Edit Function

function edit() {

    var mainParent = event.target.parentNode.parentNode.parentNode.parentNode.parentNode
    var parent = event.target.parentNode.parentNode.parentNode.parentNode
    var parent1 = event.target.parentNode.parentNode.parentNode

    var Eimage = mainParent.childNodes[1].src
    var Etitle = parent.childNodes[1].innerHTML
    var Econtent = parent.childNodes[3].innerHTML
    var Ename = parent1.childNodes[1].childNodes[3].childNodes[1].innerHTML
    var Eimg = parent1.childNodes[1].childNodes[1].childNodes[1].src

    var title = document.getElementById("title").value = Etitle
    var content = document.getElementById("content").value = Econtent
    var pic = document.getElementById("pic").src = Eimg
    var name = document.getElementById("name").value = Ename
    var selectImage = Eimage


    mainParent.remove()


}


// Delete function
function dlt() {
    var mainParent = event.target.parentNode.parentNode.parentNode.parentNode.parentNode
    mainParent.remove()

}



// Image function

var selectImage = ''

function image() {
    var imgs = document.querySelectorAll(".img")
    imgs.forEach(function (img) {
        img.classList.remove("select")
    })
    event.target.classList.add("select")
    selectImage = event.target.src




}


// post function

function submit(e) {
    var name = document.getElementById("name").value
    var title = document.getElementById("title").value
    var content = document.getElementById("content").value
    var pic = document.getElementById("pic")
    var image = pic.files[0]
    var imgURL = URL.createObjectURL(image)
    console.log(imgURL);



    var post = document.querySelector(".post")
    var finalImage = selectImage
    let currentDate = new Date();
    let dateTime = currentDate.toLocaleString(); 

    post.innerHTML += `
       <div class="card" style="min-width: 23rem;">
                            <img src="${finalImage}" class="card-img-top" alt="..." style="height: 150px;">
                            <div class="card-body">
                                <h3 class="card-title">${title}</h3>
                                <p class="card-text">${content}</p>
                                <hr>
                                <div class="profile-main">
                                   <div class="pro">
                                     <div class="profile">
                                        <img src="${imgURL}" alt="">
                                    </div>
                                        <div class="profile2">
                                        <h5 id="name">${name}</h5>
                                    <p class="post-time">${dateTime}</p>
                                 </div>                                
                                   </div>
                                      <div class="btn-main">
                                    <button onclick='edit()' id="edit"><i class="fa-solid fa-pencil"></i></button>
                                    <button onclick='dlt()' id="delete"><i class="fa-solid fa-trash"></i></button>
                                </div>
                                </div>
                              
                            </div>
                        </div>`

    var name = document.getElementById("name").value = ""
    var title = document.getElementById("title").value = ""
    var content = document.getElementById("content").value = ""
    var pic = document.getElementById("pic").value = ""

}



