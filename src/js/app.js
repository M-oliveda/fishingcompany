document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  let newMessageBox = document.createElement("div");
  newMessageBox.innerHTML = `
    <div class="message__content">
    <p>
      Thank you for send us a message, we will contact you soon!
    </p>
    </div>`;
  newMessageBox.classList.add("message");
  document.body.appendChild(newMessageBox);

  setTimeout(() => {
    document.body.removeChild(newMessageBox);
  }, 3000);
});
