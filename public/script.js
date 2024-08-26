document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");

  form.addEventListener("submit", (e) => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("All fields are required!");
      e.preventDefault();
    }
  });
});
