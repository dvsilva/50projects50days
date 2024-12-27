const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

class DragAndDrop {
  dragStart() {
    // console.log("drag start");
    this.className += " hold";
    setTimeout(() => (this.className = "invisible"), 0);
  }

  dragEnd() {
    // console.log("drag end");
    this.className = "fill";
  }

  dragOver(e) {
    // console.log("drag over");
    e.preventDefault();
  }

  dragEnter(e) {
    // console.log("drag enter");
    e.preventDefault();
    this.className += " hovered";
  }

  dragLeave() {
    // console.log("drag leave");
    this.className = "empty";
  }

  dragDrop() {
    // console.log("drag drop");
    this.className = "empty";
    this.append(fill);
  }
}

const dragAndDrop = new DragAndDrop();

fill.addEventListener("dragstart", dragAndDrop.dragStart);
fill.addEventListener("dragend", dragAndDrop.dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragAndDrop.dragOver);
  empty.addEventListener("dragenter", dragAndDrop.dragEnter);
  empty.addEventListener("dragleave", dragAndDrop.dragLeave);
  empty.addEventListener("drop", dragAndDrop.dragDrop);
}
