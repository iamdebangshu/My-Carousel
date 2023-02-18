let users = [
  {
    "name" : "JavaScript",
    "designation": "Logo",
    "pic": "./Pictures/JS_logo.png",
    "testimonial": "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."
  },
  {
    "name" : "Rust",
    "designation": "Logo",
    "pic": "./Pictures/Rust_logo.png",
    "testimonial": "Rust is a multi-paradigm, high-level, general-purpose programming language. Rust emphasizes performance, type safety, and concurrency. "
  },
  {
    "name" : "Dart",
    "designation": "Logo",
    "pic": "./Pictures/Dart_logo.png",
    "testimonial": "Dart is a programming language designed for client development, such as for the web and mobile apps. It is developed by Google and can also be used to build server and desktop applications. It is an object-oriented, class-based, garbage-collected language with C-style syntax. "
  },
  {
    "name" : "Angular",
    "designation": "Logo",
    "pic": "./Pictures/angular_logo.png",
    "testimonial": "Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. " 
  },
  {
    "name" : "Python",
    "designation": "Logo",
    "pic": "./Pictures/python_logo.png",
    "testimonial": "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming."
  }
]

// DRY = Don't Repeat Yourself
function thedots (idx) {
  let dots = document.querySelector(".dots");
  dots.innerHTML = '';

  for (const [index, item] of users.entries()) {
    let btn = document.createElement('button');
    btn.className = "dot";
    if (index === idx) {
      btn.classList.add('dot--active');
    }
    dots.append(btn);
  }
}

function main () {
  let ta = document.querySelector('.testimonial-author')
  let tj = document.querySelector('.testimonial-job')
  let tt = document.querySelector('.testimonial-text')

  let idx = 0;

  let p = document.getElementById("dp")
  p.src = users[idx]["pic"];
  ta.textContent = users[idx]["name"];
  tj.textContent = users[idx]["designation"];
  tt.textContent = users[idx]["testimonial"];

  thedots(idx);


  document.querySelector(".btn--left").addEventListener('click', () => {
    idx = idx-1;
    if (idx === -1) {
      idx = users.length-1;
    }
    p.src = users[idx]["pic"];
    ta.textContent = users[idx]["name"];
    tj.textContent = users[idx]["designation"];
    tt.textContent = users[idx]["testimonial"];
    thedots(idx);
  });

  document
    .querySelector(".btn--right")
    .addEventListener('click', () => {
      idx = idx+1;
      if (idx === users.length) {
        idx = 0;
      }
      p.src = users[idx]["pic"];
      ta.textContent = users[idx]["name"];
      tj.textContent = users[idx]["designation"];
      tt.textContent = users[idx]["testimonial"];
      thedots(idx);
    });
}

main();




