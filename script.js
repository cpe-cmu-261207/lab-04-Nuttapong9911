let currentInput = ''


// get input from user
const input = document.getElementById('input')
input.addEventListener('input', ev => {
    currentInput = ev.target.value
})


//create maindiv for uncompleted task
//create donediv for completed task
const maindiv = document.createElement('div')
const donediv = document.createElement('div')

//set id for local storing
maindiv.setAttribute("id", "maindiv")
donediv.setAttribute("class", "donediv")
donediv.setAttribute("id", "donediv")
document.body.append(maindiv, donediv)


//get maindiv from local
if (localStorage.storedTask) {
    document.getElementById("maindiv").innerHTML = JSON.parse(localStorage.storedTask)
}

//get donediv from local
if (localStorage.storedDoneTask) {
    document.getElementById("donediv").innerHTML = JSON.parse(localStorage.storedDoneTask)
}

if(maindiv.firstChild && donediv.firstChild){
    if(maindiv.firstChild.firstChild.innerHTML === donediv.lastChild.firstChild.innerHTML)
    maindiv.removeChild(maindiv.childNodes[0])
}

var nd = document.querySelectorAll(".donebutton")
for (let i = 0; i < nd.length; i++) {
    nd[i].setAttribute("id", "x")
    var y = document.getElementById("x").parentNode.parentNode
    nd[i].addEventListener('click', () => {
        donediv.append(y)
        y.removeAttribute("class", "background-color")
        y.removeChild(y.childNodes[1])
        localStorage.storedDoneTask = JSON.stringify(donediv.innerHTML)
    })
}

var ndl = document.querySelectorAll(".delbutton")
for (let i = 0; i < ndl.length; i++) {
    ndl[i].setAttribute('id', "test3")
    var y = document.getElementById("test3").parentNode.parentNode
    ndl[i].addEventListener('click', () => {
        y.setAttribute('id', ('deleted'))
        const x = document.getElementById('deleted')
        x.remove();
        localStorage.storedDoneTask = JSON.stringify(maindiv.innerHTML)
    })
}

// adding task function
const addingTask = (() => {

    //create div and p
    const div = document.createElement('div')
    div.setAttribute("class", "taskdiv")
    const p = document.createElement('p')
    p.innerHTML = currentInput

    //create button done and delete
    const buttondiv = document.createElement('div')
    buttondiv.setAttribute("class", "buttondiv")

    // done

    const done = document.createElement('button')
    done.setAttribute("class", "donebutton")
    done.setAttribute("id", "button")
    done.innerText = "Done"

    // when done is pressed, put div from maindiv to donediv 
    // then stored both donediv and maindiv
    done.addEventListener('click', () => {
        donediv.append(div)
        div.removeAttribute("class", "background-color")
        div.removeChild(div.childNodes[1])
        localStorage.storedDoneTask = JSON.stringify(donediv.innerHTML)
        localStorage.storedTask = JSON.stringify(maindiv.innerHTML)

    })

    //delete
    const del = document.createElement('button')
    del.setAttribute("class", "delbutton")
    del.setAttribute("id", "button")
    del.innerText = "Delete"

    del.addEventListener('click', () => {
        div.setAttribute('id', ('deleted'))
        const x = document.getElementById('deleted')
        x.remove();
        localStorage.storedTask = JSON.stringify(maindiv.innerHTML)
    })

    //appending
    buttondiv.append(done, del)
    div.append(p, buttondiv)
    maindiv.append(div)

    //box becomes blank after be adding
    input.value = ''

    localStorage.storedTask = JSON.stringify(maindiv.innerHTML)
})



//adding task by enter
input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' && input.value) {
        addingTask()
    } else if (ev.key === 'Enter' && !(input.value)) {
        alert("The box needs to be filled!")
    }
})


//adding task by add button
const addToList = () => {
    if (input.value) {
        addingTask()
    } else if (!input.value) {
        alert("The box needs to be filled!")
    }
}

//for clearing loaclStorage
// -------------------------

// localStorage.clear()

// -------------------------