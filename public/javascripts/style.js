$('#btnContinue').off('click').on('click', function () {
    window.location.href = "/";
});

$('#btnUpdate').off('click').on('click', function () {
    var listProduct = $('.so-luong');
    var cartList = [];
    $.each(listProduct, function (i, item) {
        cartList.push({
            soLuong: $(item).val(),
            ten: $(item).data('name'),
            mauSac: $(item).data('color'),
            kichThuoc: $(item).data('size'),
        });
    });

    $.ajax({
        url: '/gio-hang/cap-nhat',
        data: {data: JSON.stringify(cartList)},
        dataType: 'json',
        type: 'PUT',
        success: function (res) {
            if (res.status == true) {
                window.location.href = "/gio-hang";
            }
        }
    })
});

$('.deleteOne').off('click').on('click', function (e) {
    e.preventDefault();
    $.ajax({
        data: {
            ten: $(this).data('name'),
            mauSac: $(this).data('color'),
            kichThuoc: $(this).data('size'),
         },
        url: '/gio-hang/xoa/' + $(this).data('id'),
        dataType: 'json',
        type: 'DELETE',
        success: function (res) {
            if (res.status == true) {
                window.location.href = "/gio-hang";
            }
        }
    })
});

$('#btnDeleteAll').off('click').on('click', function () {
    $.ajax({
        url: '/gio-hang/xoa/all',
        dataType: 'json',
        type: 'PUT',
        success: function (res) {
            if (res.status == true) {
                window.location.href = "/gio-hang";
            }
        }
    })
});
$('#btnOrder').off('click').on('click',function(e){
    window.location.href ='/dat-hang';
})

// // ----- home page pagination
// $('#pagination').pagination({
//     dataSource: 'json/ao-khoac',
//     locator: 'list',
//     totalNumberLocator: function(response) {
//         return response.total;
//     },
//     pageSize: 2,
//     showGoInput: true,
//     showGoButton: true,
//     afterPageOnClick : function(ev, page){
//         loadPage(page);
//     },

// })

// $('#newProductSeeMore').click(function(){
//     page = $(this).data('page') +1;
//     loadPage(page);
//     $(this).addClass('hidden')
// })

// function loadPage(page){
//     $.ajax({
//         url: '/json/ao-khoac?page=' + page
//     })
//     .then(rs =>{
//         for (let index = 0; index < rs.list.length; index++) {
//             console.log(rs.list[index]);
//             $('.content').append(`
//                 <div class="col mt-4">
//                     <div class="card" style="width: 97%;">
//                     <img src="${rs.list[index].anh}" class="card-img-top" height="250rem" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title text-center text-grey">${rs.list[index].ten}</h5>
//                         <p class="card-text text-center text-dark fw-bold">${rs.list[index].gia} đ</p>
//                         <div class="product_hover text-center">
//                         <div class="btn btn-dark">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
//                             <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
//                             </svg> Thêm vào giỏ
//                         </div>
//                         <div class="btn btn-dark mt-1">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
//                             <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
//                             </svg> Mua nhanh
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//         `)
//         }
//     })
// }
// loadPage(1);
// // ----- home page pagination
