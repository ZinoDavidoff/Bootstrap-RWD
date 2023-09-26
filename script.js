const randomNames = [
    'Emma Johnson',
    'Ethan Davis',
    'Olivia Smith',
    'Liam Anderson',
    'Ava Martinez',
    'Noah Wilson',
    'Sophia Lee',
    'Mason Clark',
    'Isabella Turner',
    'Lucas Rodriguez'
]
const modalName = document.querySelector(".modal-title");
const enrollBtn = document.querySelector(".enroll-btn");

enrollBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * 10);
    modalName.textContent = `Hello ${randomNames[randomIndex]} ❤️`;
})