let jobHusband = document.querySelector('.job-husband')
let jobWife = document.querySelector('.job-wife')
let mens = document.querySelector('.man')
let women = document.querySelector('.woman')




jobHusband.onclick = (()=>{
    setTimeout(() => {
        women.style.display = 'none'
        mens.style.display = 'block'
    }, 100)
})

jobWife.onclick = (()=>{
    setTimeout(() => {
        mens.style.display = 'none'
        women.style.display = 'block'
    }, 100)
})

