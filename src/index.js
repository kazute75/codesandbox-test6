import "./styles.css";

// 追加ボタン押下
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // 未完了リストに追加
  addIncompleteList(inputText);
};

// 未完了リストに追加
const addIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 押された完了ボタンの親を完了リストへ追加
    const completeTarget = completeButton.parentNode;
    // TODO内容テキストを追加
    const completeText = completeTarget.firstElementChild.innerText;

    // div以下を初期化
    completeTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = completeText;

    // button(戻す)タグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 完了リストから削除
      const completeTarget = backButton.parentNode;
      deleteFromCompleteList(completeTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      addIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    completeTarget.appendChild(li);
    completeTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  // button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストに指定の要素を追加
const addToIncompleteList = (target) => {
  document.getElementById("incomplete-List").addChild(target);
};
// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 完了リストから指定の要素を削除
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
