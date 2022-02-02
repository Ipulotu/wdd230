const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
	let scriptuer = input.value;
	input.value = "";
	const newList = document.createElement("li");
	const newSpan = document.createElement("span");
	const newButton = document.createElement("button");
	newList.appendChild(newSpan);
	newList.appendChild(newButton);
	newSpan.textContent = scriptuer;
	newButton.textContent = "❌";
	list.appendChild(newList);

	newButton.addEventListener("click", function () {
		newList.remove();
	});
});

input.focus();
