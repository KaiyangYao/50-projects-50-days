const panels = document.querySelectorAll('.panel')  // Returns a NodeList
// console.log(panels);
// console.log(panels[0]);
// console.log(typeof panels[0]);  // It is an DOM object

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}