let questions = document.querySelectorAll("li p:first-of-type");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    let answer = question.nextElementSibling;

    document.querySelectorAll("li p:nth-of-type(2)").forEach((answer) => {
      answer.classList.remove("show");
    });
    document.querySelectorAll("li p:first-of-type").forEach((question) => {
      question.classList.remove("show");
    });

    answer.classList.add("show");
    question.classList.add("show");
  });
});
