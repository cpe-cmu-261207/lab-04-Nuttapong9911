let currentInput = ''

const input = document.getElementById('input')
input.addEventListener('input', ev => {
    currentInput = ev.target.value

})

const maindiv = document.createElement('div')
const donediv = document.createElement('div')
    donediv.setAttribute("class", "donediv")

const addingTask = (() => {

    const div = document.createElement('div')
    div.setAttribute("class", "taskdiv")
    const p = document.createElement('p')
    p.innerHTML = currentInput
    
    const buttondiv = document.createElement('div')
    buttondiv.setAttribute("class", "buttondiv")

    const done = document.createElement('button')
    done.setAttribute("class", "donebutton")
    done.innerText = "Done"

    done.addEventListener('click', () => {
        donediv.append(div)
        div.removeChild(div.childNodes[1])
        div.removeChild(div.childNodes[2])
    })



    const del = document.createElement('button')
    del.setAttribute("class", "delbutton")
    del.innerText = "Delete"

    del.addEventListener('click', () => {
        div.setAttribute('id', ('deleted'))
        const x = document.getElementById('deleted')
        x.remove();
    })

    
    buttondiv.append(done, del)

    div.append(p, buttondiv)

    input.value = ''
    maindiv.append(div)
    document.body.append(maindiv, donediv)

    done.addEventListener('click', () => {
        div.setAttribute("id", "test")
    })


})

input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' && input.value) {
        addingTask()
    } else if (ev.key === 'Enter' && !(input.value)) {
        alert("The box needs to be filled!")
    }
})


const addToList = () => {
    if (input.value) {
        addingTask()
    } else if (!input.value) {
        alert("The box needs to be filled!")
    }
}

// const testnode = document.createElement('div')
// const pt1 = document.createElement('p')
// pt1.innerText = "abc1"
// const pt2 = document.createElement('p')
// pt2.setAttribute('id', 'x')
// pt2.innerText = "abc2"
// const pt3 = document.createElement('p')
// pt3.innerText = "abc3"

// testnode.append(pt1,pt2,pt3)
// document.body.appendChild(testnode)
// const removex = document.getElementById('x')
// removex.remove()






