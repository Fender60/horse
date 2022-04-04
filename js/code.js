$(function(){
 let rand1 = Math.floor(Math.random()*8)
 let rand2 = Math.floor(Math.random()*8)
 let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
 let numbers=  ["1", "2", "3", "4", "5", "6", "7", "8"];
 let figure = letters[rand1] + numbers[rand2];
  mass();


//==========Обработчик события клик на коне=========================================

$('table').click(function(event){
let $target =  event.target;
let targetClass = event.target.className;
let targetId = event.target.id;
if(targetClass != "active" && targetId === "horse") {
   let rezult = possibleMoves(letters, numbers, rand1, rand2);
   color(rezult);
   $($target).addClass('active'); 
 }else if(targetClass === "active" && targetId === "horse") {
    let rezult = possibleMoves(letters, numbers, rand1, rand2);
    color(rezult);
    $($target).removeClass('active');
    for(let i=0; i<rezult.length; i++){
      $('#green').attr('id', rezult[i]);
	
}; 
    }; 

//===============Клик на ячейке============================

   
   let $horseClass = $('#horse').attr('class');
   if($horseClass === "active" && targetId === "green") { 
	let rezult = possibleMoves(letters, numbers, rand1, rand2);
        color(rezult);
        $('#horse').removeClass('active');
        for(let i=0; i<rezult.length; i++){
        $('#green').attr('id', rezult[i]);	
}; 
	$('#horse').remove();
	figure = event.target.id;
	mass();
        
	let idexFigure = figure.split("");
	for (let i=0; i<idexFigure.length; i++){
	 let wind = idexFigure[i];
	 let one = letters.indexOf(wind);
	 let two = numbers.indexOf(wind);
	if(two < 0) {
	 rand1 = one;
}else if(one < 0) {
	rand2 = two;
};
	 	 
};

}else if(targetId != "horse" && $horseClass === "active") {

let $id = event.target.id;
 $($target).attr('id', 'red');
setTimeout(function(){
 $($target).attr('id', $id);
}, 500);

};
 

});


//=============Вставка фигуры коня=================================

function mass() {  
 let $cls = $("#" + figure).prepend('<img id="horse" src="image/horse1.png" alt="horse">');
	$('#horse').show() 

};

//============Функция определения возможных ходов====================


function possibleMoves(ms1, ms2, numbe1, numbe2) {
 let x, y, move;
 let xy = [];

    x = numbe1 - 1;
    y = numbe2 + 2;
    if(x < 0 || y < 0 || x>7 || y > 7){} 
else {
    move = ms1[x]+ms2[y];
    xy.push(move);
 };
    x = numbe1 + 1;
    y = numbe2 + 2;
    if(x < 0 || y < 0 || x>7 || y > 7){} 
else {
    move = ms1[x]+ms2[y];
    xy.push(move);
 };
    x = numbe1 - 2;
    y = numbe2 + 1;
    if(x < 0 || y < 0 || x>7 || y > 7){} 
else {
    move = ms1[x]+ms2[y];
    xy.push(move);
 };
    x = numbe1 + 2;
    y = numbe2 + 1;
    if(x < 0 || y < 0 || x>7 || y > 7){} 
else {
    move = ms1[x]+ms2[y];
    xy.push(move);
 };
    x = numbe1 - 2;
    y = numbe2 - 1;
    if(x < 0 || y < 0 || x>7 || y > 7){} 
else {
    move = ms1[x]+ms2[y];
    xy.push(move);
 };
    x = numbe1 + 2;
    y = numbe2 - 1;
    if(x < 0 || y < 0 || x>7 || y > 7){} 
else {
    move = ms1[x]+ms2[y];
    xy.push(move);
 };
    x = numbe1 - 1;
    y = numbe2 - 2;
    if(x < 0 || y < 0 || x>7 || y > 7){} 
else {
    move = ms1[x]+ms2[y];
    xy.push(move);
 };
    x = numbe1 + 1;
    y = numbe2 - 2;
    if(x < 0 || y < 0 || x>7 || y > 7){} 
else {
    move = ms1[x]+ms2[y];
    xy.push(move);
 };
 return xy;
};

//==============Окрашивание ячеек возм. ходов===========================

function color(psMs) {
 for(let i=0;i<psMs.length; i++){
    let $cell = $("#" + psMs[i]);
	$cell.attr('id', 'green'); 
 };
	
};











});//========Конец функции======================