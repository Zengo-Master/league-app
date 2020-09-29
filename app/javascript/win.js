// 初期処理
function init(){
  var trs = document.getElementById("winorlose_table").getElementsByTagName('tr');
  // 1行目はヘッダーだから飛ばして
  for(var itr = 1; itr < trs.length; itr++){
      // テーブルの行毎に処理
      var tds = trs[itr].getElementsByTagName('td');
      for(var itd = 0; itd < tds.length; itd++){
          if(tds[itd].id.indexOf('op_') != -1){
              // 勝ち負け入力<td>タグの場合
              var arr = tds[itd].id.split('_'); // op_数字_数字 → [op, 数字, 数字]
              if(arr[1] == arr[2]){
                  // 対戦が同じ場合
                  tds[itd].classList.add('right_down_border'); // 縦横同値マスにクラスを指定
              } 
              else {
                  // 対戦が違う場合、イベントを登録
                  // onclick="winorlose_click(this);" と同じ内容
                  tds[itd].addEventListener('click', {name: this, handleEvent: winorlose_click});

                  // ※リーグ表の中身の定義
                  var json_data = {"_1":{
                                          "member":"Aさん",
                                          "_1":{"member":"Aさん","WinOrLose":9},
                                          "_2":{"member":"Bさん","WinOrLose":0},
                                          "_3":{"member":"Cさん","WinOrLose":0},
                                          "_4":{"member":"Dさん","WinOrLose":0},
                                          "_5":{"member":"Eさん","WinOrLose":0},
                                          "_6":{"member":"Fさん","WinOrLose":0},
                                          "_7":{"member":"Gさん","WinOrLose":0},
                                          "_8":{"member":"Hさん","WinOrLose":0},
                                          "_9":{"member":"Iさん","WinOrLose":0},
                                          "_10":{"member":"Jさん","WinOrLose":0},
                                        },
                                   "_2":{
                                          "member":"Bさん",
                                          "_1":{"member":"Aさん","WinOrLose":0},
                                          "_2":{"member":"Bさん","WinOrLose":9},
                                          "_3":{"member":"Cさん","WinOrLose":0},
                                          "_4":{"member":"Dさん","WinOrLose":0},
                                          "_5":{"member":"Eさん","WinOrLose":0},
                                          "_6":{"member":"Fさん","WinOrLose":0},
                                          "_7":{"member":"Gさん","WinOrLose":0},
                                          "_8":{"member":"Hさん","WinOrLose":0},
                                          "_9":{"member":"Iさん","WinOrLose":0},
                                          "_10":{"member":"Jさん","WinOrLose":0},
                                        },
                                   "_3":{
                                          "member":"Cさん",
                                          "_1":{"member":"Aさん","WinOrLose":0},
                                          "_2":{"member":"Bさん","WinOrLose":0},
                                          "_3":{"member":"Cさん","WinOrLose":9},
                                          "_4":{"member":"Dさん","WinOrLose":0},
                                          "_5":{"member":"Eさん","WinOrLose":0},
                                          "_6":{"member":"Fさん","WinOrLose":0},
                                          "_7":{"member":"Gさん","WinOrLose":0},
                                          "_8":{"member":"Hさん","WinOrLose":0},
                                          "_9":{"member":"Iさん","WinOrLose":0},
                                          "_10":{"member":"Jさん","WinOrLose":0},
                                        },
                                   "_4":{
                                          "member":"Dさん",
                                          "_1":{"member":"Aさん","WinOrLose":0},
                                          "_2":{"member":"Bさん","WinOrLose":0},
                                          "_3":{"member":"Cさん","WinOrLose":0},
                                          "_4":{"member":"Dさん","WinOrLose":9},
                                          "_5":{"member":"Eさん","WinOrLose":0},
                                          "_6":{"member":"Fさん","WinOrLose":0},
                                          "_7":{"member":"Gさん","WinOrLose":0},
                                          "_8":{"member":"Hさん","WinOrLose":0},
                                          "_9":{"member":"Iさん","WinOrLose":0},
                                          "_10":{"member":"Jさん","WinOrLose":0},
                                        },
                                   "_5":{
                                          "member":"Eさん",
                                          "_1":{"member":"Aさん","WinOrLose":0},
                                          "_2":{"member":"Bさん","WinOrLose":0},
                                          "_3":{"member":"Cさん","WinOrLose":0},
                                          "_4":{"member":"Dさん","WinOrLose":0},
                                          "_5":{"member":"Eさん","WinOrLose":9},
                                          "_6":{"member":"Fさん","WinOrLose":0},
                                          "_7":{"member":"Gさん","WinOrLose":0},
                                          "_8":{"member":"Hさん","WinOrLose":0},
                                          "_9":{"member":"Iさん","WinOrLose":0},
                                          "_10":{"member":"Jさん","WinOrLose":0},
                                        },
                                   "_6":{
                                          "member":"Fさん",
                                          "_1":{"member":"Aさん","WinOrLose":0},
                                          "_2":{"member":"Bさん","WinOrLose":0},
                                          "_3":{"member":"Cさん","WinOrLose":0},
                                          "_4":{"member":"Dさん","WinOrLose":0},
                                          "_5":{"member":"Eさん","WinOrLose":0},
                                          "_6":{"member":"Fさん","WinOrLose":9},
                                          "_7":{"member":"Gさん","WinOrLose":0},
                                          "_8":{"member":"Hさん","WinOrLose":0},
                                          "_9":{"member":"Iさん","WinOrLose":0},
                                          "_10":{"member":"Jさん","WinOrLose":0}
                                        },
                                   "_7":{
                                          "member":"Gさん",
                                          "_1":{"member":"Aさん","WinOrLose":0},
                                          "_2":{"member":"Bさん","WinOrLose":0},
                                          "_3":{"member":"Cさん","WinOrLose":9},
                                          "_4":{"member":"Dさん","WinOrLose":0},
                                          "_5":{"member":"Eさん","WinOrLose":0},
                                          "_6":{"member":"Fさん","WinOrLose":0},
                                          "_7":{"member":"Gさん","WinOrLose":9},
                                          "_8":{"member":"Hさん","WinOrLose":0},
                                          "_9":{"member":"Iさん","WinOrLose":0},
                                          "_10":{"member":"Jさん","WinOrLose":0}
                                        },
                                   "_8":{
                                          "member":"Hさん",
                                          "_1":{"member":"Aさん","WinOrLose":0},
                                          "_2":{"member":"Bさん","WinOrLose":0},
                                          "_3":{"member":"Cさん","WinOrLose":0},
                                          "_4":{"member":"Dさん","WinOrLose":9},
                                          "_5":{"member":"Eさん","WinOrLose":0},
                                          "_6":{"member":"Fさん","WinOrLose":0},
                                          "_7":{"member":"Gさん","WinOrLose":0},
                                          "_8":{"member":"Hさん","WinOrLose":9},
                                          "_9":{"member":"Iさん","WinOrLose":0},
                                          "_10":{"member":"Jさん","WinOrLose":0}
                                        },
                                   "_9":{
                                          "member":"Iさん",
                                          "_1":{"member":"Aさん","WinOrLose":0},
                                          "_2":{"member":"Bさん","WinOrLose":0},
                                          "_3":{"member":"Cさん","WinOrLose":0},
                                          "_4":{"member":"Dさん","WinOrLose":0},
                                          "_5":{"member":"Eさん","WinOrLose":0},
                                          "_6":{"member":"Fさん","WinOrLose":0},
                                          "_7":{"member":"Gさん","WinOrLose":0},
                                          "_8":{"member":"Hさん","WinOrLose":0},
                                          "_9":{"member":"Iさん","WinOrLose":9},
                                          "_10":{"member":"Jさん","WinOrLose":0}
                                        },
                                   "_10":{
                                          "member":"Iさん",
                                          "_1":{"member":"Aさん","WinOrLose":0},
                                          "_2":{"member":"Bさん","WinOrLose":0},
                                          "_3":{"member":"Cさん","WinOrLose":0},
                                          "_4":{"member":"Dさん","WinOrLose":0},
                                          "_5":{"member":"Eさん","WinOrLose":0},
                                          "_6":{"member":"Fさん","WinOrLose":0},
                                          "_7":{"member":"Gさん","WinOrLose":0},
                                          "_8":{"member":"Hさん","WinOrLose":0},
                                          "_9":{"member":"Iさん","WinOrLose":0},
                                          "_10":{"member":"Jさん","WinOrLose":9}
                                        }
                                  };

                  if(json_data['_'+ arr[1]]['_'+ arr[2]]["WinOrLose"] == 1){
                      tds[itd].innerHTML = "○";
                  } 
                  else if(json_data['_'+ arr[1]]['_'+ arr[2]]["WinOrLose"] == -1) {
                      tds[itd].innerHTML = "●";
                  }
              }
          }
      }
  }
}

