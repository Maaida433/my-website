
// BODY STYLE

document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#cfe7e1";
document.body.style.padding = "15px";


// NAVIGATION

let nav = document.createElement("div");
nav.style.display = "flex";
nav.style.justifyContent = "center";
nav.style.alignItems = "center";
nav.style.gap = "15px";
nav.style.background = "#5a1c3bff";
nav.style.padding = "15px";
nav.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
document.body.appendChild(nav);


// CONTENT

let content = document.createElement("div");
content.style.marginTop = "30px";
content.style.textAlign = "center";
document.body.appendChild(content);


// CLEAR CONTENT FUNCTION

function clearContent() {
  content.innerHTML = "";
}


// HOME PAGE

function home() {
  clearContent();
  let title = document.createElement("h1");
  title.textContent = "Welcome to My Website";
  title.style.color = "#4a5fb8";
  title.style.fontSize = "36px";
  title.style.opacity = "0";
  title.style.transition = "opacity 1s ease, transform 1s ease";
  content.appendChild(title);

  let text = document.createElement("p");
  text.textContent = "This is the Home Page.";
  text.style.fontSize = "18px";
  content.appendChild(text);

  setTimeout(() => {
    title.style.opacity = "1";
    title.style.transform = "scale(1.05)";
  }, 100);
}


// ABOUT US PAGE

function about() {
  clearContent();
  let container = document.createElement("div");
  container.style.maxWidth = "700px";
  container.style.margin = "0 auto";
  container.style.background = "#dad9e7";
  container.style.padding = "20px";
  container.style.borderRadius = "8px";
  container.style.textAlign = "left";

  let title = document.createElement("h2");
  title.textContent = "About Us";
  title.style.textAlign = "center";
  title.style.marginBottom = "20px";

  let flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.alignItems = "center";
  flex.style.gap = "15px";
  flex.style.marginBottom = "15px";

  let img = document.createElement("img");
  img.src = "picture.jpeg"; 
  img.style.width = "80px";
  img.style.height = "80px";
  img.style.borderRadius = "50%";
  img.style.objectFit = "cover";
  img.style.border = "2px solid #4a5fb8";

  let name = document.createElement("h3");
  name.textContent = "Maida Mohamed Abdikarim";
  name.style.margin = "0";
  name.style.color = "#4a5fb8";

  flex.appendChild(img);
  flex.appendChild(name);

  let email = document.createElement("p");
  email.innerHTML = "<strong>Email:</strong> maaidomahamed90@gmail.com";
  let phone = document.createElement("p");
  phone.innerHTML = "<strong>Phone:</strong> +252 610522283";
  let university = document.createElement("p");
  university.innerHTML = "<strong>University:</strong> Jamhuriya University";
  let faculty = document.createElement("p");
  faculty.innerHTML = "<strong>Faculty:</strong> Networking";
  let skills = document.createElement("p");
  skills.innerHTML = "<strong>Skills:</strong> Graphic Design";
  let project = document.createElement("p");
  project.innerHTML = "<strong>Project Name:</strong> To Do List App";

  let desc = document.createElement("p");
  desc.textContent =
    "I am a student at Jamhuriya University";

  // YouTube iframe
  let iframe = document.createElement("iframe");
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = "https://www.youtube.com/embed/-oP7JK_rXUI";
  iframe.title = "YouTube video";
  iframe.frameBorder = "0";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.style.display = "block";
  iframe.style.margin = "20px auto";

  container.append(
    title,
    flex,
    email,
    phone,
    university,
    faculty,
    skills,
    project,
    desc,
    iframe
  );

  content.appendChild(container);
}


// CONTACT PAGE

function contact() {
  clearContent();
  let title = document.createElement("h2");
  title.textContent = "Contact Us";
  title.style.marginBottom = "15px";

  let form = document.createElement("div");
  form.style.maxWidth = "300px";
  form.style.margin = "0 auto";
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.gap = "10px";

  let nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Full Name";
  nameInput.style.padding = "10px";

  let emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Email";
  emailInput.style.padding = "10px";

  let message = document.createElement("textarea");
  message.placeholder = "Your Message";
  message.style.padding = "10px";

  let submit = document.createElement("button");
  submit.textContent = "Submit";
  submit.style.padding = "10px";
  submit.style.cursor = "pointer";
  submit.style.background = "#4a5fb8";
  submit.style.color = "white";
  submit.style.border = "none";
  submit.style.borderRadius = "5px";

  submit.addEventListener("click", () => {
    if (!nameInput.value || !emailInput.value || !message.value) {
      alert("Please fill all fields.");
      return;
    }
    alert(
      `Message sent!\nName: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${message.value}`
    );
    nameInput.value = "";
    emailInput.value = "";
    message.value = "";
  });

  form.append(nameInput, emailInput, message, submit);
  content.append(title, form);
}


// SERVICES PAGE

function service() {
  clearContent();
  let title = document.createElement("h2");
  title.textContent =
    "JavaScript Chapters: 7 (Objects), 8 (DOM), 9 (Events & Validation)";
  title.style.textAlign = "center";
  title.style.color = "#4a5fb8";
  title.style.marginBottom = "20px";
  content.appendChild(title);

  let btnContainer = document.createElement("div");
  btnContainer.style.display = "flex";
  btnContainer.style.justifyContent = "center";
  btnContainer.style.gap = "10px";
  btnContainer.style.marginBottom = "20px";
  content.appendChild(btnContainer);

  let chapterContent = document.createElement("div");
  content.appendChild(chapterContent);

  function makeChapterBtn(name, fn) {
    let btn = document.createElement("button");
    btn.textContent = name;
    btn.style.padding = "8px 15px";
    btn.style.border = "none";
    btn.style.borderRadius = "20px";
    btn.style.cursor = "pointer";
    btn.style.background = "#5a1c3bff";
    btn.style.color = "white";
    btn.onclick = fn;
    return btn;
  }

  //  Chapter 7 example 
  function chapter7() {
    chapterContent.innerHTML = "<p>Objects examples would appear here.</p>";
  }
  //  Chapter 8 example 
  function chapter8() {
    chapterContent.innerHTML = "<p>DOM examples would appear here.</p>";
  }
  //  Chapter 9 example 
  function chapter9() {
    chapterContent.innerHTML = "<p>Events & Validation examples would appear here.</p>";
  }

  btnContainer.appendChild(makeChapterBtn("Chapter 7", chapter7));
  btnContainer.appendChild(makeChapterBtn("Chapter 8", chapter8));
  btnContainer.appendChild(makeChapterBtn("Chapter 9", chapter9));

  chapter7(); // default
}


// NAV BUTTONS

let menus = [
  { name: "HOME", action: home },
  { name: "ABOUT US", action: about },
  { name: "SERVICES", action: service },
  { name: "CONTACT US", action: contact }
];

menus.forEach(menu => {
  let btn = document.createElement("button");
  btn.textContent = menu.name;
  btn.style.background = "transparent";
  btn.style.color = "white";
  btn.style.border = "2px solid white";
  btn.style.padding = "10px 18px";
  btn.style.fontSize = "14px";
  btn.style.cursor = "pointer";
  btn.style.borderRadius = "25px";
  btn.style.transition = "all 0.3s ease";
  btn.onmouseenter = () => {
    btn.style.background = "white";
    btn.style.color = "#5a1c3bff";
  };
  btn.onmouseleave = () => {
    btn.style.background = "transparent";
    btn.style.color = "white";
  };
  btn.onclick = menu.action;
  nav.appendChild(btn);
});

// Show home page by default
home();
