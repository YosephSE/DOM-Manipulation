document.addEventListener("DOMContentLoaded", function() {
    const answers = document.querySelectorAll('.card-body');
    answers.forEach(answer => {
        answer.style.display = "none";
    });
    const buttons = document.querySelectorAll('.card-header');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            if (answer.style.display === "none") {
                answer.style.display = "block";
                button.querySelector(".fa-plus-circle").classList.remove("fa-plus-circle");
                button.querySelector(".fa-plus-circle").classList.add("fa-minus-circle");               
            } else {
                answer.style.display = "none";
                button.querySelector(".fa-minus-circle").classList.remove("fa-minus-circle");
                button.querySelector(".fa-minus-circle").classList.add("fa-plus-circle");               
            }
        });
    });
});