// クリックしたときの処理
function winorlose_click(el){
    // el にはどこでクリックされたかの情報が入っている
    var arr = el.target.id.split('_');                 // idを'_'で分ける
    var oppid = arr[0] + '_' + arr[2] + '_'+ arr[1];   // 反対側のid
    el.target.innerHTML = '○';                         // 勝ち
    document.getElementById(oppid).innerHTML = '●';    // 負け
    var trs = document.getElementById("winorlose_table").getElementsByTagName('tr');
    var win = 0;
    var loss = 0;
    // 1行目はヘッダーだから飛ばして
    for(var itr = 1; itr < trs.length; itr++){
        // テーブルの行毎に処理
        win = 0;
        loss = 0;
        var tds = trs[itr].getElementsByTagName('td');
        for(var itd = 0; itd < tds.length; itd++){
            if(tds[itd].id.indexOf('op_') != -1){
                // 勝ち負け数カウント
                if(tds[itd].innerHTML == '○'){
                    win ++;
                }else if(tds[itd].innerHTML == '●'){
                    loss ++;
                }
            } else if(tds[itd].id.indexOf('win_') != -1){
                // 勝ち表示
                tds[itd].innerHTML = win;
            } else if(tds[itd].id.indexOf('lose_') != -1){
                // 負け表示
                tds[itd].innerHTML = loss;
            }
        }
    }
}

// window.addEventListener('load', function(){

//   const op_1_2 = document.getElementById("op_1_2")
//   const op_1_3 = document.getElementById("op_1_3")
//   const op_1_4 = document.getElementById("op_1_4")
//   const op_1_5 = document.getElementById("op_1_5")
//   const op_1_6 = document.getElementById("op_1_6")
//   const op_1_7 = document.getElementById("op_1_7")
//   const op_1_8 = document.getElementById("op_1_8")
//   const op_1_9 = document.getElementById("op_1_9")
//   const op_1_10 = document.getElementById("op_1_10")
//   const win_1 = document.getElementById("win_1")
//   const lose_1 = document.getElementById("lose_1")

//   const op_2_1 = document.getElementById("op_2_1")
//   const op_2_3 = document.getElementById("op_2_3")
//   const op_2_4 = document.getElementById("op_2_4")
//   const op_2_5 = document.getElementById("op_2_5")
//   const op_2_6 = document.getElementById("op_2_6")
//   const op_2_7 = document.getElementById("op_2_7")
//   const op_2_8 = document.getElementById("op_2_8")
//   const op_2_9 = document.getElementById("op_2_9")
//   const op_2_10 = document.getElementById("op_2_10")
//   const win_2 = document.getElementById("win_2")
//   const lose_2 = document.getElementById("lose_2")

//   const op_3_1 = document.getElementById("op_3_1")
//   const op_3_2 = document.getElementById("op_3_2")
//   const op_3_4 = document.getElementById("op_3_4")
//   const op_3_5 = document.getElementById("op_3_5")
//   const op_3_6 = document.getElementById("op_3_6")
//   const op_3_7 = document.getElementById("op_3_7")
//   const op_3_8 = document.getElementById("op_3_8")
//   const op_3_9 = document.getElementById("op_3_9")
//   const op_3_10 = document.getElementById("op_3_10")
//   const win_3 = document.getElementById("win_3")
//   const lose_3 = document.getElementById("lose_3")

