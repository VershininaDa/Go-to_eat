const validUsername = "user";
const validPassword = "password123";

document.getElementById("loginForm").addEventListener("submit", function (event) {
	event.preventDefault(); // Предотвращаем отправку формы

	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	// Проверка логина и пароля
	if (username === validUsername && password === validPassword) {
		// Перенаправление на другую страницу
		window.location.href = "index2.html"; // Укажите путь к вашей странице
	} else {
		document.getElementById("message").innerText = "Неверный логин или пароль.";
		document.getElementById("message").classList.remove("hidden");
	}
});