const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formRef);
  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;
  if (!email || !password) {
    alert("Заповніть усі поля!");
  } else {
    const all = []
    for (const value of formData.values()) {
      all.push(value);
    }
    const resultForm = {}
    resultForm.email = all[0]
    resultForm.password = all[1]
    console.log(resultForm);
    formRef.reset(event);
  }
});
