const itemNode = document.querySelector(".item");
const placeholdersNode = document.querySelectorAll(".placeholder");

itemNode.addEventListener("dragstart", dragstart);
itemNode.addEventListener("dragend", dragend);

// for (const placeholderNode of placeholdersNode) {
// 	console.log(placeholderNode);
// }
// или //
placeholdersNode.forEach((placeholderNode) => {
	placeholderNode.addEventListener("dragover", dragover);
	placeholderNode.addEventListener("dragenter", dragenter);
	placeholderNode.addEventListener("dragleave", dragleave);
	placeholderNode.addEventListener("drop", dragdrop);
});

function dragstart(event) {
	event.target.classList.add("hold");
	setTimeout(() => event.target.classList.add("hide"), 0);
}
function dragend(event) {
	// event.target.classList.remove("hold", "hide");
	// или //
	event.target.className = "item";
}

function dragover(event) {
	event.preventDefault();
	// console.log("drag over");
}
function dragenter(event) {
	event.target.classList.add("hovered");
	// console.log("drag enter");
}
function dragleave(event) {
	event.target.classList.remove("hovered");
	// console.log("drag leave");
}
function dragdrop(event) {
	event.target.classList.remove("hovered");
	event.target.append(itemNode);
	// console.log("drag drop");
}
