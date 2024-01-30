

function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    // let main = document.querySelector(".main")
    // let img = document.querySelector(".img")
    // let duration = document.querySelector(".duration")
    // let content = document.querySelector(".content")
    // let heading = document.querySelector(".heading")
    // let small_content = document.querySelector(".small-content")
    // let chnl_name = document.querySelector(".chnl-name")
    // let views = document.querySelector(".views")
    // let old = document.querySelector(".old")
    let container = document.querySelector(".container")

    console.log(container);

    container.insertAdjacentHTML("beforeend", `<div class="main" style = "background-color: black">
    <div class="img" style = "background-image: url('${thumbnail}')">
        <div class="duration">${duration}</div>
    </div>
    <div class="content">
        <div class="heading">${title}</div>
        <div class="small-content">
            <span class="chnl-name">${cName}</span>
            <span class="views">${views} views</span>
            <span class="old">${monthsOld} monnths ago</span>
        </div>
    </div>`)

}


createCard("Introduction to Backend | Sigma Web Dev video #5", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")