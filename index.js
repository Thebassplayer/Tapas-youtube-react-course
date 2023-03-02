const whyReact = ["React is declarative", "React is fast", "JSX is simple"];

function tellWhyReact() {
  const whyId = document.getElementById("why-react");
  console.log(whyId);

  for (let el of whyReact) {
    const list = document.createElement("li");
    list.innerText = el;
    whyId.appendChild(list);
  }
}

tellWhyReact();
