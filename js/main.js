// document.addEventListener('DOMContentLoaded', function() {
//     bottonActive();
//     configEditor();
//     console.log(2);
// });

// function bottonActive() {
//     var currentPage = document.body.getAttribute('data-page')
//     var links = document.querySelectorAll('[data-page-link]')
    
//     links.forEach(function (link) {
//         if (link.getAttribute('data-page-link') === currentPage) {
//             link.classList.add('active-link');
//         }
//     });
// }


       
// function configEditor() {
//     var publishLinks = document.querySelectorAll('[data-role="publish-link"]')
//     var viewLinks = document.querySelectorAll('[data-role="view-link"]')

//     publishLinks.forEach(function (link) {
//         link.href= window.APP_CONFIG.publishLink;
//     });
//     viewLinks.forEach(function (link) {
//         link.href= window.APP_CONFIG.viewLink;
//     });
// }

const img = [
    {text1:'1. Конструкторы LEGO', text2:'Наборы LEGO всех серий и эпох: от классики до редких коллекционных экземпляров.'},
    {text1:'2. Настольные игры', text2:'Стратегии, карточные, семейные и ролевые игры — новые и бывшие в употреблении.'},
    {text1:'3. Комиксы', text2:'Оригинальные издания, переиздания, манга, графические романы, коллекционные выпуски'},
    {text1:'4. Фигурки', text2:'Фигурки персонажей из фильмов, аниме, игр и комиксов.'},
    {text1:'5. Сувениры и мерч', text2:'Тематика кино, игр, музыки, аниме и сериалов — от брелоков до лимитированных коллекций.'},
    {text1:'6. Коллекционные карточки', text2:'Спортивные и редкие карточки.'},
    {text1:'7. Ретро-игрушки', text2:'Игрушки и атрибутика 80–2000-х годов: для души, для коллекции.'},
    {text1:'8. Аксессуары для коллекционеров', text2:'Подставки, боксы, органайзеры, протекторы, альбомы и всё для аккуратного хранения.'},
    {text1:'9. Лимитированные издания', text2:'Эксклюзивные товары, ограниченные серии, товары с выставок и ивентов.'},
    {text1:'10. Сделано фанатами', text2:'Авторские поделки, кастомные фигурки, альтернативные обложки, фан-арт и хендмейд.'},
];
const sample = document.querySelector('#abc')

img.forEach((red, index )=>{
    const lock=`
    <article class="table-home">
        <h3>${red.text1}</h3>
        <li>${red.text2}</li>
    </article>
    `
    sample.insertAdjacentHTML('beforeend', lock)
})