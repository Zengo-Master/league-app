window.addEventListener('load', function(){

  const cell1_2 = document.getElementById("cell1-2")
  const cell1_3 = document.getElementById("cell1-3")
  const cell1_4 = document.getElementById("cell1-4")
  const cell1_5 = document.getElementById("cell1-5")
  const cell1_6 = document.getElementById("cell1-6")
  const cell1_7 = document.getElementById("cell1-7")
  const cell1_8 = document.getElementById("cell1-8")
  const cell1_9 = document.getElementById("cell1-9")
  const cell1_10 = document.getElementById("cell1-10")
  const win_1 = document.getElementById("win-1")
  const lose_1 = document.getElementById("lose-1")

  const cell2_1 = document.getElementById("cell2-1")
  const cell2_3 = document.getElementById("cell2-3")
  const cell2_4 = document.getElementById("cell2-4")
  const cell2_5 = document.getElementById("cell2-5")
  const cell2_6 = document.getElementById("cell2-6")
  const cell2_7 = document.getElementById("cell2-7")
  const cell2_8 = document.getElementById("cell2-8")
  const cell2_9 = document.getElementById("cell2-9")
  const cell2_10 = document.getElementById("cell2-10")
  const win_2 = document.getElementById("win-2")
  const lose_2 = document.getElementById("lose-2")

  const cell3_1 = document.getElementById("cell3-1")
  const cell3_2 = document.getElementById("cell3-2")
  const cell3_4 = document.getElementById("cell3-4")
  const cell3_5 = document.getElementById("cell3-5")
  const cell3_6 = document.getElementById("cell3-6")
  const cell3_7 = document.getElementById("cell3-7")
  const cell3_8 = document.getElementById("cell3-8")
  const cell3_9 = document.getElementById("cell3-9")
  const cell3_10 = document.getElementById("cell3-10")
  const win_3 = document.getElementById("win-3")
  const lose_3 = document.getElementById("lose-3")

  const cell4_1 = document.getElementById("cell4-1")
  const cell4_2 = document.getElementById("cell4-2")
  const cell4_3 = document.getElementById("cell4-3")
  const cell4_5 = document.getElementById("cell4-5")
  const cell4_6 = document.getElementById("cell4-6")
  const cell4_7 = document.getElementById("cell4-7")
  const cell4_8 = document.getElementById("cell4-8")
  const cell4_9 = document.getElementById("cell4-9")
  const win_4 = document.getElementById("win-4")
  const lose_4 = document.getElementById("lose-4")

  const cell4_10 = document.getElementById("cell4-10")
  const cell5_1 = document.getElementById("cell5-1")
  const cell5_2 = document.getElementById("cell5-2")
  const cell5_3 = document.getElementById("cell5-3")
  const cell5_4 = document.getElementById("cell5-4")
  const cell5_6 = document.getElementById("cell5-6")
  const cell5_7 = document.getElementById("cell5-7")
  const cell5_8 = document.getElementById("cell5-8")
  const cell5_9 = document.getElementById("cell5-9")
  const cell5_10 = document.getElementById("cell5-10")
  const win_5 = document.getElementById("win-1")
  const lose_5 = document.getElementById("lose-1")

  const cell6_1 = document.getElementById("cell6-1")
  const cell6_2 = document.getElementById("cell6-2")
  const cell6_3 = document.getElementById("cell6-3")
  const cell6_4 = document.getElementById("cell6-4")
  const cell6_5 = document.getElementById("cell6-5")
  const cell6_7 = document.getElementById("cell6-7")
  const cell6_8 = document.getElementById("cell6-8")
  const cell6_9 = document.getElementById("cell6-9")
  const cell6_10 = document.getElementById("cell6-10")
  const win_6 = document.getElementById("win-6")
  const lose_6 = document.getElementById("lose-6")

  const cell7_1 = document.getElementById("cell7-1")
  const cell7_2 = document.getElementById("cell7-2")
  const cell7_3 = document.getElementById("cell7-3")
  const cell7_4 = document.getElementById("cell7-4")
  const cell7_5 = document.getElementById("cell7-5")
  const cell7_6 = document.getElementById("cell7-6")
  const cell7_8 = document.getElementById("cell7-8")
  const cell7_9 = document.getElementById("cell7-9")
  const cell7_10 = document.getElementById("cell7-10")
  const win_7 = document.getElementById("win-7")
  const lose_7 = document.getElementById("lose-7")

  const cell8_1 = document.getElementById("cell8-1")
  const cell8_2 = document.getElementById("cell8-2")
  const cell8_3 = document.getElementById("cell8-3")
  const cell8_4 = document.getElementById("cell8-4")
  const cell8_5 = document.getElementById("cell8-5")
  const cell8_6 = document.getElementById("cell8-6")
  const cell8_7 = document.getElementById("cell8-7")
  const cell8_9 = document.getElementById("cell8-9")
  const cell8_10 = document.getElementById("cell8-10")
  const win_8 = document.getElementById("win-8")
  const lose_8 = document.getElementById("lose-8")

  const cell9_1 = document.getElementById("cell9-1")
  const cell9_2 = document.getElementById("cell9-2")
  const cell9_3 = document.getElementById("cell9-3")
  const cell9_4 = document.getElementById("cell9-4")
  const cell9_5 = document.getElementById("cell9-5")
  const cell9_6 = document.getElementById("cell9-6")
  const cell9_7 = document.getElementById("cell9-7")
  const cell9_8 = document.getElementById("cell9-8")
  const cell9_10 = document.getElementById("cell9-10")
  const win_9 = document.getElementById("win-9")
  const lose_9 = document.getElementById("lose-9")

  const cell10_1 = document.getElementById("cell10-1")
  const cell10_2 = document.getElementById("cell10-2")
  const cell10_3 = document.getElementById("cell10-3")
  const cell10_4 = document.getElementById("cell10-4")
  const cell10_5 = document.getElementById("cell10-5")
  const cell10_6 = document.getElementById("cell10-6")
  const cell10_7 = document.getElementById("cell10-7")
  const cell10_8 = document.getElementById("cell10-8")
  const cell10_9 = document.getElementById("cell10-9")
  const win_10 = document.getElementById("win-10")
  const lose_10 = document.getElementById("lose-10")

    cell1_2.addEventListener('click', function(){
      if (cell1_2.innerHTML == ""){
        cell1_2.innerHTML = "○";
        cell2_1.innerHTML = "●";
      }
      else if (cell1_2.innerHTML == "○"){
        cell1_2.innerHTML = "";
        cell2_1.innerHTML = "";
      }
    })
    cell1_3.addEventListener('click', function(){
      if (cell1_3.innerHTML == ""){
        cell1_3.innerHTML = "○";
        cell3_1.innerHTML = "●";
      }
      else if (cell1_3.innerHTML == "○"){
        cell1_3.innerHTML = "";
        cell3_1.innerHTML = "";
      }
    })
    cell1_4.addEventListener('click', function(){
      if (cell1_4.innerHTML == ""){
        cell1_4.innerHTML = "○";
        cell4_1.innerHTML = "●";
      }
      else if (cell1_4.innerHTML == "○"){
        cell4_1.innerHTML = "";
        cell1_4.innerHTML = "";
      }
    })
    cell1_5.addEventListener('click', function(){
      if (cell1_5.innerHTML == ""){
        cell1_5.innerHTML = "○";
        cell5_1.innerHTML = "●";
      }
      else if (cell1_5.innerHTML == "○"){
        cell1_5.innerHTML = "";
        cell5_1.innerHTML = "";
      }
    })
    cell1_6.addEventListener('click', function(){
      if (cell1_6.innerHTML == "") {
        cell1_6.innerHTML = "○";
        cell6_1.innerHTML = "●";
      }
      else if (cell1_6.innerHTML == "○"){
        cell1_6.innerHTML = "";
        cell6_1.innerHTML = "";
      }
    })
    cell1_7.addEventListener('click', function(){
      if (cell1_7.innerHTML == "") {
        cell1_7.innerHTML = "○";
        cell7_1.innerHTML = "●";
      }
      else if (cell1_7.innerHTML == "○"){
        cell1_7.innerHTML = "";
        cell7_1.innerHTML = "";
      }
    })
    cell1_8.addEventListener('click', function(){
      if (cell1_8.innerHTML == "") {
        cell1_8.innerHTML = "○";
        cell8_1.innerHTML = "●";
      }
      else if (cell1_8.innerHTML == "○"){
        cell1_8.innerHTML = "";
        cell8_1.innerHTML = "";
      }
    })
    cell1_9.addEventListener('click', function(){
      if (cell1_9.innerHTML == "") {
        cell1_9.innerHTML = "○";
        cell9_1.innerHTML = "●";
      }
      else if (cell1_9.innerHTML == "○"){
        cell1_9.innerHTML = "";
        cell9_1.innerHTML = "";
      }
    })
    cell1_10.addEventListener('click', function(){
      if (cell1_10.innerHTML == "") {
        cell1_10.innerHTML = "○";
        cell10_1.innerHTML = "●";
      }
      else if (cell1_10.innerHTML == "○"){
        cell1_10.innerHTML = "";
        cell10_1.innerHTML = "";
      }
    })
    cell2_1.addEventListener('click', function(){
      if (cell2_1.innerHTML == ""){
        cell2_1.innerHTML = "○";
        cell1_2.innerHTML = "●";
      }
      else if (cell2_1.innerHTML == "○"){
        cell2_1.innerHTML = "";
        cell1_2.innerHTML = "";
      }
    })
    cell2_3.addEventListener('click', function(){
      if (cell2_3.innerHTML == ""){
        cell2_3.innerHTML = "○";
        cell3_2.innerHTML = "●";
      }
      else if (cell2_3.innerHTML == "○"){
        cell2_3.innerHTML = "";
        cell3_2.innerHTML = "";
      }
    })
    cell2_4.addEventListener('click', function(){
      if (cell2_4.innerHTML == ""){
        cell2_4.innerHTML = "○";
        cell4_2.innerHTML = "●";
      }
      else if (cell2_4.innerHTML == "○"){
        cell4_2.innerHTML = "";
        cell2_4.innerHTML = "";
      }
    })
    cell2_5.addEventListener('click', function(){
      if (cell2_5.innerHTML == ""){
        cell2_5.innerHTML = "○";
        cell5_2.innerHTML = "●";
      }
      else if (cell2_5.innerHTML == "○"){
        cell2_5.innerHTML = "";
        cell5_2.innerHTML = "";
      }
    })
    cell2_6.addEventListener('click', function(){
      if (cell2_6.innerHTML == "") {
        cell2_6.innerHTML = "○";
        cell6_2.innerHTML = "●";
      }
      else if (cell2_6.innerHTML == "○"){
        cell2_6.innerHTML = "";
        cell6_2.innerHTML = "";
      }
    })
    cell2_7.addEventListener('click', function(){
      if (cell2_7.innerHTML == "") {
        cell2_7.innerHTML = "○";
        cell7_2.innerHTML = "●";
      }
      else if (cell2_7.innerHTML == "○"){
        cell2_7.innerHTML = "";
        cell7_2.innerHTML = "";
      }
    })
    cell2_8.addEventListener('click', function(){
      if (cell2_8.innerHTML == "") {
        cell2_8.innerHTML = "○";
        cell8_2.innerHTML = "●";
      }
      else if (cell2_8.innerHTML == "○"){
        cell2_8.innerHTML = "";
        cell8_2.innerHTML = "";
      }
    })
    cell2_9.addEventListener('click', function(){
      if (cell2_9.innerHTML == "") {
        cell2_9.innerHTML = "○";
        cell9_2.innerHTML = "●";
      }
      else if (cell2_9.innerHTML == "○"){
        cell2_9.innerHTML = "";
        cell9_2.innerHTML = "";
      }
    })
    cell2_10.addEventListener('click', function(){
      if (cell2_10.innerHTML == "") {
        cell2_10.innerHTML = "○";
        cell10_2.innerHTML = "●";
      }
      else if (cell2_10.innerHTML == "○"){
        cell2_10.innerHTML = "";
        cell10_2.innerHTML = "";
      }
    })
    cell3_1.addEventListener('click', function(){
      if (cell3_1.innerHTML == ""){
        cell3_1.innerHTML = "○";
        cell1_3.innerHTML = "●";
      }
      else if (cell3_1.innerHTML == "○"){
        cell3_1.innerHTML = "";
        cell1_3.innerHTML = "";
      }
    })
    cell3_2.addEventListener('click', function(){
      if (cell3_2.innerHTML == ""){
        cell3_2.innerHTML = "○";
        cell2_3.innerHTML = "●";
      }
      else if (cell3_2.innerHTML == "○"){
        cell3_2.innerHTML = "";
        cell2_3.innerHTML = "";
      }
    })
    cell3_4.addEventListener('click', function(){
      if (cell3_4.innerHTML == ""){
        cell3_4.innerHTML = "○";
        cell4_3.innerHTML = "●";
      }
      else if (cell3_4.innerHTML == "○"){
        cell4_3.innerHTML = "";
        cell3_4.innerHTML = "";
      }
    })
    cell3_5.addEventListener('click', function(){
      if (cell3_5.innerHTML == ""){
        cell3_5.innerHTML = "○";
        cell5_3.innerHTML = "●";
      }
      else if (cell3_5.innerHTML == "○"){
        cell3_5.innerHTML = "";
        cell5_3.innerHTML = "";
      }
    })
    cell3_6.addEventListener('click', function(){
      if (cell3_6.innerHTML == "") {
        cell3_6.innerHTML = "○";
        cell6_3.innerHTML = "●";
      }
      else if (cell3_6.innerHTML == "○"){
        cell3_6.innerHTML = "";
        cell6_3.innerHTML = "";
      }
    })
    cell3_7.addEventListener('click', function(){
      if (cell3_7.innerHTML == "") {
        cell3_7.innerHTML = "○";
        cell7_3.innerHTML = "●";
      }
      else if (cell3_7.innerHTML == "○"){
        cell3_7.innerHTML = "";
        cell7_3.innerHTML = "";
      }
    })
    cell3_8.addEventListener('click', function(){
      if (cell3_8.innerHTML == "") {
        cell3_8.innerHTML = "○";
        cell8_3.innerHTML = "●";
      }
      else if (cell3_8.innerHTML == "○"){
        cell3_8.innerHTML = "";
        cell8_3.innerHTML = "";
      }
    })
    cell3_9.addEventListener('click', function(){
      if (cell3_9.innerHTML == "") {
        cell3_9.innerHTML = "○";
        cell9_3.innerHTML = "●";
      }
      else if (cell3_9.innerHTML == "○"){
        cell3_9.innerHTML = "";
        cell9_3.innerHTML = "";
      }
    })
    cell3_10.addEventListener('click', function(){
      if (cell3_10.innerHTML == "") {
        cell3_10.innerHTML = "○";
        cell10_3.innerHTML = "●";
      }
      else if (cell3_10.innerHTML == "○"){
        cell3_10.innerHTML = "";
        cell10_3.innerHTML = "";
      }
    })
    cell4_1.addEventListener('click', function(){
      if (cell4_1.innerHTML == ""){
        cell4_1.innerHTML = "○";
        cell1_4.innerHTML = "●";
      }
      else if (cell4_1.innerHTML == "○"){
        cell4_1.innerHTML = "";
        cell1_4.innerHTML = "";
      }
    })
    cell4_2.addEventListener('click', function(){
      if (cell4_2.innerHTML == ""){
        cell4_2.innerHTML = "○";
        cell2_4.innerHTML = "●";
      }
      else if (cell4_2.innerHTML == "○"){
        cell4_2.innerHTML = "";
        cell2_4.innerHTML = "";
      }
    })
    cell4_3.addEventListener('click', function(){
      if (cell4_3.innerHTML == ""){
        cell4_3.innerHTML = "○";
        cell3_4.innerHTML = "●";
      }
      else if (cell4_3.innerHTML == "○"){
        cell4_3.innerHTML = "";
        cell3_4.innerHTML = "";
      }
    })
    cell4_5.addEventListener('click', function(){
      if (cell4_5.innerHTML == ""){
        cell4_5.innerHTML = "○";
        cell5_4.innerHTML = "●";
      }
      else if (cell4_5.innerHTML == "○"){
        cell4_5.innerHTML = "";
        cell5_4.innerHTML = "";
      }
    })
    cell4_6.addEventListener('click', function(){
      if (cell4_6.innerHTML == "") {
        cell4_6.innerHTML = "○";
        cell6_4.innerHTML = "●";
      }
      else if (cell4_6.innerHTML == "○"){
        cell4_6.innerHTML = "";
        cell6_4.innerHTML = "";
      }
    })
    cell4_7.addEventListener('click', function(){
      if (cell4_7.innerHTML == "") {
        cell4_7.innerHTML = "○";
        cell7_4.innerHTML = "●";
      }
      else if (cell4_7.innerHTML == "○"){
        cell4_7.innerHTML = "";
        cell7_4.innerHTML = "";
      }
    })
    cell4_8.addEventListener('click', function(){
      if (cell4_8.innerHTML == "") {
        cell4_8.innerHTML = "○";
        cell8_4.innerHTML = "●";
      }
      else if (cell4_8.innerHTML == "○"){
        cell4_8.innerHTML = "";
        cell8_4.innerHTML = "";
      }
    })
    cell4_9.addEventListener('click', function(){
      if (cell4_9.innerHTML == "") {
        cell4_9.innerHTML = "○";
        cell9_4.innerHTML = "●";
      }
      else if (cell4_9.innerHTML == "○"){
        cell4_9.innerHTML = "";
        cell9_4.innerHTML = "";
      }
    })
    cell4_10.addEventListener('click', function(){
      if (cell4_10.innerHTML == "") {
        cell4_10.innerHTML = "○";
        cell10_4.innerHTML = "●";
      }
      else if (cell4_10.innerHTML == "○"){
        cell4_10.innerHTML = "";
        cell10_4.innerHTML = "";
      }
    })
    cell5_1.addEventListener('click', function(){
      if (cell5_1.innerHTML == ""){
        cell5_1.innerHTML = "○";
        cell1_5.innerHTML = "●";
      }
      else if (cell5_1.innerHTML == "○"){
        cell5_1.innerHTML = "";
        cell1_5.innerHTML = "";
      }
    })
    cell5_2.addEventListener('click', function(){
      if (cell5_2.innerHTML == ""){
        cell5_2.innerHTML = "○";
        cell2_5.innerHTML = "●";
      }
      else if (cell5_2.innerHTML == "○"){
        cell5_2.innerHTML = "";
        cell2_5.innerHTML = "";
      }
    })
    cell5_3.addEventListener('click', function(){
      if (cell5_3.innerHTML == ""){
        cell5_3.innerHTML = "○";
        cell3_5.innerHTML = "●";
      }
      else if (cell5_3.innerHTML == "○"){
        cell5_3.innerHTML = "";
        cell3_5.innerHTML = "";
      }
    })
    cell5_4.addEventListener('click', function(){
      if (cell5_4.innerHTML == ""){
        cell5_4.innerHTML = "○";
        cell4_5.innerHTML = "●";
      }
      else if (cell5_4.innerHTML == "○"){
        cell5_4.innerHTML = "";
        cell4_5.innerHTML = "";
      }
    })
    cell5_6.addEventListener('click', function(){
      if (cell5_6.innerHTML == "") {
        cell5_6.innerHTML = "○";
        cell6_5.innerHTML = "●";
      }
      else if (cell5_6.innerHTML == "○"){
        cell5_6.innerHTML = "";
        cell6_5.innerHTML = "";
      }
    })
    cell5_7.addEventListener('click', function(){
      if (cell5_7.innerHTML == "") {
        cell5_7.innerHTML = "○";
        cell7_5.innerHTML = "●";
      }
      else if (cell5_7.innerHTML == "○"){
        cell5_7.innerHTML = "";
        cell7_5.innerHTML = "";
      }
    })
    cell5_8.addEventListener('click', function(){
      if (cell5_8.innerHTML == "") {
        cell5_8.innerHTML = "○";
        cell8_5.innerHTML = "●";
      }
      else if (cell5_8.innerHTML == "○"){
        cell5_8.innerHTML = "";
        cell8_5.innerHTML = "";
      }
    })
    cell5_9.addEventListener('click', function(){
      if (cell5_9.innerHTML == "") {
        cell5_9.innerHTML = "○";
        cell9_5.innerHTML = "●";
      }
      else if (cell5_9.innerHTML == "○"){
        cell5_9.innerHTML = "";
        cell9_5.innerHTML = "";
      }
    })
    cell5_10.addEventListener('click', function(){
      if (cell5_10.innerHTML == "") {
        cell5_10.innerHTML = "○";
        cell10_5.innerHTML = "●";
      }
      else if (cell5_10.innerHTML == "○"){
        cell5_10.innerHTML = "";
        cell10_5.innerHTML = "";
      }
    })
    cell6_1.addEventListener('click', function(){
      if (cell6_1.innerHTML == ""){
        cell6_1.innerHTML = "○";
        cell1_6.innerHTML = "●";
      }
      else if (cell6_1.innerHTML == "○"){
        cell6_1.innerHTML = "";
        cell1_6.innerHTML = "";
      }
    })
    cell6_2.addEventListener('click', function(){
      if (cell6_2.innerHTML == ""){
        cell6_2.innerHTML = "○";
        cell2_6.innerHTML = "●";
      }
      else if (cell6_2.innerHTML == "○"){
        cell6_2.innerHTML = "";
        cell2_6.innerHTML = "";
      }
    })
    cell6_3.addEventListener('click', function(){
      if (cell6_3.innerHTML == ""){
        cell6_3.innerHTML = "○";
        cell3_6.innerHTML = "●";
      }
      else if (cell6_3.innerHTML == "○"){
        cell6_3.innerHTML = "";
        cell3_6.innerHTML = "";
      }
    })
    cell6_4.addEventListener('click', function(){
      if (cell6_4.innerHTML == "") {
        cell6_4.innerHTML = "○";
        cell4_6.innerHTML = "●";
      }
      else if (cell6_4.innerHTML == "○"){
        cell6_4.innerHTML = "";
        cell4_6.innerHTML = "";
      }
    })
    cell6_5.addEventListener('click', function(){
      if (cell6_5.innerHTML == ""){
        cell6_5.innerHTML = "○";
        cell5_6.innerHTML = "●";
      }
      else if (cell6_5.innerHTML == "○"){
        cell6_5.innerHTML = "";
        cell5_6.innerHTML = "";
      }
    })
    cell6_7.addEventListener('click', function(){
      if (cell6_7.innerHTML == "") {
        cell6_7.innerHTML = "○";
        cell7_6.innerHTML = "●";
      }
      else if (cell6_7.innerHTML == "○"){
        cell6_7.innerHTML = "";
        cell7_6.innerHTML = "";
      }
    })
    cell6_8.addEventListener('click', function(){
      if (cell6_8.innerHTML == "") {
        cell6_8.innerHTML = "○";
        cell8_6.innerHTML = "●";
      }
      else if (cell6_8.innerHTML == "○"){
        cell6_8.innerHTML = "";
        cell8_6.innerHTML = "";
      }
    })
    cell6_9.addEventListener('click', function(){
      if (cell6_9.innerHTML == "") {
        cell6_9.innerHTML = "○";
        cell9_6.innerHTML = "●";
      }
      else if (cell6_9.innerHTML == "○"){
        cell6_9.innerHTML = "";
        cell9_6.innerHTML = "";
      }
    })
    cell6_10.addEventListener('click', function(){
      if (cell6_10.innerHTML == "") {
        cell6_10.innerHTML = "○";
        cell10_6.innerHTML = "●";
      }
      else if (cell6_10.innerHTML == "○"){
        cell6_10.innerHTML = "";
        cell10_6.innerHTML = "";
      }
    })
    cell7_1.addEventListener('click', function(){
      if (cell7_1.innerHTML == ""){
        cell7_1.innerHTML = "○";
        cell1_7.innerHTML = "●";
      }
      else if (cell7_1.innerHTML == "○"){
        cell7_1.innerHTML = "";
        cell1_7.innerHTML = "";
      }
    })
    cell7_2.addEventListener('click', function(){
      if (cell7_2.innerHTML == ""){
        cell7_2.innerHTML = "○";
        cell2_7.innerHTML = "●";
      }
      else if (cell7_2.innerHTML == "○"){
        cell7_2.innerHTML = "";
        cell2_7.innerHTML = "";
      }
    })
    cell7_3.addEventListener('click', function(){
      if (cell7_3.innerHTML == ""){
        cell7_3.innerHTML = "○";
        cell3_7.innerHTML = "●";
      }
      else if (cell7_3.innerHTML == "○"){
        cell7_3.innerHTML = "";
        cell3_7.innerHTML = "";
      }
    })
    cell7_4.addEventListener('click', function(){
      if (cell7_4.innerHTML == "") {
        cell7_4.innerHTML = "○";
        cell4_7.innerHTML = "●";
      }
      else if (cell7_4.innerHTML == "○"){
        cell7_4.innerHTML = "";
        cell4_7.innerHTML = "";
      }
    })
    cell7_5.addEventListener('click', function(){
      if (cell7_5.innerHTML == ""){
        cell7_5.innerHTML = "○";
        cell5_7.innerHTML = "●";
      }
      else if (cell7_5.innerHTML == "○"){
        cell7_5.innerHTML = "";
        cell5_7.innerHTML = "";
      }
    })
    cell7_6.addEventListener('click', function(){
      if (cell7_6.innerHTML == "") {
        cell7_6.innerHTML = "○";
        cell6_7.innerHTML = "●";
      }
      else if (cell7_6.innerHTML == "○"){
        cell7_6.innerHTML = "";
        cell6_7.innerHTML = "";
      }
    })
    cell7_8.addEventListener('click', function(){
      if (cell7_8.innerHTML == "") {
        cell7_8.innerHTML = "○";
        cell8_7.innerHTML = "●";
      }
      else if (cell7_8.innerHTML == "○"){
        cell7_8.innerHTML = "";
        cell8_7.innerHTML = "";
      }
    })
    cell7_9.addEventListener('click', function(){
      if (cell7_9.innerHTML == "") {
        cell7_9.innerHTML = "○";
        cell9_7.innerHTML = "●";
      }
      else if (cell7_9.innerHTML == "○"){
        cell7_9.innerHTML = "";
        cell9_7.innerHTML = "";
      }
    })
    cell7_10.addEventListener('click', function(){
      if (cell7_10.innerHTML == "") {
        cell7_10.innerHTML = "○";
        cell10_7.innerHTML = "●";
      }
      else if (cell7_10.innerHTML == "○"){
        cell7_10.innerHTML = "";
        cell10_7.innerHTML = "";
      }
    })
    cell8_1.addEventListener('click', function(){
      if (cell8_1.innerHTML == ""){
        cell8_1.innerHTML = "○";
        cell1_8.innerHTML = "●";
      }
      else if (cell8_1.innerHTML == "○"){
        cell8_1.innerHTML = "";
        cell1_8.innerHTML = "";
      }
    })
    cell8_2.addEventListener('click', function(){
      if (cell8_2.innerHTML == ""){
        cell8_2.innerHTML = "○";
        cell2_8.innerHTML = "●";
      }
      else if (cell8_2.innerHTML == "○"){
        cell8_2.innerHTML = "";
        cell2_8.innerHTML = "";
      }
    })
    cell8_3.addEventListener('click', function(){
      if (cell8_3.innerHTML == ""){
        cell8_3.innerHTML = "○";
        cell3_8.innerHTML = "●";
      }
      else if (cell8_3.innerHTML == "○"){
        cell8_3.innerHTML = "";
        cell3_8.innerHTML = "";
      }
    })
    cell8_4.addEventListener('click', function(){
      if (cell8_4.innerHTML == "") {
        cell8_4.innerHTML = "○";
        cell4_8.innerHTML = "●";
      }
      else if (cell8_4.innerHTML == "○"){
        cell8_4.innerHTML = "";
        cell4_8.innerHTML = "";
      }
    })
    cell8_5.addEventListener('click', function(){
      if (cell8_5.innerHTML == ""){
        cell8_5.innerHTML = "○";
        cell5_8.innerHTML = "●";
      }
      else if (cell8_5.innerHTML == "○"){
        cell8_5.innerHTML = "";
        cell5_8.innerHTML = "";
      }
    })
    cell8_6.addEventListener('click', function(){
      if (cell8_6.innerHTML == "") {
        cell8_6.innerHTML = "○";
        cell6_8.innerHTML = "●";
      }
      else if (cell8_6.innerHTML == "○"){
        cell8_6.innerHTML = "";
        cell6_8.innerHTML = "";
      }
    })
    cell8_7.addEventListener('click', function(){
      if (cell8_7.innerHTML == "") {
        cell8_7.innerHTML = "○";
        cell7_8.innerHTML = "●";
      }
      else if (cell8_7.innerHTML == "○"){
        cell8_7.innerHTML = "";
        cell7_8.innerHTML = "";
      }
    })
    cell8_9.addEventListener('click', function(){
      if (cell8_9.innerHTML == "") {
        cell8_9.innerHTML = "○";
        cell9_8.innerHTML = "●";
      }
      else if (cell8_9.innerHTML == "○"){
        cell8_9.innerHTML = "";
        cell9_8.innerHTML = "";
      }
    })
    cell8_10.addEventListener('click', function(){
      if (cell8_10.innerHTML == "") {
        cell8_10.innerHTML = "○";
        cell10_8.innerHTML = "●";
      }
      else if (cell8_10.innerHTML == "○"){
        cell8_10.innerHTML = "";
        cell10_8.innerHTML = "";
      }
    })
    cell9_1.addEventListener('click', function(){
      if (cell9_1.innerHTML == ""){
        cell9_1.innerHTML = "○";
        cell1_9.innerHTML = "●";
      }
      else if (cell9_1.innerHTML == "○"){
        cell9_1.innerHTML = "";
        cell1_9.innerHTML = "";
      }
    })
    cell9_2.addEventListener('click', function(){
      if (cell9_2.innerHTML == ""){
        cell9_2.innerHTML = "○";
        cell2_9.innerHTML = "●";
      }
      else if (cell9_2.innerHTML == "○"){
        cell9_2.innerHTML = "";
        cell2_9.innerHTML = "";
      }
    })
    cell9_3.addEventListener('click', function(){
      if (cell9_3.innerHTML == ""){
        cell9_3.innerHTML = "○";
        cell3_9.innerHTML = "●";
      }
      else if (cell9_3.innerHTML == "○"){
        cell9_3.innerHTML = "";
        cell3_9.innerHTML = "";
      }
    })
    cell9_4.addEventListener('click', function(){
      if (cell9_4.innerHTML == "") {
        cell9_4.innerHTML = "○";
        cell4_9.innerHTML = "●";
      }
      else if (cell9_4.innerHTML == "○"){
        cell9_4.innerHTML = "";
        cell4_9.innerHTML = "";
      }
    })
    cell9_5.addEventListener('click', function(){
      if (cell9_5.innerHTML == ""){
        cell9_5.innerHTML = "○";
        cell5_9.innerHTML = "●";
      }
      else if (cell9_5.innerHTML == "○"){
        cell9_5.innerHTML = "";
        cell5_9.innerHTML = "";
      }
    })
    cell9_6.addEventListener('click', function(){
      if (cell9_6.innerHTML == "") {
        cell9_6.innerHTML = "○";
        cell6_9.innerHTML = "●";
      }
      else if (cell9_6.innerHTML == "○"){
        cell9_6.innerHTML = "";
        cell6_9.innerHTML = "";
      }
    })
    cell9_7.addEventListener('click', function(){
      if (cell9_7.innerHTML == "") {
        cell9_7.innerHTML = "○";
        cell7_9.innerHTML = "●";
      }
      else if (cell9_7.innerHTML == "○"){
        cell9_7.innerHTML = "";
        cell7_9.innerHTML = "";
      }
    })
    cell9_8.addEventListener('click', function(){
      if (cell9_8.innerHTML == "") {
        cell9_8.innerHTML = "○";
        cell8_9.innerHTML = "●";
      }
      else if (cell9_8.innerHTML == "○"){
        cell9_8.innerHTML = "";
        cell8_9.innerHTML = "";
      }
    })
    cell9_10.addEventListener('click', function(){
      if (cell9_10.innerHTML == "") {
        cell9_10.innerHTML = "○";
        cell10_9.innerHTML = "●";
      }
      else if (cell9_10.innerHTML == "○"){
        cell9_10.innerHTML = "";
        cell10_9.innerHTML = "";
      }
    })
    cell10_1.addEventListener('click', function(){
      if (cell10_1.innerHTML == ""){
        cell10_1.innerHTML = "○";
        cell1_10.innerHTML = "●";
      }
      else if (cell10_1.innerHTML == "○"){
        cell10_1.innerHTML = "";
        cell1_10.innerHTML = "";
      }
    })
    cell10_2.addEventListener('click', function(){
      if (cell10_2.innerHTML == ""){
        cell10_2.innerHTML = "○";
        cell2_10.innerHTML = "●";
      }
      else if (cell10_2.innerHTML == "○"){
        cell10_2.innerHTML = "";
        cell2_10.innerHTML = "";
      }
    })
    cell10_3.addEventListener('click', function(){
      if (cell10_3.innerHTML == ""){
        cell10_3.innerHTML = "○";
        cell3_10.innerHTML = "●";
      }
      else if (cell10_3.innerHTML == "○"){
        cell10_3.innerHTML = "";
        cell3_10.innerHTML = "";
      }
    })
    cell10_4.addEventListener('click', function(){
      if (cell10_4.innerHTML == "") {
        cell10_4.innerHTML = "○";
        cell4_10.innerHTML = "●";
      }
      else if (cell10_4.innerHTML == "○"){
        cell10_4.innerHTML = "";
        cell4_10.innerHTML = "";
      }
    })
    cell10_5.addEventListener('click', function(){
      if (cell10_5.innerHTML == ""){
        cell10_5.innerHTML = "○";
        cell5_10.innerHTML = "●";
      }
      else if (cell10_5.innerHTML == "○"){
        cell10_5.innerHTML = "";
        cell5_10.innerHTML = "";
      }
    })
    cell10_6.addEventListener('click', function(){
      if (cell10_6.innerHTML == "") {
        cell10_6.innerHTML = "○";
        cell6_10.innerHTML = "●";
      }
      else if (cell10_6.innerHTML == "○"){
        cell10_6.innerHTML = "";
        cell6_10.innerHTML = "";
      }
    })
    cell10_7.addEventListener('click', function(){
      if (cell10_7.innerHTML == "") {
        cell10_7.innerHTML = "○";
        cell7_10.innerHTML = "●";
      }
      else if (cell10_7.innerHTML == "○"){
        cell10_7.innerHTML = "";
        cell7_10.innerHTML = "";
      }
    })
    cell10_8.addEventListener('click', function(){
      if (cell10_8.innerHTML == "") {
        cell10_8.innerHTML = "○";
        cell8_10.innerHTML = "●";
      }
      else if (cell10_8.innerHTML == "○"){
        cell10_8.innerHTML = "";
        cell8_10.innerHTML = "";
      }
    })
    cell10_9.addEventListener('click', function(){
      if (cell10_9.innerHTML == "") {
        cell10_9.innerHTML = "○";
        cell9_10.innerHTML = "●";
      }
      else if (cell10_9.innerHTML == "○"){
        cell10_9.innerHTML = "";
        cell9_10.innerHTML = "";
      }
    })
})