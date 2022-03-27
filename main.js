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

    $("#inMang").innerHTML = "Mảng số nguyên: " + mangSoNguyen;
};

$("#xoa").onclick = function(){
  mangSoNguyen.pop();

  $("#inMang").innerHTML = mangSoNguyen;
};

$("#xoaTatCa").onclick = function(){
    mangSoNguyen = [];

  $("#inMang").innerHTML = mangSoNguyen;
};

/**
 * 1:Tính tổng các số dương trong mảng
 * 
 * -Đầu vào: mảng do người dùng nhập
 * 
 * - Xử lý:
 * B1: tạo biến tongSoDuong = 0
 * B2: duyệt từng phần tử > 0 , rồi tính tổng cộng dồn
 * 
 * - Đầu ra: in ra màn hình
 */
$("#tongSoDuong").onclick = function(){
    var tongSoDuong = 0;
    for(i = 0; i <= mangSoNguyen.length; i++){
        if(mangSoNguyen[i] > 0){
            tongSoDuong += mangSoNguyen[i];
        };
    };

    $("#kqTongSoDuong").innerHTML = tongSoDuong;
};


/**
 * 2. Đếm có bao nhiêu số dương trong mảng
 * - Đầu vào: mảng người dùng nhập
 * - Xử lý: 
 * B1: tạo biến đếm =0 
 * B2: duyệt từng phần tử -> nếu > 0 => tăng đếm 1 đv
 * 
 * -Đầu ra: in kq đếm ra màn hình
 */
$("#demSoDuong").onclick = function(){
    var demSoDuong = 0;

    for(i = 0; i <= mangSoNguyen.length; i++){
        if(mangSoNguyen[i] > 0){
            demSoDuong++;
        };
    };

    $("#kqDemSoDuong").innerHTML = demSoDuong;
};

/**
 * 3. Tìm số nhỏ nhất trong mảng
 * -Đầu vào: mảng người dùng nhập
 * -Xử lý:
 * B1: gán vị trí 0 là số nhỏ nhất 
 * B2: duyệt từng phần tử -> so sánh min 
 * nếu < min thì gán lại cho min
 * 
 * -Đầu ra: in min
 */
$("#soNhoNhat").onclick = function(){
    var min = mangSoNguyen[0];
    for(i = 0; i < mangSoNguyen.length; i++){
        if(mangSoNguyen[i] < min){
            min = mangSoNguyen[i];
        };
    };

    $("#kqSoNhoNhat").innerHTML = min;
};

/**
 *  4. Tìm số dương nhỏ nhất trong mảng
 * -Đầu vào: mảng người dùng nhập
 * -Xử lý:
 * B1: tạo hàm tìm SNDNN duyệt từng phần tử
 * -duyệt lấy số nguyên đầu tiên gán cho min
 * -nếu phần tử > 0 & phần tử < min
 * -> gán phần tử đó cho min
 * B2: gọi hàm 
 * 
 * -Đầu ra: in kết quả
 */

// hàm tìm số nguyên dương nhỏ nhất
function timSNDNN(){
    for(i = 0; i <= mangSoNguyen.length; i++){
        if(mangSoNguyen[i] > 0){
            var minSoNguyenDuong = mangSoNguyen[i];
            break;
        };
    };

    for(i = 0; i < mangSoNguyen.length; i++){
        if(mangSoNguyen[i] > 0 && mangSoNguyen[i] < minSoNguyenDuong){
            minSoNguyenDuong = mangSoNguyen[i];
        };
    };

    return minSoNguyenDuong;
};

$("#soDuongNhoNhat").onclick = function(){
    var kq = timSNDNN();

    $("#kqSoDuongNhoNhat").innerHTML = kq;
};

/**
 *  5. Tìm số chẵn cuối cùng trong mảng. Nếu không có thì trả về -1
 *  - Đầu vào: mangSoNguyen do người dùng nhập
 *  - Xử lý: 
 * B1: tạo hàm lấy ra số chẵn cuối cùng trong mảng
 * B2: kiểm tra số chẵn in ra nếu không phải trả về -1
 * 
 *  - Đầu ra: in kết quả
 */
