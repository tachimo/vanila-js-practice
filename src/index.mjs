import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //未完了リストの追加
  createIncompleteTodo(inputText);
};

// 渡された引数を基に未完了のTODOを作成する関数
const createIncompleteTodo = (todo) => {
  //liタグの生成
  const li = document.createElement("li");

  //divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグの生成
  const p = document.createElement("p");
  p.className = "todo-text";
  p.innerText = todo;

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

    //戻すボタンの機能実装
    backButton.addEventListener("click", () => {
      //TODOの内容を取得し、完了リストに移動
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      backButton.closest("li").remove();
    });

    moveTarget.firstElementChild.appendChild(backButton);
    //完了リストに移動
    document.getElementById("complete-list").appendChild(moveTarget);
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
