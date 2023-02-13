var div = document.getElementById("ascii");
var text = div.innerHTML;
var newText = text.replace(/_/g, "<span style='color: green;'>-</span>");
div.innerHTML = newText;

var com = document.getElementById("communication");

var cmd_body = document.getElementById("terminal_body");

i = 1;

document.addEventListener("keydown", function(event) {

    var key_press = event.key;

    var cmd_line = document.getElementById(`ligne_${i}`);

    console.log(`ligne_${i}`)

    console.log("Touche pressée : " + event.key + event.keyCode);    

    if (key_press === "Delete") {
    console.log("La touche Suppr a été appuyée.");
    }
    else if(key_press === "Backspace" & cmd_line.innerHTML[cmd_line.innerHTML.length - 1] != "$"){
        console.log("La touche Back a été appuyée.");
        cmd_line.innerHTML = cmd_line.innerHTML.slice(0,-1);
    }
    else if(key_press === "Enter"){
        console.log("La touche enter a été appuyée.");


        var rep = "";
        switch(cmd_line.innerHTML){
            case "help":
                rep = "Besoin d'aide ? Voici une liste des comandes:<br><span style=\"color: yellow\">cv</span> -> Acceder à mon cv<br><span style=\"color: yellow\">projets</span> -> voire mes projets sur Github<br><span style=\"color: yellow\">linkedin</span> -> Acceder à mon Linkedin<br><span style=\"color: yellow\">email</span> -> pour pouvoir me contacter par mail<br><span style=\"color: yellow\">whois</span> -> qui suis-je";
                break;
            case "cv":
                rep = "ouverture du cv..."
                window.open("ressources/CV_Tristan_TOURBIER.pdf");
                break;
            case "projets":
                rep = "ouverture de Github..."
                window.open("https://github.com/Titan327");
                break;
            case "linkedin":
                rep = "ouverture de Linkedin..."
                window.open("https://www.linkedin.com/in/tristan-tourbier");
                break;
            case "email":
                rep = "tristan.tourbier@supinfo.com"
                window.open("mailto:example@example.com");
                break;
            case "whois":
                rep = "Bonjour, je m'appele Tristan TOURBIER, étudiant de 2eme année en ecole d'informatique a Supinfo Lille. Sur ce site vous pourrez retrouver tout mes liens important, mes contacts ainsi que mon cv."
                break;
            default:
                rep = "Erreur: commande inconnue, utiliser \"help\" pour conaitre la liste de commandes";
        }

        if(rep != ""){
            var new_output = document.createElement("p");
            new_output.classList.add("output");
            new_output.innerHTML = rep;
            com.appendChild(new_output);
        }

        i = i + 1;

        var new_input = document.createElement("p");
        new_input.id = `ligne_${i}`;
        new_input.class = "input";
        new_input.classList.add("input");
        new_input.innerHTML = "";
        com.appendChild(new_input);

        console.log(i)

        cmd_body.scrollTop = cmd_body.scrollHeight;

    }
    else if(key_press.length === 1){
        cmd_line.innerHTML = cmd_line.innerHTML + event.key;
    }
    
    

});


