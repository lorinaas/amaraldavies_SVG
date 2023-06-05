console.log("JS file connected");

//1. almonds-icon
//2. organic-icon
//3. caffeine-icon
//4. gluten-icon
//5. vanilla-icon
//6. cherry-icon

//-selecting id

const almondsIcon = document.querySelector("#almonds-icon");

//1. almonds-icon

//-declaring function

function logId(){
    console.log(this.id)
}

//-adding click event

almondsIcon.addEventListener("click", logId);

//2. organic-icon

//-selecting id

const organicIcon = document.querySelector("#organic-icon");

//-declaring function

function logId(){
    console.log(this.id)
}

//-adding click event

organicIcon.addEventListener("click", logId);

//3. caffeine-icon

const caffeineIcon = document.querySelector("#caffeine-icon");

//-declaring function

function logId(){
    console.log(this.id)
}

//-adding click event

caffeineIcon.addEventListener("click", logId);

//4. gluten-icon

//-selecting id

const glutenIcon = document.querySelector("#gluten-icon");

//-declaring function

function logId(){
    console.log(this.id)
}

//-adding click event

glutenIcon.addEventListener("click", logId);

//5. caffeine-icon

//-adding click event

caffeineIcon.addEventListener("click", logId);

//6. vanilla-icon

//-selecting id

const vanillaIcon = document.querySelector("#vanilla-icon");

//-declaring function

function logId(){
    console.log(this.id)
}

//-adding click event

vanillaIcon.addEventListener("click", logId);

//7. cherryIcon

//-selecting id

const cherryIcon = document.querySelector("#cherry-icon");

//-declaring function

function logId(){
    console.log(this.id)
}

//-adding click event

cherryIcon.addEventListener("click", logId);
