const productData = [
  {
    id: 0,
    price: "10.000.000",
    ozellik: {
      yatak: "1 Yataklı",
      banyo: "1 Banyolu",
      kat: "1.kat",
    },
    adres: {
      il: "Manisa",
      ilçe: "Soma",
      mahalle: "X Mahallesi ",
      sokak: "X Sokağı ",
      no: "No: X ",
    },
    durum: "Satista",
    başlık:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ea.",
    portföy: "P46845745",
    Emlak_Tipi: "Villa",
    m_2_brüt: "100",
    m_2_net: "120",
    oda_sayısı: "1+1",
    bina_yaşı: "1",
    emlakcı: "Altan Torun",
    ünvan: "Patron",
    emlakcı_adres: "Manisa/ Soma",
    url: [
      "https://picsum.photos/seed/img1/640/400",
      "https://picsum.photos/seed/img2/640/400",
      "https://picsum.photos/seed/img3/640/400",
      "https://picsum.photos/seed/img3/640/400",
    ],
    emlakcı_foto: "./img_avatar2.png",
    mülk_adress:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.6176718267616!2d31.166374374656783!3d40.90220087136564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409da0e71807b819%3A0xf5a98828838bb9a4!2sAcademia%20Tower!5e0!3m2!1str!2str!4v1694506198728!5m2!1str!2str",
    mülk_adress_sokak:
      "https://www.google.com/maps/embed?pb=!4v1694508879100!6m8!1m7!1syZyTDCFkgRpxX3zPKk4TSA!2m2!1d40.90212556154644!2d31.16904740513881!3f30.21439060999016!4f-12.93606985765203!5f0.7820865974627469",
  },
  {
    id: 1,
    price: "20.000.000",
    ozellik: {
      yatak: "2 Yataklı",
      banyo: "2 Banyolu",
      kat: "2.kat",
    },
    adres: {
      il: "Manisa",
      ilçe: "Soma",
      mahalle: "X Mahallesi ",
      sokak: "X Sokağı ",
      no: "No: X ",
    },
    durum: "Satista",
    başlık:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ea.",
    portföy: "P46845745",
    Emlak_Tipi: "Villa",
    m_2_brüt: "200",
    m_2_net: "220",
    oda_sayısı: "2+1",
    bina_yaşı: "2",
    emlakcı: "Altan Torun",
    ünvan: "Patron",
    emlakcı_adres: "Manisa / Soma",
    url: [
      "https://picsum.photos/id/15/640/400",
      "https://picsum.photos/id/16/640/400",
      "https://picsum.photos/id/17/640/400",
    ],
    mülk_adress:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.6176718267616!2d31.166374374656783!3d40.90220087136564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409da0e71807b819%3A0xf5a98828838bb9a4!2sAcademia%20Tower!5e0!3m2!1str!2str!4v1694506198728!5m2!1str!2str",
    mülk_adress_sokak:
      "https://www.google.com/maps/embed?pb=!4v1694508879100!6m8!1m7!1syZyTDCFkgRpxX3zPKk4TSA!2m2!1d40.90212556154644!2d31.16904740513881!3f30.21439060999016!4f-12.93606985765203!5f0.7820865974627469",
  },
  {
    id: 2,
    price: "30.000.000",
    ozellik: {
      yatak: "3 Yataklı",
      banyo: "3 Banyolu",
      kat: "3.kat",
    },
    adres: {
      il: "Manisa",
      ilçe: "Soma",
      mahalle: "X Mahallesi ",
      sokak: "X Sokağı ",
      no: "No: X ",
    },
    durum: "Kiralık",
    başlık:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ea.",
    portföy: "P46845745",
    Emlak_Tipi: "Villa",
    m_2_brüt: "300",
    m_2_net: "320",
    oda_sayısı: "3+1",
    bina_yaşı: "3",
    emlakcı: "Altan Torun",
    ünvan: "Patron",
    emlakcı_adres: "Manisa / Soma",
    url: [
      "https://picsum.photos/id/18/640/400",
      "https://picsum.photos/id/19/640/400",
      "https://picsum.photos/id/20/640/400",
    ],
    mülk_adress:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.6176718267616!2d31.166374374656783!3d40.90220087136564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409da0e71807b819%3A0xf5a98828838bb9a4!2sAcademia%20Tower!5e0!3m2!1str!2str!4v1694506198728!5m2!1str!2str",

    mülk_adress_sokak:
      "https://www.google.com/maps/embed?pb=!4v1694508879100!6m8!1m7!1syZyTDCFkgRpxX3zPKk4TSA!2m2!1d40.90212556154644!2d31.16904740513881!3f30.21439060999016!4f-12.93606985765203!5f0.7820865974627469",
  },
  {
    id: 3,
    price: "40.000.000",
    ozellik: {
      yatak: "4 Yataklı",
      banyo: "4 Banyolu",
      kat: "4.kat",
    },
    adres: {
      il: "Manisa",
      ilçe: "Soma",
      mahalle: "X Mahallesi ",
      sokak: "X Sokağı ",
      no: "No: X ",
    },
    durum: "Kiralık",
    başlık:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ea.",
    portföy: "P46845745",
    Emlak_Tipi: "Villa",
    m_2_brüt: "400",
    m_2_net: "420",
    oda_sayısı: "4+1",
    bina_yaşı: "4",
    emlakcı: "Altan Torun",
    ünvan: "Patron",
    emlakcı_adres: "Manisa / Soma",
    url: [
      "https://picsum.photos/id/21/640/400",
      "https://picsum.photos/id/22/640/400",
      "https://picsum.photos/id/23/640/400",
    ],
    mülk_adress:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.6176718267616!2d31.166374374656783!3d40.90220087136564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409da0e71807b819%3A0xf5a98828838bb9a4!2sAcademia%20Tower!5e0!3m2!1str!2str!4v1694506198728!5m2!1str!2str",
  },
  {
    id: 4,
    price: "50.000.000",
    ozellik: {
      yatak: "5 Yataklı",
      banyo: "5 Banyolu",
      kat: "5.kat",
    },
    adres: {
      il: "Manisa",
      ilçe: "Soma",
      mahalle: "X Mahallesi ",
      sokak: "X Sokağı ",
      no: "No: X ",
    },
    durum: "Kiralık",
    başlık:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ea.",
    portföy: "P46845745",
    Emlak_Tipi: "Villa",
    m_2_brüt: "500",
    m_2_net: "520",
    oda_sayısı: "5+1",
    bina_yaşı: "5",
    emlakcı: "Altan Torun",
    ünvan: "Patron",
    emlakcı_adres: "Manisa / Soma",
    url: [
      "https://picsum.photos/id/24/640/400",
      "https://picsum.photos/id/25/640/400",
      "https://picsum.photos/id/26/640/400",
    ],
    mülk_adress:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.6176718267616!2d31.166374374656783!3d40.90220087136564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409da0e71807b819%3A0xf5a98828838bb9a4!2sAcademia%20Tower!5e0!3m2!1str!2str!4v1694506198728!5m2!1str!2str",
    mülk_adress_sokak:
      "https://www.google.com/maps/embed?pb=!4v1694508879100!6m8!1m7!1syZyTDCFkgRpxX3zPKk4TSA!2m2!1d40.90212556154644!2d31.16904740513881!3f30.21439060999016!4f-12.93606985765203!5f0.7820865974627469",
  },
  {
    id: 5,
    price: "60.000.000",
    ozellik: {
      yatak: "6 Yataklı",
      banyo: "6 Banyolu",
      kat: "6.kat",
    },
    adres: {
      il: "Manisa",
      ilçe: "Soma",
      mahalle: "X Mahallesi ",
      sokak: "X Sokağı ",
      no: "No: X ",
    },
    durum: "Kiralık",
    başlık:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ea.",
    portföy: "P46845745",
    Emlak_Tipi: "Villa",
    m_2_brüt: "600",
    m_2_net: "620",
    oda_sayısı: "6+1",
    bina_yaşı: "6",
    emlakcı: "Altan Torun",
    ünvan: "Patron",
    emlakcı_adres: "Manisa / Soma",
    url: [
      "https://picsum.photos/id/27/640/400",
      "https://picsum.photos/id/28/640/400",
      "https://picsum.photos/id/29/640/400",
    ],
    mülk_adress:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.6176718267616!2d31.166374374656783!3d40.90220087136564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409da0e71807b819%3A0xf5a98828838bb9a4!2sAcademia%20Tower!5e0!3m2!1str!2str!4v1694506198728!5m2!1str!2str",
    mülk_adress_sokak:
      "https://www.google.com/maps/embed?pb=!4v1694508879100!6m8!1m7!1syZyTDCFkgRpxX3zPKk4TSA!2m2!1d40.90212556154644!2d31.16904740513881!3f30.21439060999016!4f-12.93606985765203!5f0.7820865974627469",
  },
];

export default productData;