// hàm lấy ra số chẵn cuối cùng trong mảng
function laySoChanCC(){
    var mangSoChan = [];
    for(i = 0; i < mangSoNguyen.length; i++){
        if(mangSoNguyen[i] % 2 == 0){
            mangSoChan.push(mangSoNguyen[i]);
            // console.log(mangSoChan);
        };
    };
    return mangSoChan[mangSoChan.length - 1];
};

$("#soCCC").onclick = function(){
    var kq;
    if(laySoChanCC() % 2 === 0){
        kq = laySoChanCC();
    }else{
        kq = -1;
    };

    $("#kqTimSCCC").innerHTML = kq;
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
function doiViTri(viTri_1, viTri_2){
    var mangHoanVi = mangSoNguyen.slice(0);
    var doiViTri = mangHoanVi[viTri_1];
    mangHoanVi[viTri_1] = mangHoanVi[viTri_2];
    mangHoanVi[viTri_2] = doiViTri;
    return mangHoanVi;
};

$("#doiViTri").onclick = function(){
    var viTri_1 = $("#viTri_1").value;
    var viTri_2 = $("#viTri_2").value;
    var kq =  doiViTri(viTri_1, viTri_2);
    
    $("#inMangDoiViTri").innerHTML = kq;
};

/**
 * 7. sắp sếp mảng theo thứ tự tăng dần
 * - Đầu vào: mảng được nhập
 * 
 * - Xử lý: 
 * B1: tạo hàm để sắp xếp tăng dần
 * B2: gọi hàm
 * 
 * - Đầu ra: in mảng đã được sắp xếp
 */

function sapXepTangDan(){
    var mangSapXep = mangSoNguyen.slice(0);
    for(i = 0; i < mangSapXep.length - 1; i++){
        for(j = i+1; j < mangSapXep.length; j++){
            if(mangSapXep[i] > mangSapXep[j]){
                var temp = mangSapXep[i];
                mangSapXep[i] = mangSapXep[j];
                mangSapXep[j] = temp;
            };
        };
    };
    return mangSapXep;
};

$("#sapXepTangDan").onclick = function(){
    var kq = sapXepTangDan();
    $("#kqSapXep").innerHTML = kq;
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
 * 
 * - Đầu vào: tạo 1 mảng số thực
 * 
 * -Xử lý:
 * B1: tạo hàm kiểm tra số nguyên
 *  . ghép 2 mảng
 *  . gán 0 cho biến đếm
 *  . lặp từng phần tử cho vào if kiểm tra số nguyên
 *  . tăng biến đếm nếu thỏa đk
 * B2: gọi hàm
 * 
 * - Đầu ra: in kết quả đếm được
 */

var mangSoThuc = [1.2, 2.3, 4.5, 6.6];

function kiemTraSoNguyen(){
    var mangTongHop = mangSoNguyen.concat(mangSoThuc);
    var demSoNguyen = 0;
    for(i = 0; i < mangTongHop.length; i++){
        if(Number.isInteger(mangTongHop[i])){
            demSoNguyen++;
        };
    };
    return demSoNguyen;
};

$("#soLuongSoNguyen").onclick = function(){
   var kq = kiemTraSoNguyen();

    $("#kqTimSoLuongSN").innerHTML = kq;
};

/**
 * 10. so sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
 * 
 * - Đầu vào: người dùng nhập
 * 
 * - Xử lý:
 * B1: tạo hàm so sánh
 *  .đếm số dương
 *  .đếm số âm
 *  . so sánh
 * B2: gọi hàm
 * 
 * - Đầu ra: in ra ra màn hình
 */

function soSanhDuongAm(){
    var demSoDuong = 0;
    var demSoAm = 0;

    for(i = 0; i < mangSoNguyen.length; i++){
        if(mangSoNguyen[i] > 0){
            demSoDuong++;
        };
    };

    for(i = 0; i < mangSoNguyen.length; i++){
        if(mangSoNguyen[i] < 0){
            demSoAm++;
        };
    };

    if(demSoDuong > demSoAm){
        return "Số dương nhiều hơn số âm";
    }else if(demSoDuong < demSoAm){
        return "Số âm nhiều hơn số dương";
    }else{
        return "Số lượng số dương và số âm bằng nhau";
    };
};

$("#btnSoSanh").onclick = function(){
    var kq = soSanhDuongAm();

    $("#kqSoSanh").innerHTML = kq;
};