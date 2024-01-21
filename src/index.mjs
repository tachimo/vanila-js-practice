import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liタグの生成
  const li = document.createElement("li");

  //divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグの生成
  const p = document.createElement("p");
  p.className = "title";
  p.innerText = inputText;

  //タグ同士の継承
  div.appendChild(p);
  li.appendChild(div);

  console.log(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
