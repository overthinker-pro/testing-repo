let root = document.getElementById("root");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((result) => result.json())
  .then((posts) => {
    for (let i = 0; i < 60; i++) { 
      let card = document.createElement("div");
      let title = document.createElement("h2");
      let img = document.createElement("img");

      title.innerText = posts[i].id + " - " + posts[i].title;
      img.src = posts[i].thumbnailUrl;
      img.alt = posts[i].title;

      card.className = "card";
      card.append(title);
      card.append(img);

      root.append(card);
    }
  })
  .catch((error) => console.log("Error:", error));


// Functions can be assigned to variables
const sayHello = () => {
    return "Hello";
    
}

console.log(sayHello());

// Functions can be passed as arguments to other functions

const sayHelloToPerson = (greeter, person) => {
    return greeter() + " " + person;
}
console.log(sayHelloToPerson(sayHello, "Jack"));


// Functions can be returned from other functions

const greetMaker = greeting => {
    return person => {
        return greeting + " " + person;
    };
};

const sayHiToPerson = greetMaker("Hi");
console.log(sayHiToPerson("Matthew"));
const sayHaiToPerson = greetMaker("Hai");
console.log(sayHaiToPerson("Peter"));
