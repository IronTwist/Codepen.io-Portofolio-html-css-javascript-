var carnetel = {
    //######################################## Lista de elemente Array ######################################
    lista: ["Type something and add new element","Work in progress"],//no use
    //["Type something and add new element","Work in progress",],
    //##########################################  Afisare lista ######################
    afiseazaLista: function(){
         console.log("Lista mea : " + this.lista);
     },
    //########################################################################## Add element to localstorage
    adaugaInLista: function(){
        var text = document.getElementById("addText").value;
        var data = new Date();
        console.log(text);
      
        if(text === null || text === ""){
            return window.alert("You didn't write anything!!!");
        }
        
       localStorage.setItem((Math.random() % 10000)*100000, text, data);

    },
    //########################################################################## Modify element
    // modificaElementDinLista: function(indexModificare, elementDeModificare){
    //     this.lista[indexModificare] = elementDeModificare;
    //     afisare.elementeDeAfisat();
    // },
    //########################################################################## Delete element from object
    stergeDinLista: function(index){
        localStorage.removeItem(localStorage.key(index));
    },

    stergeToate: function(){
        if(window.confirm('Are you sure you want to delete all mesages?')){
            localStorage.clear()
        }else{
            //return
        }
    }
 
} 

let afisare = {
    
   elementeDeAfisat: function(){
        var afisare = "<ul>";
        
        for(var i = 0; i < (localStorage.length); i++){
            console.log(localStorage.getItem(localStorage.key(i)));
        afisare += "<li id=\"rowEdit\" >";
            if(localStorage.getItem(localStorage.key(i)) == null){
                afisare += localStorage.getItem(localStorage.key(i));
            }else{
                afisare += "<pre class= \"afisareText\">" + localStorage.getItem(localStorage.key(i)) + "</pre>";
            }
        
            console.log(localStorage.key(i));
            
         afisare += "&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32; <button class=\"buttonSterge\" onclick=\"carnetel.stergeDinLista(";
         afisare += i;
         afisare += "), window.location.reload()\">Delete</button>";  
         afisare += "</li>"
        }
        afisare += "</ul";  
        
        document.getElementById("row").innerHTML = afisare;
    }
}

    function aboutDetails(){
        let show = window.alert("This application is just to test my javascript knowledge \n Creat de Fratean Razvan");
        return show;
    }    

    let date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleString();
    console.log(date);

    function blink() {
        var f = document.getElementById('about');
        setInterval(function() {
           f.style.backgroundColor = (f.style.backgroundColor == 'blue' ? 'red' : 'blue');
        }, 2000);
     }

     