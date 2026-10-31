// Personal portfolio interactions and contact form validation
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // Custom checks in addition to the browser's required/email validation.
  name.setCustomValidity(name.value.trim().length >= 2 ? "" : "Enter at least 2 characters.");
  message.setCustomValidity(message.value.trim().length >= 10 ? "" : "Enter at least 10 characters.");

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    feedback.textContent = "Please correct the highlighted fields and try again.";
    feedback.style.color = "#ff9b9b";
    return;
  }

  feedback.textContent = "Your details are valid. Your email app will open with the message prepared.";
  feedback.style.color = "#8fe6c0";

  // Replace this address with your own email address.
  const recipient = "your.email@example.com";
  const mailSubject = encodeURIComponent(subject.value.trim());
  const mailBody = encodeURIComponent(
    "Name: " + name.value.trim() +
    "\nEmail: " + email.value.trim() +
    "\n\nMessage:\n" + message.value.trim()
  );
  window.location.href = `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;
});

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 450);
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Close the mobile navigation after selecting a section.
document.querySelectorAll("#navLinks .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navLinks");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
