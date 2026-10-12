
document.addEventListener("DOMContentLoaded", () => {

  // ハンバーガーメニュー
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  function closeMenu() {
    nav.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "メニューを開く");
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "メニューを閉じる" : "メニューを開く"
    );
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // メニュー情報
  const menus = {
    gel: [
      ["ジェルワンカラー", "¥7,350", "付け替えオフ無料・ケア込み。150色以上から選択可能。"],
      ["ジェル4本アート", "¥9,550", "4本アート。その他の指はワンカラーやラメグラなど。"],
      ["ジェルアート放題", "¥11,750", "付け替えオフ無料・ケア込み。"],
      ["クリアジェル", "¥6,250", "艶出し・補強。"],
      ["ジェルアート追加 1本〜", "¥350〜", "パーツ代別途。"],
      ["カラーグラデーション", "¥240", "ベースカラーへの追加メニュー。"],
      ["チップ長さ出し 1本", "¥770", "長さ出しの追加。"],
      ["カラー1色追加", "¥130", "ワンカラーへの追加。"],
      ["ラメグラ追加", "¥130", "ワンカラーへの追加。"]
    ],

    scalp: [
      ["スカルプアート放題", "¥17,800", "付け替えオフ無料・ケア込み。長さ1枚マックスまで。"],
      ["スカルプ4本アート", "¥15,600", "付け替えオフ無料・ケア込み。"],
      ["スカルプワンカラー", "¥12,300", "付け替えオフ無料・ケア込み。"],
      ["スカルプ補強", "¥570", "自爪を残したまま亀裂補強。"],
      ["スカルプ長さ出し", "¥900", "長さ出し・反り爪矯正など。"],
      ["スカルプ2枚", "¥3,500", "2枚マックスをご希望の場合の追加メニュー。"],
      ["スカルプ3枚", "¥4,500", "3枚マックスをご希望の場合の追加メニュー。"]
    ],

    foot: [
      ["フットワンカラー", "¥7,350", "付け替えオフ無料・ケア込み・フットバス付き。"],
      ["フット2本アート", "¥9,550", "付け替えオフ無料・ケア込み・フットバス付き。"],
      ["フットアート放題", "¥11,750", "付け替えオフ無料・ケア込み・フットバス付き。"],
      ["角質ケア（30分）", "¥3,500", "フットバス付き。角質ケア。"],
      ["角質ケア（60分）", "¥5,700", "フットバス・足裏マッサージ付き。"],
      ["甘皮ケア", "¥3,500", "ウォーターケア付き。"]
    ],

    care: [
      ["パラフィンパック", "要問い合わせ", "ハンド・フット対応。個室料金別途。"],
      ["有料パーツ", "¥110", "追加パーツ。"],
      ["オーダーチップ", "¥10,450", "サイズ・デザインのフルオーダー。"],
      ["個室料金", "¥1,850", "個室利用をご希望の場合。"],
      ["付け替えオフ", "¥0", "対象メニューとセットで選択。"],
      ["チップ・スカルプオフのみ", "¥500〜", "1本あたり。"],
      ["ジェルオフのみ", "¥400", "1本あたり。"]
    ]
  };

  const tabs = document.querySelectorAll(".menu-tab");
  const content = document.getElementById("menu-content");

  function renderMenu(category) {
    content.replaceChildren();

    menus[category].forEach(([name, price, desc]) => {
      const item = document.createElement("div");
      item.className = "menu-item";

      const title = document.createElement("div");
      title.className = "menu-name";
      title.textContent = name;

      const priceEl = document.createElement("div");
      priceEl.className = "menu-price";
      priceEl.textContent = price;

      const description = document.createElement("p");
      description.className = "menu-desc";
      description.textContent = desc;

      item.append(title, priceEl, description);
      content.appendChild(item);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      renderMenu(tab.dataset.category);
    });
  });

  renderMenu("gel");

  // コピーライト
  document.getElementById("year").textContent =
    new Date().getFullYear();

});
