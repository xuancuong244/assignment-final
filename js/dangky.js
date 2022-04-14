function kiemtra() {
  if(!kiemtramasv()) return ;
    if (!kiemtraho()) return ;
    if(!kiemtraEmail()) return ;
    if(!kiemtragioitinh()) return ;
    if(!kiemtraSoThich()) return ; 
    if(!kiemtraQuoctich()) return ;
    if(!kiemtraGhichu()) return ;
    alert("Đăng kí thành công");
  }
  function kiemtramasv(){
    var masv = document.forms["formdk"]["masv"];
    if (masv.value == "") {

      alert("Mã sinh viên không được rỗng");
      masv.focus();
      return false;
    }

    return true;
  }
  function kiemtraho() {
    var ho = document.forms["formdk"]["hoten"];
    if (ho.value == "") {

      alert("Họ tên không được rỗng");
      ho.focus();
      return false;
    }

    return true;
  }
  function kiemtraEmail() {
    var dt = document.forms["formdk"]["email"];
    if (dt.value == '') {
      alert("Email không được rỗng");
      dt.focus();
      return false;
    }
    return true;
  }
  function kiemtragioitinh() {
    var gioitinh = document.forms["formdk"]["gioitinh"];
    if (!gioitinh[0].checked && !gioitinh[1].checked) {
      alert("Chọn giới tính là nam hoặc là nữ");
      gioitinh.focus();
      return false;
    }

    return true;
  }

  function kiemtraSoThich() {
    var sothich = document.forms["formdk"]["sothich"];
    for(var i = 0; i < sothich.length; i++){
        if (sothich[i].checked) {
            break;
        }
    }
    if(i == sothich.length){
        alert("Chọn ít nhất một sở thích");
        sothich.focus();
        return false
    }
    return true;
}
function kiemtraQuoctich() {
  var quoctich = document.forms["formdk"]["quoctich"];
  if(quoctich.value == ''){
      alert("Chọn quốc tịch");
      quoctich.focus();
      return false;
  }
  return true;
}
function kiemtraGhichu() {
    var dt = document.forms["formdk"]["ghichu"];
    if (dt.value > 20 || dt.value < 250) {
      alert("Ghi chú không được rỗng");
      dt.focus();
      return false;
    }
    return true;
  }