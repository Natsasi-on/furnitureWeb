let ratingStarInput = [...document.querySelectorAll('.rating-star')];

// ทำให้กดดาวเเล้วขึ้นเป็นเต็มดวงตอนรีวิว
ratingStarInput.map((star, index) => {
    star.addEventListener('click', () => {
        for (let i = 0; i < 5; i++) {
            if (i <= index) {
                ratingStarInput[i].src = `img/fill star.png`;
            } else {
                ratingStarInput[i].src = `img/no fill star.png`;
            }
        }
    })
})