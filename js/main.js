/*---------Bài 1: QUẢN LÝ TUYỂN SINH----------
B1: đầu vào
điểm thi 3 môn
điểm chuẩn
điểm ưu tiên theo khu vực: a = 2, b = 1, c = 0.5, d = 0
điểm ưu tiên theo đối tượng: 1= 2.5, 2 = 1.5, 3 = 1, 4 = 0
điểm tổng kết = tổng 3 môn + điểm ưu tiên (khu vực + đối tượng)

B2: xử lý 
nếu điểm tổng kết < điểm chuẩn => rớt
nếu điểm thi 3 môn có môn = 0 => rớt
nếu điểm tổng kết > điểm chuẩn => đậu

b3: xuất ra file html */

function handleDiemThi() {
    var diemChuan = +document.getElementById("diemChuan").value;
    var diemMon1 = +document.getElementById("diemMon1").value;
    var diemMon2 = +document.getElementById("diemMon2").value;
    var diemMon3 = +document.getElementById("diemMon3").value;
    var diemKhuVuc;
    var diemDoiTuong;
    var diemTongKet;
    var khuVuc = +document.getElementById("diemKhuVuc").value;
    var doiTuong = +document.getElementById("diemDoiTuong").value;
    switch (khuVuc) {
        case 0:
            diemKhuVuc = 0;
            break;
        case 1:
            diemKhuVuc = 2;
            break;
        case 2:
            diemKhuVuc = 1;
            break;
        case 3:
            diemKhuVuc = 0.5;
            break;
        default:
            diemKhuVuc = 0;
            break;
    }

    switch (doiTuong) {
        case 0:
            diemDoiTuong = 0;
            break;
        case 1:
            diemDoiTuong = 2.5;
            break;
        case 2:
            diemDoiTuong = 1.5;
            break;
        case 3:
            diemDoiTuong = 1;
            break;
        default:
            diemDoiTuong = 0;
            break;
    }
    diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;
    if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
        document.getElementById("result1").innerHTML = `Không trúng tuyển`;
    }
    else if (diemTongKet < diemChuan) {
        document.getElementById("result1").innerHTML = `Không trúng tuyển`;
    }
    else {
        document.getElementById("result1").innerHTML = `Chúc mừng bạn đã trúng tuyển`;
    };

};
document.getElementById("handleDiemThi").onclick = function () {
    handleDiemThi();
}

/*---------Bài 2: TÍNH TIỀN ĐIỆN----------
B1: đầu vào
Tên khách hàng
Số điện xài

B2: xử lý 
50kw đầu: 500đ/kw
50kw sau: 650đ/kw
100kw kế: 850đ/kw
150kw kế: 1100đ/kw
CÒn lại: 1300đ/kw

b3: xuất ra file html */

function handleTienDien () {
    var tenKhachHang = document.getElementById("tenKhachHang").value;
    var soDien = +document.getElementById("soDien").value;
    var tienDien;
    if (soDien <= 50) {
        tienDien = soDien * 500;
    }
    else if (soDien > 50 && soDien <= 100) {
        tienDien = 50 * 500 + (soDien - 50) * 650;
    }
    else if (soDien > 100 && soDien <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
    }
    else if (soDien > 200 && soDien <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
    }
    else if (soDien > 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
    };
    document.getElementById("result2").innerHTML = `Tiền điện của quí khách ${tenKhachHang} là: ${tienDien}đ.`;
};
document.getElementById("handleTienDien").onclick = function() {
    handleTienDien();
};

/*---------Bài 3: TÍNH THUẾ THU NHẬP CÁ NHÂN----------
B1: đầu vào
Họ tên
thu nhập năm
sô người phụ thuộc

B2: xử lý 
thu nhập chịu thuế = thu nhập năm - 4000000 - số người phụ thuộc * 1600000
mức thuế:
bằng hoặc dưới 60 triệu: 5%
trên 60 đến 120: 10%
trên 120 đến 210: 15%
trên 210 đến 384: 20%
trên 384 đến 624: 25%
trên 624 đến 960: 30%
trên 960: 35%

b3: xuất ra file html */

