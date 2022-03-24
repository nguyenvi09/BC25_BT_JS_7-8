let $ = document.querySelector.bind(document);

/**
 * Cho người dùng nhập vào số nguyên và lưu trữ trong mảng
 * Thiết kế layout cho người dùng chọn thực hiện các chức năng bên dưới:
 * 1. Tổng các số dương trong mảng
 * 2. Đếm có bao nhiêu số dương trong mảng
 * 3. Tìm số nhỏ nhất trong mảng
 * 4. Tìm số dương nhỏ nhất trong mảng
 * 
 */

var mangSoNguyen = [];
$("#them").onclick = function(){
    var soNguyen = $("#soNguyen").value *1;

    mangSoNguyen.push(soNguyen);

    $("#inMang").innerHTML = mangSoNguyen;
};

$("#xoa").onclick = function(){
  mangSoNguyen.pop();

  $("#inMang").innerHTML = mangSoNguyen;
};

$("#xoaTatCa").onclick = function(){
    mangSoNguyen = [];

  $("#inMang").innerHTML = mangSoNguyen;
};

// Tính tổng các số dương trong mảng
$("#tongSoDuong").onclick = function(){
    var tongSoDuong = 0;
    for(i = 0; i <= mangSoNguyen.length; i++){
        if(mangSoNguyen[i] > 0){
            tongSoDuong += mangSoNguyen[i];
        };
    };

    $("#kqTongSoDuong").innerHTML = tongSoDuong;
};

// 2. Đếm có bao nhiêu số dương trong mảng
$("#demSoDuong").onclick = function(){
    var demSoDuong = 0;

    for(i = 0; i <= mangSoNguyen.length; i++){
        if(mangSoNguyen[i] > 0){
            demSoDuong++;
        };
    };

    $("#kqDemSoDuong").innerHTML = demSoDuong;
};

// 3. Tìm số nhỏ nhất trong mảng
