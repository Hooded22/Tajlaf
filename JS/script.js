
class CatSwitcher{
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
        const imageName = `../img/Tajlaf_${name}.png`;
        ImageBox[0].setAttribute("src",imageName);
    }

    changeClassOfDivs = (name) => {
        const ButtonsDiv = this.posterDiv.getElementsByClassName("Buttons")[0].children;
        const contentUl = this.posterDiv.getElementsByTagName("ul");
        
        if(name == "Cat")
        {
            ButtonsDiv[0].setAttribute("class","active");
            ButtonsDiv[1].setAttribute("class","");
            
            contentUl[0].setAttribute("class","active");
            contentUl[1].setAttribute("class","");
        }
        else
        {
            ButtonsDiv[0].setAttribute("class","");
            ButtonsDiv[1].setAttribute("class","active");

            contentUl[0].setAttribute("class","");
            contentUl[1].setAttribute("class","active");
        }

    }
}

const cs = new CatSwitcher();
const posterBox_buttons = document
.getElementById("introSection_poster")
.getElementsByClassName("Buttons")[0].children
posterBox_buttons[0].addEventListener("click",() => {cs.setCatName(posterBox_buttons[0])}, false);
posterBox_buttons[1].addEventListener("click",() => {cs.setCatName(posterBox_buttons[1])}, false);



