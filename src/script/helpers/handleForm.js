export const handleForm = async (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const messageSubject = document.getElementById("messageSubject").value;
  const message = document.getElementById("message").value;

  const data = {
    fullName,
    email,
    phone,
    messageSubject,
    message,
  };

  const WEB_APP_URL = import.meta.env.VITE_GOOGLE_APP_URL;
  try {
    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });

    console.log(response);
  } catch (error) {
    console.warn("Error sending form data:", error);
  }
};
