const buyBtns = document.querySelectorAll('.js-slide')

const modal = document.querySelector('.js-modal')

const modalClose = document.querySelector('.js-modal-close')

const buyBtnsimg = document.querySelectorAll('.js-product-items')

const modalOverlay = document.querySelector('.js-modal-overlay')
// Hàm Hiện Thị bảng mua vé 
// Nguyên Lí Hoạt động : add thêm class open vào modal
function showBuyTickets() {
    modal.classList.add('open')
}
// Hàm Hiện Thị bảng mua vé
 // Nguyên Lí Hoạt động : remove thêm class open vào modal
function hideBuyTickets() {
    modal.classList.remove('open')
}
// Vòng lặp trong buyBtns 
// Nghe hành vi click thực hiện hành động showBuyTickets

for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyTickets)

}
// Nghe hành vi click thực hiện hành động showBuyTickets
    modalClose.addEventListener('click',hideBuyTickets)

// Nghe hành vi click vào khoảng không của modal thì thực hiện hành động showBuyTickets
    modal.addEventListener('click',hideBuyTickets)

// Nghe hành vi click nhưng ngăn chặn hành động nổi bọt của modalOverLay
    modalOverlay.addEventListener('click', function (event) {
        event.stopPropagation()
    } )

  for(const buyBtnimg of buyBtnsimg) {
    buyBtnimg.addEventListener('click',showBuyTickets)

}