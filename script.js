const error = document.getElementById("error")
error.classList.add("error")

const content = document.getElementById("content")

var ro = 0

function addplayer() {
    const fname = document.getElementById("fname").value
    const lname = document.getElementById("lname").value
    const country = document.getElementById("country").value
    const score = +document.getElementById("score").value
    var fullname = fname+" "+lname

    if(fname == "" || lname == "" || country == "" || score == ""){
        error.innerText = "All fields are requied"
    }else{
        error.innerText = ""
        const date = new Date()

        const row = document.createElement("div")
        row.id = `row${ro}`
        row.classList.add("row")
        content.appendChild(row)
        row.innerHTML +=  `
        <div class="name">
        <h4>${fullname.toUpperCase()}</h4>
        <span id="date">${date}</span>
        </div>
        <div class="country"><h4>${country.toUpperCase()}</h4></div>
        <div class="score"><h4 id="score${ro}">${score}</h4></div>
        <div class="items">
            <button class="delete" onclick = "dlt(${ro})" ><span class="material-symbols-outlined">delete</span></button>
            <button class="incbtn" id="incbtn${ro}" onclick = "inc(${ro})" >+5</button>
            <button class="incbtn" id="decbtn${ro}" onclick = "dec(${ro})" >-5</button>
        </div>
        `    
        ro+=1;
    }
}
function dlt(ro) {
    var r = document.getElementById(`row${ro}`)
    r.innerHTML = ""
    r.classList.remove("row")
}

function inc(ro) {
    var r = document.getElementById(`score${ro}`)
    r.innerText =+r.innerText+5
}

function dec(ro) {
    var r = document.getElementById(`score${ro}`)
    if(r.innerText <= 5)
    {
        r.innerText = 0
    }else{
        r.innerText =+r.innerText-5
    }
}