function handleTienThue() {
    var hoTen = document.getElementById("hoTen").value;
    var thuNhapNam = +document.getElementById("thuNhapNam").value;
    var nguoiPhuThuoc = +document.getElementById("nguoiPhuThuoc").value;
    var thuNhapChiuThue = thuNhapNam - 4e+6 - nguoiPhuThuoc * 1.6e+6;
    var tienThue;
    var xuatHTML = document.getElementById("result3");
    if (thuNhapChiuThue <= 0) {
        xuatHTML.innerHTML = `${hoTen} không phải đóng thuế cá nhân`;
    }
    else if (thuNhapChiuThue <= 60e+6) {
        tienThue = thuNhapChiuThue * 0.05;
        xuatHTML.innerHTML = `${hoTen} có thuế cá nhân là: ${tienThue}đ`;
    }
    else if (thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6) {
        tienThue = 60e+6 * 0.05 + (thuNhapChiuThue - 60e+6) * 0.1;
        xuatHTML.innerHTML = `${hoTen} có thuế cá nhân là: ${tienThue}đ`;
    }
    else if (thuNhapChiuThue > 120e+6 && thuNhapChiuThue <= 210e+6) {
        tienThue = 60e+6 * 0.05 + 60e+6 * 0.1 + (thuNhapChiuThue - 120e+6) * 0.15;
        xuatHTML.innerHTML = `${hoTen} có thuế cá nhân là: ${tienThue}đ`;
    }
    else if (thuNhapChiuThue > 210e+6 && thuNhapChiuThue <= 384e+6) {
        tienThue = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + (thuNhapChiuThue - 210e+6) * 0.2;
        xuatHTML.innerHTML = `${hoTen} có thuế cá nhân là: ${tienThue}đ`;
    }
    else if (thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6) {
        tienThue = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + (thuNhapChiuThue - 384e+6) * 0.25;
        xuatHTML.innerHTML = `${hoTen} có thuế cá nhân là: ${tienThue}đ`;
    }
    else if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6) {
        tienThue = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + (thuNhapChiuThue - 624e+6) * 0.3;
        xuatHTML.innerHTML = `${hoTen} có thuế cá nhân là: ${tienThue}đ`;
    }
    else if (thuNhapChiuThue > 960e+6) {
        tienThue = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (thuNhapChiuThue - 960e+6) * 0.35;
        xuatHTML.innerHTML = `${hoTen} có thuế cá nhân là: ${tienThue}đ`;
    };
};
document.getElementById("handleTienThue").onclick = function() {
    handleTienThue();
};

/*---------Bài 4: TÍNH TIỀN CÁP----------
B1: đầu vào
MÃ KHÁCH HÀNG
LOẠI KHÁCH HÀNG: NHÀ DÂN, DOANH NGHIỆP
SỐ KẾT NỐI (CHỈ DÀNH CHO DOANH NGHIỆP)
SỐ KÊNH CAO CẤP

B2: xử lý 
Nhà dân:
Phí xử lý hoá đơn: 4.5$
Phí dịch vụ cơ bản: 20.5$
Thuê kênh cao cấp: 7.5$/kênh
Doanh nghiệp:
Phí xử lý hoá đơn: 15$
Phí dịch vụ cơ bản: 75$ cho tổng 10 kết nối đầu, kết nối thứ 11 trở lên: 5$/kết nối
Thuê kênh cao cấp: 50$/kênh

b3: xuất ra file html */
document.getElementById("loaiKhachHang").onchange = function() {
    if (+document.getElementById("loaiKhachHang").value === 1) {
        document.getElementById("main__soKetNoi").classList = "d-block";
    } else {
        document.getElementById("main__soKetNoi").classList = "d-none";
    }
}
function handleTienCap() {
    var maKhachHang = document.getElementById("maKhachHang").value;
    var loaiKhachHang = +document.getElementById("loaiKhachHang").value;
    var soKenh = +document.getElementById("soKenh").value;
    var soKetNoi = +document.getElementById("soKetNoi").value;
    var tienCap;
    
        switch (loaiKhachHang) {
            case 0:
                tienCap = 4.5 + 20.5 + soKenh * 7.5;
                break;
            case 1:
                if (soKetNoi <= 10) {
                tienCap = 15 + 75 + soKenh * 50;
            } else if (soKetNoi > 10) {
                tienCap = 15 + 75 + (soKetNoi - 10) * 5 + soKenh * 50;
            };
            break;
        };
        document.getElementById("result4").innerHTML = `Số tiền cáp của ${maKhachHang} là: ${tienCap}$`;
};

document.getElementById("handleTienCap").onclick = function() {
    handleTienCap();
};