import "./sass/style.scss";

type adviceFormat = {
  "id": string,
  "advice": string
};

getAdvice()
    .then(ans => setData(ans.slip));

type htmlType = HTMLElement | null;

const diceButton: htmlType = document.getElementById("dice-button");

const adviceTitle: htmlType = document.getElementById("title");

const adviceContent: htmlType = document.getElementById("content");


function getAdvice() {
  return fetch("https://api.adviceslip.com/advice")
    .then(response => response.json());
}

function setTitle(title: string) {
  if (!adviceTitle) return;
  adviceTitle.innerText = `ADVICE #${title}`;
}

function setContent(content: string) {
  if (!adviceContent) return;
  adviceContent.innerText = content;
}

function setData(data: adviceFormat): void {
  setTitle(data.id);
  setContent(data.advice);
}

diceButton?.addEventListener("click", () => {
  getAdvice()
    .then(ans => setData(ans.slip));
});
