//nav bar ลากลงมาได้สักนิด ทำพื้นหลังสีขาว

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (scrollY >= 180) {
        navbar.classList.add('bg');
    } else {
        navbar.classList.remove('bg');
    }
    console.log(scrollY)//ตัวนี้ใช้เเสดงเลขถ้าเลื่อนลงมา
})

// image collage เมื่อเอาเม้าวาง เข้ม เอา เมาส์ออกเบลอ clip1นาทีประมาณ45-50
const collageImages = [...document.querySelectorAll('.collage-img')]

collageImages.map((item, i) => {
    item.addEventListener('mouseover', () => {
        collageImages.map((image, index) => {
            if (index != i) {
                image.style.filter = `blur(10px)`;
                item.style.zIndex = 2;
            }
        })

    })
    item.addEventListener('mouseleave', () => {
        collageImages.map((image, index) => {
            image.style = null
        })
    })
})