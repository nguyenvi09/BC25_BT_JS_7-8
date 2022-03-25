let $ = document.querySelector.bind(document);

/**
 * Cho người dùng nhập vào số nguyên và lưu trữ trong mảng
 * Thiết kế layout cho người dùng chọn thực hiện các chức năng bên dưới:
 * 1. Tổng các số dương trong mảng
 * 2. Đếm có bao nhiêu số dương trong mảng
 * 3. Tìm số nhỏ nhất trong mảng
 * 4. Tìm số dương nhỏ nhất trong mảng
 * 5. Tìm số chẵn cuối cùng trong mảng. Nếu không có thì trả về -1
 * 6. Đổi chỗ 2 giá trị trong mảng theo vị trí ( cho nhập vào 2 vị trí
 * muốn đổi chỗ)
 * 7. sắp sếp mảng theo thứ tự tăng dần
 * 8. tìm số nguyên tố đầu tiên trong mảng. Nếu không có số nguyên tố thì trả về -1
 * 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
 * 10. so sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
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
$("#soNhoNhat").onclick = function(){
    var min = 0;
    for(i = 0; i <= mangSoNguyen.length; i++){
        if(mangSoNguyen[i] < min){
            min = mangSoNguyen[i];
        };
    };

    $("#kqSoNhoNhat").innerHTML = min;
};

// 4. Tìm số dương nhỏ nhất trong mảng
/**
 * giả sử mangSoNguyen = [-1, 0, 3, 2, 1, 5]
 * i = 1 -> 0 > 0 flase
 * i = 2 -> 3 > 0 
 * 
 * tìm số nguyên dương trong mảng trước rồi gán cho min
 */

// hàm lấy số nguyên dương đầu tiên trong mảng 
function laySND(){
    for(i = 0; i <= mangSoNguyen.length; i++){
        if(mangSoNguyen[i] > 0){
            return minSoNguyenDuong = mangSoNguyen[i];
        };
    }; 
};

// hàm tìm số nguyên dương nhỏ nhất

function timSNDNN(){
    for(i = 0; i <= mangSoNguyen.length; i++){
        if(mangSoNguyen[i] > 0 && mangSoNguyen[i] <= minSoNguyenDuong){
            minSoNguyenDuong = mangSoNguyen[i];
        };
    };

    return minSoNguyenDuong;
};

$("#soDuongNhoNhat").onclick = function(){
    laySND();
    timSNDNN();

    $("#kqSoDuongNhoNhat").innerHTML = minSoNguyenDuong;
};

/**
 *  5. Tìm số chẵn cuối cùng trong mảng. Nếu không có thì trả về -1
 *  - Đầu vào: mangSoNguyen do người dùng nhập
 *  - Xử lý: 
 * B1: đảo ngược mảng
 * B2: lặp từng phần tử kiểm tra số chẵn
 * 
 *  - Đầu ra: in kết quả
 */
function timSCCC(){
    mangSoNguyen = mangSoNguyen.reverse();
    for(i = 0; i <= mangSoNguyen.length; i++){
        if(mangSoNguyen[i] % 2 == 0){
            return mangSoNguyen[i];
        }else{
            return -1;
        };
    };
};

$("#soCCC").onclick = function(){
    var kqTimSCCC = timSCCC();
    $("#kqTimSCCC").innerHTML = kqTimSCCC;
};

/**
 * 6. Đổi chỗ 2 giá trị trong mảng theo vị trí ( cho nhập vào 2 vị trí
 * muốn đổi chỗ)
 * 
 * - Đầu vào: 2 vị trí người dùng nhập
 * 
 * - Xử lý: 
 * B1: tạo hàm để đổi vị trí
 * B2: bắt sự kiện click -> gọi hàm
 * 
 * - Đầu ra: in ra màn hình mảng mới
 */
function doiViTri(viTri1, viTri2){
    var doiViTri = mangSoNguyen[viTri1];
    mangSoNguyen[viTri1] = mangSoNguyen[viTri2];
    mangSoNguyen[viTri2] = doiViTri;

    return mangSoNguyen;
};

$("#doiViTri").onclick = function(){
    var viTri1 = $("#viTri1").value;
    var viTri2 = $("#viTri2").value;

    doiViTri(viTri1, viTri2);

    $("#inMangDoiViTri").innerHTML = mangSoNguyen;
};

/**
 * 7. sắp sếp mảng theo thứ tự tăng dần
 * - Đầu vào: mảng được nhập
 * 
 * - Xử lý: dùng hàm sort() và truyền vào hàm callback so sánh các giá trị trong mảng
 * 
 * - Đầu ra: in mảng đã được sắp xếp
 */

$("#sapXepTangDan").onclick = function(){
    mangSoNguyen.sort(function(a, b){
        return a - b;
    });

    $("#kqSapXep").innerHTML = mangSoNguyen;
};

/**
 * 8. tìm số nguyên tố đầu tiên trong mảng.
 *  Nếu không có số nguyên tố thì trả về -1
 * 
 * - Đầu vào: mảng số nguyên người dùng nhập
 * 
 * - Xử lý: 
 * B1: tạo hàm kiểm tra số nguyên tố
 * B2: tạo hàm tìm số nguyên tố đầu tiên trong mảng
 * B3: bắt sự kiện click tạo biến lưu kết quả gọi hàm timSNTDauTien
 * 
 * - Đầu ra: in kq ra màn hình
 */

 function kiemTraSNT(n){
    if(n < 2){
        return 0;
    };

    for(j = 2; j <= Math.sqrt(n); j++){
        if(n % j == 0){
            return 0;
        };
    };
    
    return 1;
};

function timSNTDauTien(){
    for(i = 0; i < mangSoNguyen.length; i++){
        if(kiemTraSNT(mangSoNguyen[i]) == 1){
            return mangSoNguyen[i];
        };
    };

    return -1;
};

$("#soNTDT").onclick = function(){
    var kqSoNTDT = timSNTDauTien();

    $("#kqSoNTDT").innerHTML = kqSoNTDT;
};

/**
 * * 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
 */

var mangSoThuc = [1.2, 2.3, 4.5, 6.6];
