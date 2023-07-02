const form = document.querySelector('.quizz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;

    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    const points = answer => {
        switch (answer) {
            case 'A':
                score += 1;        
                break;
            case 'B':
                score += 2;        
                break;
            case 'C':
                score += 3;        
                break;
            case 'D':
                score += 4;        
                break;
            default:
                break;
        }
        return score;
    }

    userAnswer.forEach(answer => {
        points(answer);
    })
    scrollTo(0, 0);
    if (score >= 5 && score <= 7) {
        result.querySelector('span').innerHTML = 
            `
            <img style="height: 15rem" src="./img/huff.png" alt="Hufflepuff">
            <p>You are a Hufflepuff!</p>
            `;
        result.classList.remove('d-none');
    }else if (score >= 8 && score <= 11) {
        result.querySelector('span').innerHTML = 
            `
            <img style="height: 15rem" src="./img/gryff.png" alt="Gryffindor">
            <p>You are a Gryffindor!</p>
            `;
        result.classList.remove('d-none');
    } else if (score >= 12 && score <= 14) {
        result.querySelector('span').innerHTML = 
            `
            <img style="height: 15rem" src="./img/rav.png" alt="Ravenclaw">
            <p>You are a Ravenclaw!</p>
            `;
        result.classList.remove('d-none');
    } else if (score >= 15 && score <= 20) {
        result.querySelector('span').innerHTML = 
            `
            <img style="height: 15rem" src="./img/sly.png" alt="Slytherin">
            <p>You are a Slytherin!</p>
            `;
        result.classList.remove('d-none');
    } else {
        if (score >= 5 && score <= 7) {
            result.querySelector('span').innerHTML = 
                `
                <img style="height: 15rem" src="./img/hogwarts.png" alt="Hufflepuff">
                <p>This is not a valid score</p>
                `;
            result.classList.remove('d-none');
        }
    };

});