//   const op_4_1 = document.getElementById("op_4_1")
//   const op_4_2 = document.getElementById("op_4_2")
//   const op_4_3 = document.getElementById("op_4_3")
//   const op_4_5 = document.getElementById("op_4_5")
//   const op_4_6 = document.getElementById("op_4_6")
//   const op_4_7 = document.getElementById("op_4_7")
//   const op_4_8 = document.getElementById("op_4_8")
//   const op_4_9 = document.getElementById("op_4_9")
//   const win_4 = document.getElementById("win_4")
//   const lose_4 = document.getElementById("lose_4")

//   const op_4_10 = document.getElementById("op_4_10")
//   const op_5_1 = document.getElementById("op_5_1")
//   const op_5_2 = document.getElementById("op_5_2")
//   const op_5_3 = document.getElementById("op_5_3")
//   const op_5_4 = document.getElementById("op_5_4")
//   const op_5_6 = document.getElementById("op_5_6")
//   const op_5_7 = document.getElementById("op_5_7")
//   const op_5_8 = document.getElementById("op_5_8")
//   const op_5_9 = document.getElementById("op_5_9")
//   const op_5_10 = document.getElementById("op_5_10")
//   const win_5 = document.getElementById("win_1")
//   const lose_5 = document.getElementById("lose_1")

//   const op_6_1 = document.getElementById("op_6_1")
//   const op_6_2 = document.getElementById("op_6_2")
//   const op_6_3 = document.getElementById("op_6_3")
//   const op_6_4 = document.getElementById("op_6_4")
//   const op_6_5 = document.getElementById("op_6_5")
//   const op_6_7 = document.getElementById("op_6_7")
//   const op_6_8 = document.getElementById("op_6_8")
//   const op_6_9 = document.getElementById("op_6_9")
//   const op_6_10 = document.getElementById("op_6_10")
//   const win_6 = document.getElementById("win_6")
//   const lose_6 = document.getElementById("lose_6")

//   const op_7_1 = document.getElementById("op_7_1")
//   const op_7_2 = document.getElementById("op_7_2")
//   const op_7_3 = document.getElementById("op_7_3")
//   const op_7_4 = document.getElementById("op_7_4")
//   const op_7_5 = document.getElementById("op_7_5")
//   const op_7_6 = document.getElementById("op_7_6")
//   const op_7_8 = document.getElementById("op_7_8")
//   const op_7_9 = document.getElementById("op_7_9")
//   const op_7_10 = document.getElementById("op_7_10")
//   const win_7 = document.getElementById("win_7")
//   const lose_7 = document.getElementById("lose_7")

//   const op_8_1 = document.getElementById("op_8_1")
//   const op_8_2 = document.getElementById("op_8_2")
//   const op_8_3 = document.getElementById("op_8_3")
//   const op_8_4 = document.getElementById("op_8_4")
//   const op_8_5 = document.getElementById("op_8_5")
//   const op_8_6 = document.getElementById("op_8_6")
//   const op_8_7 = document.getElementById("op_8_7")
//   const op_8_9 = document.getElementById("op_8_9")
//   const op_8_10 = document.getElementById("op_8_10")
//   const win_8 = document.getElementById("win_8")
//   const lose_8 = document.getElementById("lose_8")

//   const op_9_1 = document.getElementById("op_9_1")
//   const op_9_2 = document.getElementById("op_9_2")
//   const op_9_3 = document.getElementById("op_9_3")
//   const op_9_4 = document.getElementById("op_9_4")
//   const op_9_5 = document.getElementById("op_9_5")
//   const op_9_6 = document.getElementById("op_9_6")
//   const op_9_7 = document.getElementById("op_9_7")
//   const op_9_8 = document.getElementById("op_9_8")
//   const op_9_10 = document.getElementById("op_9_10")
//   const win_9 = document.getElementById("win_9")
//   const lose_9 = document.getElementById("lose_9")

//   const op_10_1 = document.getElementById("op_10_1")
//   const op_10_2 = document.getElementById("op_10_2")
//   const op_10_3 = document.getElementById("op_10_3")
//   const op_10_4 = document.getElementById("op_10_4")
//   const op_10_5 = document.getElementById("op_10_5")
//   const op_10_6 = document.getElementById("op_10_6")
//   const op_10_7 = document.getElementById("op_10_7")
//   const op_10_8 = document.getElementById("op_10_8")
//   const op_10_9 = document.getElementById("op_10_9")
//   const win_10 = document.getElementById("win_10")
//   const lose_10 = document.getElementById("lose_10")

