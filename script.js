window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header')
        header.classList.toggle('sticky', window.scrollY > 0)
    })
    const mediaHeader = document.querySelector('.mediaHeader')
    const menuRight = document.querySelector(".menuRight")
    const rightItems = document.querySelectorAll('.menuRight a')

    mediaHeader.addEventListener('click', () => {
        mediaHeader.classList.toggle('active')
        menuRight.classList.toggle('active')
    })
    rightItems.forEach(npmItem => {
        npmItem.addEventListener('click', () => {
            mediaHeader.classList.remove('active')
            menuRight.classList.remove('active')
        })
    })

    // const scrollBtn= document.getElementById('scrollTop')
    // window.addEventListener('scroll', () => {
    //     scrollBtn.classList.toggle('active', window.scrollY > 500)
    // })
    // scrollBtn.addEventListener('scroll', () => {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // })

    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal')

        for (let i = 0; i < reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
    })
})
