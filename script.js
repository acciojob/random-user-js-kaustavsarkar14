//your code here
async function getData(){
    const response = await fetch('https://randomuser.me/api/')
    const result = await response.json()
    const userData = result.results[0]
    console.log(userData)
    photo.src = userData.picture.large
    info.innerText = ''
    age.addEventListener('click', e=>{
        info.innerText = userData.dob.age
    })
    email.addEventListener('click', e=>{
        info.innerText = userData.email
    })
    phone.addEventListener('click', e=>{
        info.innerText = userData.cell
    })
}

getData()