//     op_1_2.addEventListener('click', function(){
//       if (op_1_2.innerHTML == ""){
//         op_1_2.innerHTML = "○";
//         op_2_1.innerHTML = "●";
//       }
//       else if (op_1_2.innerHTML == "○"){
//         op_1_2.innerHTML = "";
//         op_2_1.innerHTML = "";
//       }
//     })
//     op_1_3.addEventListener('click', function(){
//       if (op_1_3.innerHTML == ""){
//         op_1_3.innerHTML = "○";
//         op_3_1.innerHTML = "●";
//       }
//       else if (op_1_3.innerHTML == "○"){
//         op_1_3.innerHTML = "";
//         op_3_1.innerHTML = "";
//       }
//     })
//     op_1_4.addEventListener('click', function(){
//       if (op_1_4.innerHTML == ""){
//         op_1_4.innerHTML = "○";
//         op_4_1.innerHTML = "●";
//       }
//       else if (op_1_4.innerHTML == "○"){
//         op_4_1.innerHTML = "";
//         op_1_4.innerHTML = "";
//       }
//     })
//     op_1_5.addEventListener('click', function(){
//       if (op_1_5.innerHTML == ""){
//         op_1_5.innerHTML = "○";
//         op_5_1.innerHTML = "●";
//       }
//       else if (op_1_5.innerHTML == "○"){
//         op_1_5.innerHTML = "";
//         op_5_1.innerHTML = "";
//       }
//     })
//     op_1_6.addEventListener('click', function(){
//       if (op_1_6.innerHTML == "") {
//         op_1_6.innerHTML = "○";
//         op_6_1.innerHTML = "●";
//       }
//       else if (op_1_6.innerHTML == "○"){
//         op_1_6.innerHTML = "";
//         op_6_1.innerHTML = "";
//       }
//     })
//     op_1_7.addEventListener('click', function(){
//       if (op_1_7.innerHTML == "") {
//         op_1_7.innerHTML = "○";
//         op_7_1.innerHTML = "●";
//       }
//       else if (op_1_7.innerHTML == "○"){
//         op_1_7.innerHTML = "";
//         op_7_1.innerHTML = "";
//       }
//     })
//     op_1_8.addEventListener('click', function(){
//       if (op_1_8.innerHTML == "") {
//         op_1_8.innerHTML = "○";
//         op_8_1.innerHTML = "●";
//       }
//       else if (op_1_8.innerHTML == "○"){
//         op_1_8.innerHTML = "";
//         op_8_1.innerHTML = "";
//       }
//     })
//     op_1_9.addEventListener('click', function(){
//       if (op_1_9.innerHTML == "") {
//         op_1_9.innerHTML = "○";
//         op_9_1.innerHTML = "●";
//       }
//       else if (op_1_9.innerHTML == "○"){
//         op_1_9.innerHTML = "";
//         op_9_1.innerHTML = "";
//       }
//     })
//     op_1_10.addEventListener('click', function(){
//       if (op_1_10.innerHTML == "") {
//         op_1_10.innerHTML = "○";
//         op_10_1.innerHTML = "●";
//       }
//       else if (op_1_10.innerHTML == "○"){
//         op_1_10.innerHTML = "";
//         op_10_1.innerHTML = "";
//       }
//     })
//     op_2_1.addEventListener('click', function(){
//       if (op_2_1.innerHTML == ""){
//         op_2_1.innerHTML = "○";
//         op_1_2.innerHTML = "●";
//       }
//       else if (op_2_1.innerHTML == "○"){
//         op_2_1.innerHTML = "";
//         op_1_2.innerHTML = "";
//       }
//     })
//     op_2_3.addEventListener('click', function(){
//       if (op_2_3.innerHTML == ""){
//         op_2_3.innerHTML = "○";
//         op_3_2.innerHTML = "●";
//       }
//       else if (op_2_3.innerHTML == "○"){
//         op_2_3.innerHTML = "";
//         op_3_2.innerHTML = "";
//       }
//     })
//     op_2_4.addEventListener('click', function(){
//       if (op_2_4.innerHTML == ""){
//         op_2_4.innerHTML = "○";
//         op_4_2.innerHTML = "●";
//       }
//       else if (op_2_4.innerHTML == "○"){
//         op_4_2.innerHTML = "";
//         op_2_4.innerHTML = "";
//       }
//     })
//     op_2_5.addEventListener('click', function(){
//       if (op_2_5.innerHTML == ""){
//         op_2_5.innerHTML = "○";
//         op_5_2.innerHTML = "●";
//       }
//       else if (op_2_5.innerHTML == "○"){
//         op_2_5.innerHTML = "";
//         op_5_2.innerHTML = "";
//       }
//     })
//     op_2_6.addEventListener('click', function(){
//       if (op_2_6.innerHTML == "") {
//         op_2_6.innerHTML = "○";
//         op_6_2.innerHTML = "●";
//       }
//       else if (op_2_6.innerHTML == "○"){
//         op_2_6.innerHTML = "";
//         op_6_2.innerHTML = "";
//       }
//     })
//     op_2_7.addEventListener('click', function(){
//       if (op_2_7.innerHTML == "") {
//         op_2_7.innerHTML = "○";
//         op_7_2.innerHTML = "●";
//       }
//       else if (op_2_7.innerHTML == "○"){
//         op_2_7.innerHTML = "";
//         op_7_2.innerHTML = "";
//       }
//     })
//     op_2_8.addEventListener('click', function(){
//       if (op_2_8.innerHTML == "") {
//         op_2_8.innerHTML = "○";
//         op_8_2.innerHTML = "●";
//       }
//       else if (op_2_8.innerHTML == "○"){
//         op_2_8.innerHTML = "";
//         op_8_2.innerHTML = "";
//       }
//     })
//     op_2_9.addEventListener('click', function(){
//       if (op_2_9.innerHTML == "") {
//         op_2_9.innerHTML = "○";
//         op_9_2.innerHTML = "●";
//       }
//       else if (op_2_9.innerHTML == "○"){
//         op_2_9.innerHTML = "";
//         op_9_2.innerHTML = "";
//       }
//     })
//     op_2_10.addEventListener('click', function(){
//       if (op_2_10.innerHTML == "") {
//         op_2_10.innerHTML = "○";
//         op_10_2.innerHTML = "●";
//       }
//       else if (op_2_10.innerHTML == "○"){
//         op_2_10.innerHTML = "";
//         op_10_2.innerHTML = "";
//       }
//     })
//     op_3_1.addEventListener('click', function(){
//       if (op_3_1.innerHTML == ""){
//         op_3_1.innerHTML = "○";
//         op_1_3.innerHTML = "●";
//       }
//       else if (op_3_1.innerHTML == "○"){
//         op_3_1.innerHTML = "";
//         op_1_3.innerHTML = "";
//       }
//     })
//     op_3_2.addEventListener('click', function(){
//       if (op_3_2.innerHTML == ""){
//         op_3_2.innerHTML = "○";
//         op_2_3.innerHTML = "●";
//       }
//       else if (op_3_2.innerHTML == "○"){
//         op_3_2.innerHTML = "";
//         op_2_3.innerHTML = "";
//       }
//     })
//     op_3_4.addEventListener('click', function(){
//       if (op_3_4.innerHTML == ""){
//         op_3_4.innerHTML = "○";
//         op_4_3.innerHTML = "●";
//       }
//       else if (op_3_4.innerHTML == "○"){
//         op_4_3.innerHTML = "";
//         op_3_4.innerHTML = "";
//       }
//     })
//     op_3_5.addEventListener('click', function(){
//       if (op_3_5.innerHTML == ""){
//         op_3_5.innerHTML = "○";
//         op_5_3.innerHTML = "●";
//       }
//       else if (op_3_5.innerHTML == "○"){
//         op_3_5.innerHTML = "";
//         op_5_3.innerHTML = "";
//       }
//     })
//     op_3_6.addEventListener('click', function(){
//       if (op_3_6.innerHTML == "") {
//         op_3_6.innerHTML = "○";
//         op_6_3.innerHTML = "●";
//       }
//       else if (op_3_6.innerHTML == "○"){
//         op_3_6.innerHTML = "";
//         op_6_3.innerHTML = "";
//       }
//     })
//     op_3_7.addEventListener('click', function(){
//       if (op_3_7.innerHTML == "") {
//         op_3_7.innerHTML = "○";
//         op_7_3.innerHTML = "●";
//       }
//       else if (op_3_7.innerHTML == "○"){
//         op_3_7.innerHTML = "";
//         op_7_3.innerHTML = "";
//       }
//     })
//     op_3_8.addEventListener('click', function(){
//       if (op_3_8.innerHTML == "") {
//         op_3_8.innerHTML = "○";
//         op_8_3.innerHTML = "●";
//       }
//       else if (op_3_8.innerHTML == "○"){
//         op_3_8.innerHTML = "";
//         op_8_3.innerHTML = "";
//       }
//     })
//     op_3_9.addEventListener('click', function(){
//       if (op_3_9.innerHTML == "") {
//         op_3_9.innerHTML = "○";
//         op_9_3.innerHTML = "●";
//       }
//       else if (op_3_9.innerHTML == "○"){
//         op_3_9.innerHTML = "";
//         op_9_3.innerHTML = "";
//       }
//     })
//     op_3_10.addEventListener('click', function(){
//       if (op_3_10.innerHTML == "") {
//         op_3_10.innerHTML = "○";
//         op_10_3.innerHTML = "●";
//       }
//       else if (op_3_10.innerHTML == "○"){
//         op_3_10.innerHTML = "";
//         op_10_3.innerHTML = "";
//       }
//     })
//     op_4_1.addEventListener('click', function(){
//       if (op_4_1.innerHTML == ""){
//         op_4_1.innerHTML = "○";
//         op_1_4.innerHTML = "●";
//       }
//       else if (op_4_1.innerHTML == "○"){
//         op_4_1.innerHTML = "";
//         op_1_4.innerHTML = "";
//       }
//     })
//     op_4_2.addEventListener('click', function(){
//       if (op_4_2.innerHTML == ""){
//         op_4_2.innerHTML = "○";
//         op_2_4.innerHTML = "●";
//       }
//       else if (op_4_2.innerHTML == "○"){
//         op_4_2.innerHTML = "";
//         op_2_4.innerHTML = "";
//       }
//     })
//     op_4_3.addEventListener('click', function(){
//       if (op_4_3.innerHTML == ""){
//         op_4_3.innerHTML = "○";
//         op_3_4.innerHTML = "●";
//       }
//       else if (op_4_3.innerHTML == "○"){
//         op_4_3.innerHTML = "";
//         op_3_4.innerHTML = "";
//       }
//     })
//     op_4_5.addEventListener('click', function(){
//       if (op_4_5.innerHTML == ""){
//         op_4_5.innerHTML = "○";
//         op_5_4.innerHTML = "●";
//       }
//       else if (op_4_5.innerHTML == "○"){
//         op_4_5.innerHTML = "";
//         op_5_4.innerHTML = "";
//       }
//     })
//     op_4_6.addEventListener('click', function(){
//       if (op_4_6.innerHTML == "") {
//         op_4_6.innerHTML = "○";
//         op_6_4.innerHTML = "●";
//       }
//       else if (op_4_6.innerHTML == "○"){
//         op_4_6.innerHTML = "";
//         op_6_4.innerHTML = "";
//       }
//     })
//     op_4_7.addEventListener('click', function(){
//       if (op_4_7.innerHTML == "") {
//         op_4_7.innerHTML = "○";
//         op_7_4.innerHTML = "●";
//       }
//       else if (op_4_7.innerHTML == "○"){
//         op_4_7.innerHTML = "";
//         op_7_4.innerHTML = "";
//       }
//     })
//     op_4_8.addEventListener('click', function(){
//       if (op_4_8.innerHTML == "") {
//         op_4_8.innerHTML = "○";
//         op_8_4.innerHTML = "●";
//       }
//       else if (op_4_8.innerHTML == "○"){
//         op_4_8.innerHTML = "";
//         op_8_4.innerHTML = "";
//       }
//     })
//     op_4_9.addEventListener('click', function(){
//       if (op_4_9.innerHTML == "") {
//         op_4_9.innerHTML = "○";
//         op_9_4.innerHTML = "●";
//       }
//       else if (op_4_9.innerHTML == "○"){
//         op_4_9.innerHTML = "";
//         op_9_4.innerHTML = "";
//       }
//     })
//     op_4_10.addEventListener('click', function(){
//       if (op_4_10.innerHTML == "") {
//         op_4_10.innerHTML = "○";
//         op_10_4.innerHTML = "●";
//       }
//       else if (op_4_10.innerHTML == "○"){
//         op_4_10.innerHTML = "";
//         op_10_4.innerHTML = "";
//       }
//     })
//     op_5_1.addEventListener('click', function(){
//       if (op_5_1.innerHTML == ""){
//         op_5_1.innerHTML = "○";
//         op_1_5.innerHTML = "●";
//       }
//       else if (op_5_1.innerHTML == "○"){
//         op_5_1.innerHTML = "";
//         op_1_5.innerHTML = "";
//       }
//     })
//     op_5_2.addEventListener('click', function(){
//       if (op_5_2.innerHTML == ""){
//         op_5_2.innerHTML = "○";
//         op_2_5.innerHTML = "●";
//       }
//       else if (op_5_2.innerHTML == "○"){
//         op_5_2.innerHTML = "";
//         op_2_5.innerHTML = "";
//       }
//     })
//     op_5_3.addEventListener('click', function(){
//       if (op_5_3.innerHTML == ""){
//         op_5_3.innerHTML = "○";
//         op_3_5.innerHTML = "●";
//       }
//       else if (op_5_3.innerHTML == "○"){
//         op_5_3.innerHTML = "";
//         op_3_5.innerHTML = "";
//       }
//     })
//     op_5_4.addEventListener('click', function(){
//       if (op_5_4.innerHTML == ""){
//         op_5_4.innerHTML = "○";
//         op_4_5.innerHTML = "●";
//       }
//       else if (op_5_4.innerHTML == "○"){
//         op_5_4.innerHTML = "";
//         op_4_5.innerHTML = "";
//       }
//     })
//     op_5_6.addEventListener('click', function(){
//       if (op_5_6.innerHTML == "") {
//         op_5_6.innerHTML = "○";
//         op_6_5.innerHTML = "●";
//       }
//       else if (op_5_6.innerHTML == "○"){
//         op_5_6.innerHTML = "";
//         op_6_5.innerHTML = "";
//       }
//     })
//     op_5_7.addEventListener('click', function(){
//       if (op_5_7.innerHTML == "") {
//         op_5_7.innerHTML = "○";
//         op_7_5.innerHTML = "●";
//       }
//       else if (op_5_7.innerHTML == "○"){
//         op_5_7.innerHTML = "";
//         op_7_5.innerHTML = "";
//       }
//     })
//     op_5_8.addEventListener('click', function(){
//       if (op_5_8.innerHTML == "") {
//         op_5_8.innerHTML = "○";
//         op_8_5.innerHTML = "●";
//       }
//       else if (op_5_8.innerHTML == "○"){
//         op_5_8.innerHTML = "";
//         op_8_5.innerHTML = "";
//       }
//     })
//     op_5_9.addEventListener('click', function(){
//       if (op_5_9.innerHTML == "") {
//         op_5_9.innerHTML = "○";
//         op_9_5.innerHTML = "●";
//       }
//       else if (op_5_9.innerHTML == "○"){
//         op_5_9.innerHTML = "";
//         op_9_5.innerHTML = "";
//       }
//     })
//     op_5_10.addEventListener('click', function(){
//       if (op_5_10.innerHTML == "") {
//         op_5_10.innerHTML = "○";
//         op_10_5.innerHTML = "●";
//       }
//       else if (op_5_10.innerHTML == "○"){
//         op_5_10.innerHTML = "";
//         op_10_5.innerHTML = "";
//       }
//     })
//     op_6_1.addEventListener('click', function(){
//       if (op_6_1.innerHTML == ""){
//         op_6_1.innerHTML = "○";
//         op_1_6.innerHTML = "●";
//       }
//       else if (op_6_1.innerHTML == "○"){
//         op_6_1.innerHTML = "";
//         op_1_6.innerHTML = "";
//       }
//     })
//     op_6_2.addEventListener('click', function(){
//       if (op_6_2.innerHTML == ""){
//         op_6_2.innerHTML = "○";
//         op_2_6.innerHTML = "●";
//       }
//       else if (op_6_2.innerHTML == "○"){
//         op_6_2.innerHTML = "";
//         op_2_6.innerHTML = "";
//       }
//     })
//     op_6_3.addEventListener('click', function(){
//       if (op_6_3.innerHTML == ""){
//         op_6_3.innerHTML = "○";
//         op_3_6.innerHTML = "●";
//       }
//       else if (op_6_3.innerHTML == "○"){
//         op_6_3.innerHTML = "";
//         op_3_6.innerHTML = "";
//       }
//     })
//     op_6_4.addEventListener('click', function(){
//       if (op_6_4.innerHTML == "") {
//         op_6_4.innerHTML = "○";
//         op_4_6.innerHTML = "●";
//       }
//       else if (op_6_4.innerHTML == "○"){
//         op_6_4.innerHTML = "";
//         op_4_6.innerHTML = "";
//       }
//     })
//     op_6_5.addEventListener('click', function(){
//       if (op_6_5.innerHTML == ""){
//         op_6_5.innerHTML = "○";
//         op_5_6.innerHTML = "●";
//       }
//       else if (op_6_5.innerHTML == "○"){
//         op_6_5.innerHTML = "";
//         op_5_6.innerHTML = "";
//       }
//     })
//     op_6_7.addEventListener('click', function(){
//       if (op_6_7.innerHTML == "") {
//         op_6_7.innerHTML = "○";
//         op_7_6.innerHTML = "●";
//       }
//       else if (op_6_7.innerHTML == "○"){
//         op_6_7.innerHTML = "";
//         op_7_6.innerHTML = "";
//       }
//     })
//     op_6_8.addEventListener('click', function(){
//       if (op_6_8.innerHTML == "") {
//         op_6_8.innerHTML = "○";
//         op_8_6.innerHTML = "●";
//       }
//       else if (op_6_8.innerHTML == "○"){
//         op_6_8.innerHTML = "";
//         op_8_6.innerHTML = "";
//       }
//     })
//     op_6_9.addEventListener('click', function(){
//       if (op_6_9.innerHTML == "") {
//         op_6_9.innerHTML = "○";
//         op_9_6.innerHTML = "●";
//       }
//       else if (op_6_9.innerHTML == "○"){
//         op_6_9.innerHTML = "";
//         op_9_6.innerHTML = "";
//       }
//     })
//     op_6_10.addEventListener('click', function(){
//       if (op_6_10.innerHTML == "") {
//         op_6_10.innerHTML = "○";
//         op_10_6.innerHTML = "●";
//       }
//       else if (op_6_10.innerHTML == "○"){
//         op_6_10.innerHTML = "";
//         op_10_6.innerHTML = "";
//       }
//     })
//     op_7_1.addEventListener('click', function(){
//       if (op_7_1.innerHTML == ""){
//         op_7_1.innerHTML = "○";
//         op_1_7.innerHTML = "●";
//       }
//       else if (op_7_1.innerHTML == "○"){
//         op_7_1.innerHTML = "";
//         op_1_7.innerHTML = "";
//       }
//     })
//     op_7_2.addEventListener('click', function(){
//       if (op_7_2.innerHTML == ""){
//         op_7_2.innerHTML = "○";
//         op_2_7.innerHTML = "●";
//       }
//       else if (op_7_2.innerHTML == "○"){
//         op_7_2.innerHTML = "";
//         op_2_7.innerHTML = "";
//       }
//     })
//     op_7_3.addEventListener('click', function(){
//       if (op_7_3.innerHTML == ""){
//         op_7_3.innerHTML = "○";
//         op_3_7.innerHTML = "●";
//       }
//       else if (op_7_3.innerHTML == "○"){
//         op_7_3.innerHTML = "";
//         op_3_7.innerHTML = "";
//       }
//     })
//     op_7_4.addEventListener('click', function(){
//       if (op_7_4.innerHTML == "") {
//         op_7_4.innerHTML = "○";
//         op_4_7.innerHTML = "●";
//       }
//       else if (op_7_4.innerHTML == "○"){
//         op_7_4.innerHTML = "";
//         op_4_7.innerHTML = "";
//       }
//     })
//     op_7_5.addEventListener('click', function(){
//       if (op_7_5.innerHTML == ""){
//         op_7_5.innerHTML = "○";
//         op_5_7.innerHTML = "●";
//       }
//       else if (op_7_5.innerHTML == "○"){
//         op_7_5.innerHTML = "";
//         op_5_7.innerHTML = "";
//       }
//     })
//     op_7_6.addEventListener('click', function(){
//       if (op_7_6.innerHTML == "") {
//         op_7_6.innerHTML = "○";
//         op_6_7.innerHTML = "●";
//       }
//       else if (op_7_6.innerHTML == "○"){
//         op_7_6.innerHTML = "";
//         op_6_7.innerHTML = "";
//       }
//     })
//     op_7_8.addEventListener('click', function(){
//       if (op_7_8.innerHTML == "") {
//         op_7_8.innerHTML = "○";
//         op_8_7.innerHTML = "●";
//       }
//       else if (op_7_8.innerHTML == "○"){
//         op_7_8.innerHTML = "";
//         op_8_7.innerHTML = "";
//       }
//     })
//     op_7_9.addEventListener('click', function(){
//       if (op_7_9.innerHTML == "") {
//         op_7_9.innerHTML = "○";
//         op_9_7.innerHTML = "●";
//       }
//       else if (op_7_9.innerHTML == "○"){
//         op_7_9.innerHTML = "";
//         op_9_7.innerHTML = "";
//       }
//     })
//     op_7_10.addEventListener('click', function(){
//       if (op_7_10.innerHTML == "") {
//         op_7_10.innerHTML = "○";
//         op_10_7.innerHTML = "●";
//       }
//       else if (op_7_10.innerHTML == "○"){
//         op_7_10.innerHTML = "";
//         op_10_7.innerHTML = "";
//       }
//     })
//     op_8_1.addEventListener('click', function(){
//       if (op_8_1.innerHTML == ""){
//         op_8_1.innerHTML = "○";
//         op_1_8.innerHTML = "●";
//       }
//       else if (op_8_1.innerHTML == "○"){
//         op_8_1.innerHTML = "";
//         op_1_8.innerHTML = "";
//       }
//     })
//     op_8_2.addEventListener('click', function(){
//       if (op_8_2.innerHTML == ""){
//         op_8_2.innerHTML = "○";
//         op_2_8.innerHTML = "●";
//       }
//       else if (op_8_2.innerHTML == "○"){
//         op_8_2.innerHTML = "";
//         op_2_8.innerHTML = "";
//       }
//     })
//     op_8_3.addEventListener('click', function(){
//       if (op_8_3.innerHTML == ""){
//         op_8_3.innerHTML = "○";
//         op_3_8.innerHTML = "●";
//       }
//       else if (op_8_3.innerHTML == "○"){
//         op_8_3.innerHTML = "";
//         op_3_8.innerHTML = "";
//       }
//     })
//     op_8_4.addEventListener('click', function(){
//       if (op_8_4.innerHTML == "") {
//         op_8_4.innerHTML = "○";
//         op_4_8.innerHTML = "●";
//       }
//       else if (op_8_4.innerHTML == "○"){
//         op_8_4.innerHTML = "";
//         op_4_8.innerHTML = "";
//       }
//     })
//     op_8_5.addEventListener('click', function(){
//       if (op_8_5.innerHTML == ""){
//         op_8_5.innerHTML = "○";
//         op_5_8.innerHTML = "●";
//       }
//       else if (op_8_5.innerHTML == "○"){
//         op_8_5.innerHTML = "";
//         op_5_8.innerHTML = "";
//       }
//     })
//     op_8_6.addEventListener('click', function(){
//       if (op_8_6.innerHTML == "") {
//         op_8_6.innerHTML = "○";
//         op_6_8.innerHTML = "●";
//       }
//       else if (op_8_6.innerHTML == "○"){
//         op_8_6.innerHTML = "";
//         op_6_8.innerHTML = "";
//       }
//     })
//     op_8_7.addEventListener('click', function(){
//       if (op_8_7.innerHTML == "") {
//         op_8_7.innerHTML = "○";
//         op_7_8.innerHTML = "●";
//       }
//       else if (op_8_7.innerHTML == "○"){
//         op_8_7.innerHTML = "";
//         op_7_8.innerHTML = "";
//       }
//     })
//     op_8_9.addEventListener('click', function(){
//       if (op_8_9.innerHTML == "") {
//         op_8_9.innerHTML = "○";
//         op_9_8.innerHTML = "●";
//       }
//       else if (op_8_9.innerHTML == "○"){
//         op_8_9.innerHTML = "";
//         op_9_8.innerHTML = "";
//       }
//     })
//     op_8_10.addEventListener('click', function(){
//       if (op_8_10.innerHTML == "") {
//         op_8_10.innerHTML = "○";
//         op_10_8.innerHTML = "●";
//       }
//       else if (op_8_10.innerHTML == "○"){
//         op_8_10.innerHTML = "";
//         op_10_8.innerHTML = "";
//       }
//     })
//     op_9_1.addEventListener('click', function(){
//       if (op_9_1.innerHTML == ""){
//         op_9_1.innerHTML = "○";
//         op_1_9.innerHTML = "●";
//       }
//       else if (op_9_1.innerHTML == "○"){
//         op_9_1.innerHTML = "";
//         op_1_9.innerHTML = "";
//       }
//     })
//     op_9_2.addEventListener('click', function(){
//       if (op_9_2.innerHTML == ""){
//         op_9_2.innerHTML = "○";
//         op_2_9.innerHTML = "●";
//       }
//       else if (op_9_2.innerHTML == "○"){
//         op_9_2.innerHTML = "";
//         op_2_9.innerHTML = "";
//       }
//     })
//     op_9_3.addEventListener('click', function(){
//       if (op_9_3.innerHTML == ""){
//         op_9_3.innerHTML = "○";
//         op_3_9.innerHTML = "●";
//       }
//       else if (op_9_3.innerHTML == "○"){
//         op_9_3.innerHTML = "";
//         op_3_9.innerHTML = "";
//       }
//     })
//     op_9_4.addEventListener('click', function(){
//       if (op_9_4.innerHTML == "") {
//         op_9_4.innerHTML = "○";
//         op_4_9.innerHTML = "●";
//       }
//       else if (op_9_4.innerHTML == "○"){
//         op_9_4.innerHTML = "";
//         op_4_9.innerHTML = "";
//       }
//     })
//     op_9_5.addEventListener('click', function(){
//       if (op_9_5.innerHTML == ""){
//         op_9_5.innerHTML = "○";
//         op_5_9.innerHTML = "●";
//       }
//       else if (op_9_5.innerHTML == "○"){
//         op_9_5.innerHTML = "";
//         op_5_9.innerHTML = "";
//       }
//     })
//     op_9_6.addEventListener('click', function(){
//       if (op_9_6.innerHTML == "") {
//         op_9_6.innerHTML = "○";
//         op_6_9.innerHTML = "●";
//       }
//       else if (op_9_6.innerHTML == "○"){
//         op_9_6.innerHTML = "";
//         op_6_9.innerHTML = "";
//       }
//     })
//     op_9_7.addEventListener('click', function(){
//       if (op_9_7.innerHTML == "") {
//         op_9_7.innerHTML = "○";
//         op_7_9.innerHTML = "●";
//       }
//       else if (op_9_7.innerHTML == "○"){
//         op_9_7.innerHTML = "";
//         op_7_9.innerHTML = "";
//       }
//     })
//     op_9_8.addEventListener('click', function(){
//       if (op_9_8.innerHTML == "") {
//         op_9_8.innerHTML = "○";
//         op_8_9.innerHTML = "●";
//       }
//       else if (op_9_8.innerHTML == "○"){
//         op_9_8.innerHTML = "";
//         op_8_9.innerHTML = "";
//       }
//     })
//     op_9_10.addEventListener('click', function(){
//       if (op_9_10.innerHTML == "") {
//         op_9_10.innerHTML = "○";
//         op_10_9.innerHTML = "●";
//       }
//       else if (op_9_10.innerHTML == "○"){
//         op_9_10.innerHTML = "";
//         op_10_9.innerHTML = "";
//       }
//     })
//     op_10_1.addEventListener('click', function(){
//       if (op_10_1.innerHTML == ""){
//         op_10_1.innerHTML = "○";
//         op_1_10.innerHTML = "●";
//       }
//       else if (op_10_1.innerHTML == "○"){
//         op_10_1.innerHTML = "";
//         op_1_10.innerHTML = "";
//       }
//     })
//     op_10_2.addEventListener('click', function(){
//       if (op_10_2.innerHTML == ""){
//         op_10_2.innerHTML = "○";
//         op_2_10.innerHTML = "●";
//       }
//       else if (op_10_2.innerHTML == "○"){
//         op_10_2.innerHTML = "";
//         op_2_10.innerHTML = "";
//       }
//     })
//     op_10_3.addEventListener('click', function(){
//       if (op_10_3.innerHTML == ""){
//         op_10_3.innerHTML = "○";
//         op_3_10.innerHTML = "●";
//       }
//       else if (op_10_3.innerHTML == "○"){
//         op_10_3.innerHTML = "";
//         op_3_10.innerHTML = "";
//       }
//     })
//     op_10_4.addEventListener('click', function(){
//       if (op_10_4.innerHTML == "") {
//         op_10_4.innerHTML = "○";
//         op_4_10.innerHTML = "●";
//       }
//       else if (op_10_4.innerHTML == "○"){
//         op_10_4.innerHTML = "";
//         op_4_10.innerHTML = "";
//       }
//     })
//     op_10_5.addEventListener('click', function(){
//       if (op_10_5.innerHTML == ""){
//         op_10_5.innerHTML = "○";
//         op_5_10.innerHTML = "●";
//       }
//       else if (op_10_5.innerHTML == "○"){
//         op_10_5.innerHTML = "";
//         op_5_10.innerHTML = "";
//       }
//     })
//     op_10_6.addEventListener('click', function(){
//       if (op_10_6.innerHTML == "") {
//         op_10_6.innerHTML = "○";
//         op_6_10.innerHTML = "●";
//       }
//       else if (op_10_6.innerHTML == "○"){
//         op_10_6.innerHTML = "";
//         op_6_10.innerHTML = "";
//       }
//     })
//     op_10_7.addEventListener('click', function(){
//       if (op_10_7.innerHTML == "") {
//         op_10_7.innerHTML = "○";
//         op_7_10.innerHTML = "●";
//       }
//       else if (op_10_7.innerHTML == "○"){
//         op_10_7.innerHTML = "";
//         op_7_10.innerHTML = "";
//       }
//     })
//     op_10_8.addEventListener('click', function(){
//       if (op_10_8.innerHTML == "") {
//         op_10_8.innerHTML = "○";
//         op_8_10.innerHTML = "●";
//       }
//       else if (op_10_8.innerHTML == "○"){
//         op_10_8.innerHTML = "";
//         op_8_10.innerHTML = "";
//       }
//     })
//     op_10_9.addEventListener('click', function(){
//       if (op_10_9.innerHTML == "") {
//         op_10_9.innerHTML = "○";
//         op_9_10.innerHTML = "●";
//       }
//       else if (op_10_9.innerHTML == "○"){
//         op_10_9.innerHTML = "";
//         op_9_10.innerHTML = "";
//       }
//     })
// })