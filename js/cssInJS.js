// const section = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section')
// console.log(sections);

// for(const section of sections) {
//     console.log(section);
//     section.style.backgroundColor = 'cyan'
//     section.style.padding = '15px'
//     section.style.margin = '20px'
//     section.style.borderRadius = '10px'
// }

for (const section of sections) {
    section.classList.add('section-card');
}