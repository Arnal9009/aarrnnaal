const inp = document.querySelector('#inp')
const addBtn = document.querySelector('#btn')
const todoList = document.querySelector('#todo__list')
const deleteAllBtn = document.querySelector('#deleteAllBtn')
const modal = document.querySelector('#modal')


inp.onkeyup = () => {
    let userData = inp.value 

    if (userData.trim() != 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
    
}

showTasks ()

addBtn.onclick = () => {
    let userData = inp.value

    let getLocalStorage = localStorage.getItem('New ToDo')

    if (getLocalStorage == null) {
        listArr = []
    }else {
        listArr = JSON.parse(getLocalStorage)
    }

    listArr.push(userData)

    localStorage.setItem('New ToDo', JSON.stringify(listArr))

    modal.classList.add('active')

    setTimeout (() => {
        modal .classList.remove('active')
    }, 1000)

    showTasks()
}

function showTasks() {
    let getLocalStorage = localStorage.getItem('New ToDo')

    if (getLocalStorage == null) {
        listArr = []
    } else {
        listArr = JSON.parse(getLocalStorage)
    }
    const pendingNumber = document.querySelector('#pending')
    pendingNumber.textContent = listArr.length ? `Tasks: ${listArr.length}` : 'Schedule a task'

    const footerPanding = document.querySelector('#footerPanding')
    footerPanding.textContent = listArr.length ? `You have ${listArr.length} panding tasks` : ''

    if (listArr.length) {
        deleteAllBtn.classList.add('active')
    } else {
        deleteAllBtn.classList.remove('active')
    }

    let newLiTag = ' ' 
    listArr.forEach((element, index ) => {
        newLiTag += `<li>${element} <div class="edit"><span onclick="changeTask(${index})"><i class="fas fa-pen-square"></i></span><span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li></div>`
    })

    todoList.innerHTML = newLiTag

    inp.value = ''
}

//Погулять с собакой

function deleteTask (i) {
    let getLocalStorage = localStorage.getItem('New ToDo')

    listArr = JSON.parse(getLocalStorage)
    listArr.splice(i, 1)

    localStorage.setItem('New ToDo', JSON.stringify(listArr))
    
    showTasks()
}

deleteAllBtn.onclick = () => {
    listArr = []
    localStorage.setItem('New ToDo', JSON.stringify(listArr))

    showTasks()
}

function changeTask(i) {
    let getLocalStorage = localStorage.getItem('New ToDo')

    listArr = JSON.parse(getLocalStorage)
    let inp = prompt(listArr, i, 1)
    listArr.splice(i, 1, inp)

    localStorage.setItem('New ToDo', JSON.stringify(listArr))
    
    showTasks()
} 

// changeTask.onclick = () => {
//     listArr = inp
//     showTasks
// }











