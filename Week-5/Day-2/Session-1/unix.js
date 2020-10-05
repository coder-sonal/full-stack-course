var cont = document.getElementById("container");

function createPage(){
    var linusDiv = document.createElement("div");
    linusDiv.setAttribute("id" , "linus");
    var image = document.createElement("img");
    image.src = "https://raw.githubusercontent.com/masai-school/full-stack-dev-1908/master/course/week_01/day_3/resources/images/linus.jpg" 
    image.style.height = "150px";
    image.style.width = "100px";
    linusDiv.appendChild(image);

    var para1 = document.createElement('p');
    para1.style.color = "rgb(20, 20, 92)";
    para1.style.fontFamily = "sans-serif";
    para1.style.fontSize = "30px";
    para1.style.fontWeight = "bold"
    para1.textContent = "Linus Torvalds";
    linusDiv.appendChild(para1);

    var para2 = document.createElement('p');
    para2.style.color = "rgb(20, 20, 92)";
    para2.style.fontFamily = "sans-serif";
    para2.style.fontSize = "25px";
    para2.style.fontWeight = "200px";
    para2.style.marginTop = "-15px"
    para2.textContent = "The creator of Linux & Gift";
    para2.style.color = "black"
    linusDiv.appendChild(para2);

    var divTwo = document.createElement("div");
    divTwo.style.display = "flex";
    divTwo.style.marginLeft = "25%"
    var image2 = document.createElement("img");
    // image.setAttribute("cla);
    image2.src = "https://raw.githubusercontent.com/masai-school/full-stack-dev-1908/master/course/week_01/day_3/resources/images/khan.jpg";
    image2.alt = "Sal Khan";
    image2.style.height = "130px";
    image2.style.width = "100px";
    divTwo.appendChild(image2);

    var para3 = document.createElement('div');
    para3.setAttribute("class" , "Sal");
    para3.textContent = "Sal Khan";
    divTwo.appendChild(para3);

    var para4 = document.createElement('div');
    para4.setAttribute("class" , "dis");
    para4.textContent = "Salman khan is the founder of the Khan Academywhich has a mission";

    para3.appendChild(para4);

    var para5 = document.createElement('div');
    para5.setAttribute("class" , "dis");
    para5.textContent = "of provding a free world-class education for anyone. anywhere.";
    para5.style.marginTop = "-30px"
    para3.appendChild(para5);

     cont.appendChild(linusDiv);
    cont.appendChild(divTwo)
    
    var divThree = document.createElement("div");
    divThree.setAttribute("id" , "orange");
    
    
    var para6 = document.createElement("p");
    para6.setAttribute("id" , "o1");
    para6.textContent = "Ken Thomson";
    divThree.appendChild(para6)

    

    var para7 = document.createElement("p");
    para7.textContent = "Designed and Implemented the original";
    para7.style.fontSize = "20px";
    para7.style.color = "black";
    para6.appendChild(para7);
   

    var para8 = document.createElement("p");
    para8.textContent = "Unix operating system"
    para8.style.color = "black";
    para8.style.marginTop = "-2px"
    para7.appendChild(para8);


    var para9 = document.createElement("p");
    para9.setAttribute("class" , "o2");
    para9.textContent = "Dennis Ritchie";
    para9.style.textAlign = "right"
    divThree.appendChild(para9);


    var para10 = document.createElement("p");
    para10.textContent = "The creator of C Proramming Language"
    para10.style.color = "black";
    para10.style.textAlign = "right";
    para10.style.fontSize = "20px";
    para10.style.color = "black";
    para10.style.marginTop = "80px";
    para10.style.fontFamily = "sans-serif"
    divThree.appendChild(para10);

    var blackDiv = document.createElement("div");
    blackDiv.setAttribute("class" , "black");
    divThree.appendChild(blackDiv);
    cont.appendChild(divThree);

    document.button.style.visibility = "hidden";
}