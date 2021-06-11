//
// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
let content = document.getElementById("content");
console.log(content.innerText);
//     b) отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
console.log(rules.innerText);
//     c) замініть текст параграфа з id 'content' на будь-який інший
content.innerText = 'No systemd. If this is the solution, I want my problem back. This website tries to become a collection of resources pointing out reasons against systemd and what alternatives are available.'
//     d) замініть текст параграфа з id 'rules' на будь-який інший
rules.innerHTML = "<h2>What is systemd?</h2><br><h3>systemd claims to be a good and modern replacement for SysVinit ‐ a so called init daemon. Usually the init daemon is the first process spawned by the kernel and thus has the PID #1 and is responsible for spawning other daemons which are necessary for the OS to operate, e.g. networking, cron, syslog etc.</h3>"
//     e) змініть кожному елементу колір фону на червоний
let body = document.getElementsByTagName('body')[0].children;
for (let variable of body) {
  variable.style.background = 'rgb(149, 0, 0)';
}
// console.log(body);
//     f) змініть кожному елементу колір тексту на синій
for (let variable of body) {
  variable.style.background = 'rgb(0, 40, 161)';
}
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// let rules = document.getElementById('rules');
let rules_class = rules.attributes.class;
console.log(rules_class);
//     h) отримати всі елементи з класом fc_rules
let fc_rules = document.getElementsByClassName("fc_rules")
console.log(fc_rules);
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (var variable of fc_rules) {
  variable.style.color = 'red';
}
