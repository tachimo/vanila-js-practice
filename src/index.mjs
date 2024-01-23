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
  p.className = "todo-text";
  p.innerText = inputText;

  //ボタン(完了)の生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    //戻すボタンを生成してdiv配下に設定
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    moveTarget.firstElementChild.appendChild(backButton);
    document.getElementById("complete-list").appendChild(moveTarget);
    backButton.addEventListener("click", () => {
      backButton.remove();
      moveTarget.firstElementChild.appendChild(completeButton);
      document.getElementById("incomplete-list").appendChild(moveTarget);
      moveTarget.firstElementChild.appendChild(deleteButton);
      document.getElementById("incomplete-list").appendChild(moveTarget);
    });
  });

  //ボタン(削除)の生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親にあるliタグを未完了リストから削除
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //liタグの要素に各要素を継承、右：親、左が子要素
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
