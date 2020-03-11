
class ImageBoxController{
    constructor()
    {
        this.posterDiv = document.getElementById("introSection_poster");
        this.changeClassOfDivs = this.changeClassOfDivs.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.setCatName = this.setCatName.bind(this);
    }

    setCatName = (item) => {
       const name = item.getElementsByTagName("h2")[0].innerText;
       this.changeImage(name);
       this.changeClassOfDivs(name);
    }

    changeImage = (name) => {
        const ImageBox = document.getElementsByClassName('ImageBox')[0].children;
        const imageName = `./img/Tajlaf_${name}.png`;
        ImageBox[0].setAttribute("src",imageName);
    }

    changeClassOfDivs = (name) => {
        const ButtonsDiv = this.posterDiv.getElementsByClassName("Buttons")[0].children;
        const InfoBox = new InfoBoxController();
        
        if(name == "Cat")
        {
            ButtonsDiv[0].setAttribute("class","active");
            ButtonsDiv[1].setAttribute("class","");
            this.currentImageIsCat = true
            InfoBox.generateContent(true);
        }
        else
        {
            ButtonsDiv[0].setAttribute("class","");
            ButtonsDiv[1].setAttribute("class","active");
            this.currentImageIsCat = false;
            InfoBox.generateContent(false);
        }
    }
}

class InfoBoxController{
    constructor()
    {
        this.posterDiv = document.getElementById("introSection_poster");
        this.generateContent = this.generateContent.bind(this);
        this.hideAndShow = this.hideAndShow.bind(this);
        this.infoBoxHidden = false;
        this.changeArrow = this.changeArrow.bind(this);
    }

    hideAndShow = () => {
        const infoBox = this.posterDiv.getElementsByClassName('contentBox')[0].getElementsByTagName('ul');
        const newClass = this.infoBoxHidden ? "active" : "hide";
        this.infoBoxHidden = !this.infoBoxHidden;
        this.changeArrow()
        Object.keys(infoBox).map(key => {
            infoBox[key].setAttribute("class",newClass);
        })
    }

    generateContent = (isCat) => {
        const content = this.posterDiv.getElementsByClassName('contentBox')[0].getElementsByTagName('ul');
        var catInfo;
        $.getJSON("../json/catInfo.json", function(json) {
            catInfo = json[isCat ? "Cat" : "Werecat"];
            content[0].innerHTML = "";
        }).then(() => {
            catInfo.map(item => {
                var node = document.createElement("LI");
                var textnode = document.createTextNode(item);
                node.appendChild(textnode); 
                content[0].appendChild(node);
            })
        });
    }

    changeArrow = () => {
        console.log(this.infoBoxHidden);
        const innerContent = this.infoBoxHidden ? "+" : "-";
        const arrow = document.getElementById("contentBox_arrow");
        arrow.innerHTML = innerContent;
    }

}


window.onload = () => {
    const Image_Box_Controller = new ImageBoxController();
    const Info_Box_Controller = new InfoBoxController();
    const posterBox_buttons = document
    .getElementById("introSection_poster")
    .getElementsByClassName("Buttons")[0].children
    posterBox_buttons[0].addEventListener("click",() => {Image_Box_Controller.setCatName(posterBox_buttons[0])}, false);
    posterBox_buttons[1].addEventListener("click",() => {Image_Box_Controller.setCatName(posterBox_buttons[1])}, false);

    document.getElementById('contentBox_arrow').addEventListener("click",() => {Info_Box_Controller.hideAndShow()},false);
    Info_Box_Controller.generateContent(true);
    
}



