const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

var request = new XMLHttpRequest();

request.open("GET", "Database.csv", true); 
request.onload = function () {
  const data = request.responseText
  const sections = data.split('\n')
  const section1 = sections[0].split(';')
  const section2 = sections[1].split(';')
  const section3 = sections[2].split(';')
  const section4 = sections[3].split(';')
  const section5 = sections[4].split(';')
  //section1
  document.getElementById("section1_1").innerHTML= section1[0];
  document.getElementById("section1_2").innerHTML= section1[1];
  document.getElementById("section1_3").innerHTML= section1[2];
  document.querySelector('img').src= section1[3];
  //section2
  console.log(section2[0])
  console.log(section2[1])
  console.log(section2[2])
  console.log(section2[3])
  console.log(section2[4])
  console.log(section2[5])
  console.log(section2[6])
  console.log(section2[7])
  console.log(section2[8])
  console.log(section2[9])
  console.log(section2[10])
  console.log(section2[11])
  console.log(section2[12])
  console.log(section2[13])
  console.log(section2[14])
  console.log(section2[15])
  console.log(section2[16])
  console.log(section2[17])
  console.log(section2[18])
  console.log(section2[19])
  console.log(section2[20])
  console.log(section2[21])
  console.log(section2[22])
  console.log(section2[23])
  console.log(section2[24])
  console.log(section2[25])

  document.getElementById("section2_1").innerHTML= section2[0];
  document.getElementById("section2_2").innerHTML= section2[1];
  document.getElementById("section2_3").innerHTML= section2[2];
  document.getElementById("section2_4").innerHTML= section2[3];
  document.getElementById("section2_5").innerHTML= section2[4];
  document.getElementById("section2_6").innerHTML= section2[5];
  document.getElementById("section2_7").innerHTML= section2[6];
  document.getElementById("section2_8").innerHTML= section2[7];
  document.getElementById("section2_9").innerHTML= section2[8];
  document.getElementById("section2_10").innerHTML= section2[9];
  document.getElementById("section2_11").innerHTML= section2[10];
  document.getElementById("section2_12").innerHTML= section2[11];
  document.getElementById("section2_13").innerHTML= section2[12];
  document.getElementById("section2_14").innerHTML= section2[13];
  document.getElementById("section2_15").innerHTML= section2[14];
  document.getElementById("section2_16").innerHTML= section2[15];
  document.getElementById("section2_17").innerHTML= section2[16];
  document.getElementById("section2_18").innerHTML= section2[17];
  document.getElementById("section2_19").innerHTML= section2[18];
  document.getElementById("section2_20").innerHTML= section2[19];
  document.getElementById("section2_21").innerHTML= section2[20];
  document.getElementById("section2_22").innerHTML= section2[21];
  document.getElementById("section2_23").innerHTML= section2[22];
  document.getElementById("section2_24").innerHTML= section2[23];
  document.getElementById("section2_25").innerHTML= section2[24];
  document.getElementById("section2_26").innerHTML= section2[25];
  
  //section3
  document.getElementById("section3_1").innerHTML= section3[0];
  document.getElementById("section3_2").src = section3[1];
  document.getElementById("section3_3").innerHTML= section3[2];
  document.getElementById("section3_4").src = section3[3];
  document.getElementById("section3_5").innerHTML= section3[4];
  document.getElementById("section3_6").src = section3[5];
  document.getElementById("section3_7").innerHTML= section3[6];
  
  //section4
  document.getElementById("section4_1").innerHTML= section4[0];
  document.getElementById("section4_2").src= section4[1];
  document.getElementById("section4_3").innerHTML= section4[2];
  document.getElementById("section4_4").innerHTML= section4[3];
  document.getElementById("section4_5").src= section4[4];
  document.getElementById("section4_6").innerHTML= section4[5];
  document.getElementById("section4_7").innerHTML= section4[6];
  document.getElementById("section4_8").src= section4[7];
  document.getElementById("section4_9").innerHTML= section4[8];
  document.getElementById("section4_10").innerHTML= section4[9];
  //section5
  document.getElementById("section5_1").innerHTML= section5[0];
  document.getElementById("section5_2").innerHTML= section5[1];
  document.getElementById("section5_3").innerHTML= section5[2];
  document.getElementById("section5_4").innerHTML= section5[3];
  document.getElementById("section5_5").innerHTML= section5[4];
  document.getElementById("section5_6").innerHTML= section5[5];
};
request.send();


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections Active 
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //resmove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();