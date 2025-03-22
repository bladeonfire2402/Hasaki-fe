import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const ClientMenu = {
    AuthMenu: {
      Login: "Đăng nhập/ Đăng kí",
      Submenu:{
        Account:"Tài khoản"
      }
    },
    Store:"Mua sắm ngay",
    Help:"Hỗ trợ khách hàng"
}


const FooterLine={
  FirtstSection:{
    Hotline:"Hotline: 1800 6324",
    FreePolicy:"(Miễn phí, 8h-22h, kể cả thứ 7, CN)",
    Phonenumber:"Sđt: 0862048402",
    Adress:"Địa chỉ: 436/40 Cách Mạng tháng 8"
  },

  About:{
    sect1:{
      AboutLuxani:"Giới thiệu về Lunaxi",
      PrivatePolicy:"Chính sách bảo mật",
      Terms:"Điều khoản sử dụng",
      Contact:"Liên hệ",

    },
    sect2:{
      Faq:"Các câu hỏi thường gặp",
      Help:"Gửi yêu cẩu hỗ trợ",
      Guide:"Hướng dẫn dặt hàng",
      Transport:"Phương thức đặt hàng"
    }
  },

  Contact:{
    ContactTitle:"Tham gia bản tin của chúng tôi ngay",
    ReceiveTitle:"Nhận thông báo qua Email về các sản phẩm mới nhất và các ưu đãi đặc biệt của chúng tôi",
    SocialContact:[FacebookIcon,XIcon,InstagramIcon]
  },

  CopyRight:"Copyright © 2024 Bản quyền bởi @Hosonhaoc  💖 bởi LUNAX"
}

export {ClientMenu,FooterLine}