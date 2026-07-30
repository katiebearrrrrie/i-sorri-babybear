const envelope = document.getElementById("envelope");

const openBtn = document.getElementById("openBtn");

const question = document.getElementById("question");


openBtn.onclick = () => {

envelope.classList.add("open");

openBtn.style.display="none";


setTimeout(()=>{

question.style.display="block";

},1200);


};



function forgive(){

document.getElementById("answer").innerHTML =
`
Danke babibear lets make uppie and we can talkie and makeuppieeee okii.

<br><br>

<img 
src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzM2cTE5ODZ0YW03bHVzcGVndndpb2syNTRtOG56cWI5Mnd0Zm1pMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lc5OpECRXfhQc/giphy.gif"
width="180"
>

`;

}



function wait(){

document.getElementById("answer").innerHTML =
" OI click da other button ts da wrong answer boi ";

}