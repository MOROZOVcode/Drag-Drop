const plshStrt = document.querySelector(".row"); //wrapper
const placeholdersNode = document.querySelectorAll(".placeholder"); //empty
const itemNode = document.querySelector(".item"); //drag

itemNode.addEventListener("dragstart", dragstart);
itemNode.addEventListener("dragend", dragend);

// for (const placeholderNode of placeholdersNode) {
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

// function dragover(event) {
// 	event.preventDefault();
// }
// function dragenter(event) {
// 	event.target.classList.add("hovered");
// }
// function dragleave(event) {
// 	event.target.classList.remove("hovered");
// }
// function dragdrop(event) {
// 	event.target.classList.remove("hovered");
// 	event.target.append(itemNode);
// }
// или //
function dragover(event) {
	event.preventDefault();
}
function dragenter() {
	this.classList.add("hovered");
}
function dragleave() {
	this.classList.remove("hovered");
}
function dragdrop() {
	this.classList.remove("hovered");
	this.append(itemNode);
}

////////////////////////...мобильная версия.../////////////////////////
itemNode.addEventListener("touchmove", itemMove);
itemNode.addEventListener("touchend", drop);

let itemAppend;

function itemMove(event) {
	event.preventDefault();

	let touch = event.targetTouches[0];

	itemNode.style.top = `${
		touch.pageY - plshStrt.offsetTop - itemNode.offsetHeight / 2
	}px`;
	itemNode.style.left = `${
		touch.pageX - plshStrt.offsetLeft - itemNode.offsetWidth / 2
	}px`;

	placeholdersNode.forEach((placeholderNode) => {
		//////////////////////////////////////////////////////////////////
		if (
			itemNode.getBoundingClientRect().top + itemNode.offsetHeight / 2 <
				placeholderNode.getBoundingClientRect().bottom &&
			itemNode.getBoundingClientRect().right - itemNode.offsetWidth / 2 >
				placeholderNode.getBoundingClientRect().left &&
			itemNode.getBoundingClientRect().bottom - itemNode.offsetHeight / 2 >
				placeholderNode.getBoundingClientRect().top &&
			itemNode.getBoundingClientRect().left + itemNode.offsetWidth / 2 <
				placeholderNode.getBoundingClientRect().right
		) {
			placeholderNode.classList.add("hovered");
			itemAppend = placeholderNode;
		} else {
			placeholderNode.classList.remove("hovered");
		}
	});
}

function drop() {
	if (itemAppend.classList.contains("hovered")) {
		itemAppend.append(this);

		this.style.top = `${itemAppend.offsetTop}px`;
		this.style.left = `${itemAppend.offsetLeft}px`;
	} else {
		this.style.top = `${itemAppend.offsetTop}px`;
		this.style.left = `${itemAppend.offsetLeft}px`;
	}
}
