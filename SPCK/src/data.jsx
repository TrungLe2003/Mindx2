import { useState } from "react";
//
const listCategory = [
  {
    id: 1,
    image: "/public/Categories-list/thietke.jpg",
    nameCategory: "Thiết kế",
    listCourses: [
      {
        course: "Khóa học Figma từ căn bản đến thực chiến",
        aboutCourse:
          "Những kiến thức nền tảng và chuyên sâu nhất về figma từ kinh nghiệm 2 năm giảng dạy",
        author: "Lưu Trọng Nhân, TELOS Academy",
        totalTime: "6,5",
        totalLesson: "56",
      },
      {
        course: "Figmarketing | Khoá học figma dành cho thiết kế marketing",
        aboutCourse:
          "Khoá học figma để làm thiết kế phục vụ marketing giúp giảm đến gần 60% công sức và thời gian",
        author: "Lưu Trọng Nhân, TELOS Academy",
        totalTime: "2,5",
        totalLesson: "43",
      },
      {
        course: "Trọn Bộ 5 Kỹ Năng Thiết Kế Adobe",
        aboutCourse:
          "Một khóa học đa dạng với các phần mềm của Adobe bao gồm Photoshop, Illustrator, Indesign, Premiere Pro và Affter Effect",
        author: "Nguyễn Vũ Hoàng Hiệp",
        totalTime: "12,5",
        totalLesson: "117",
      },
      {
        course: "Photoshop - Thiết kế poster/banner (dành cho người mới)",
        aboutCourse:
          "Adobe photoshop, Photoshop, graphic design, thiết kế đồ họa",
        author: "Trần Nghĩa",
        totalTime: "3",
        totalLesson: "22",
      },
    ],
  },
  {
    id: 2,
    image: "/public/Categories-list/AmNhac.jpg",
    nameCategory: "Âm nhạc",
    listCourses: [
      {
        course: "Guitar Foundation for Beginners to Intermediate (3 courses)",
        aboutCourse:
          "Khoá học Guitar dành cho người muốn nâng cao khả năng chơi nhạc, người mới bắt đầu và người tự học",
        author: "Le Vu Dang Tran",
        totalTime: "6,5",
        totalLesson: "108",
      },
      {
        course: "Music Theory Comprehensive Complete! (Parts 1, 2, & 3)",
        aboutCourse:
          "A Complete College-Level Music Theory Curriculum. **IAOMEI Certified**",
        author: "J.AthonyAlen",
        totalTime: "12",
        totalLesson: "157",
      },
      {
        course: "Pianoforall - Incredible New Way To Learn Piano & Keyboard",
        aboutCourse:
          "Learn Piano in WEEKS not years. Play-By-Ear & learn to Read Music. Pop, Blues, Jazz, Ballads, Improvisation, Classical",
        author: "Robin Hall",
        totalTime: "38",
        totalLesson: "426",
      },
      {
        course: "Complete Guitar Lessons System - Beginner to Advanced",
        aboutCourse:
          "All-in-one Guitar Course, Fingerstyle Guitar, Blues Guitar, Acoustic Guitar, Electric Guitar & Fingerpicking Guitarra",
        author: "Erich Andreas",
        totalTime: "40 ",
        totalLesson: "340",
      },
    ],
  },
  {
    id: 3,
    image: "/public/Categories-list/kinhdoanh.jpg",
    nameCategory: "Kinh doanh",
    listCourses: [
      {
        course: "Business Analyst (BA) for Practitioners (BA thực chiến)",
        aboutCourse:
          "Business Analyst for all levels (Fresher, Junior, Middle) - Khóa học BA thực chiến cho người mới",
        author: "Lê Thị Bích Thuận",
        totalTime: "4",
        totalLesson: "49 ",
      },
      {
        course: "Khoá học dropship amazon Ultimate v1",
        aboutCourse:
          "Khoá học dạy bạn cách làm sao để kiếm tiền được với Amazon",
        author: "Vuong Manh Hoang",
        totalTime: "9",
        totalLesson: "56",
      },
      {
        course: "Tại sao Lập kế hoạch thất bại & Các chia sẻ về chủ đề Agile",
        aboutCourse:
          "Agile Planning (Lập kế hoạch trong Agile), các lầm tưởng trong Agile",
        author: "Lê Thị Bích Thuận",
        totalTime: "1.5",
        totalLesson: "16",
      },
      {
        course: "Đánh Thức Năng Lực Giao Tiếp Trong Bạn",
        aboutCourse:
          "Trở thành Người Tự Tin trong giao tiếp, Thấu Hiểu người khác, Tạo Thiện Cảm, Tạo Ấn Tượng, Làm Chủ Cảm Xúc & Ngôn Từ.",
        author: "",
        totalTime: "3.5",
        totalLesson: "63",
      },
    ],
  },
  {
    id: 4,
    image: "/public/Categories-list/mkt.jpg",
    nameCategory: "MKT",
    listCourses: [
      {
        course: "Làm VIDEO Quảng Cáo TikTok - HieuCB",
        aboutCourse:
          "Tìm kiếm ý tưởng triệu view, xây dựng kịch bản chốt sale hoàn hảo, kỹ thuật quay dựng để giữ chân người xem.",
        author: "Hieu CB",
        totalTime: "4",
        totalLesson: "35 ",
      },
      {
        course: "TikTok Ads: Test Sản Phẩm và Chạy Quảng Cáo - HieuCB",
        aboutCourse:
          "Test sản phẩm, Chạy quảng cáo TikTok, Tối ưu và scale quảng cáo",
        author: "Hieu CB",
        totalTime: "2",
        totalLesson: "18 ",
      },
      {
        course: "Digital Marketing: Từ nền nảng đến chiến lược",
        aboutCourse: "Case Study thực tế",
        author: "Đoàn Trung Thảo",
        totalTime: "6.5 ",
        totalLesson: "45 ",
      },
      {
        course: "Marketing A-Z cho cá nhân và chủ doanh nghiệp",
        aboutCourse:
          "Marketing vững chắc từ trong ra ngoài (Marketing from Inside out)",
        author: "Tami Pham",
        totalTime: "8 ",
        totalLesson: "1.5",
      },
    ],
  },
  {
    id: 5,
    image: "/public/Categories-list/NhiepAnh-v2.jpg",
    nameCategory: "Nhiếp ảnh",
    listCourses: [
      {
        course: "Ánh sáng studio căn bản",
        aboutCourse:
          "ánh sáng trong studio , nhiếp ảnh chân dung, nhiếp ảnh nâng cao, ánh sáng flash, ánh sáng led",
        author: "Danny Nguyen",
        totalTime: "2 ",
        totalLesson: "15 ",
      },
      {
        course: "Hậu kỳ dành cho nhiếp ảnh",
        aboutCourse: "Hậu kỳ, nhiếp ảnh, nhiếp ảnh cho người mới",
        author: "Nguyễn Đình Duy",
        totalTime: "1",
        totalLesson: "14 ",
      },
      {
        course: "ánh sang nâng cao nhiếp ảnh studio",
        aboutCourse: "ánh sáng, studio, nâng cao,nhiếp ảnh thương mại",
        author: "Danny Nguyen",
        totalTime: "2.5",
        totalLesson: "15 ",
      },
      {
        course: "Nhiếp ảnh kỹ thuật số - căn bản",
        aboutCourse:
          "Nhiếp ảnh kỹ thuật số, nhiếp ảnh căn bản, nhiếp ảnh dành cho người mới bắt đầu, trắc nghiệm về nhiếp ảnh.",
        author: "Nguyễn Đình Duy",
        totalTime: "1",
        totalLesson: "1",
      },
    ],
  },
  {
    id: 6,
    image: "/public/Categories-list/phattrien.jpg",
    nameCategory: "Phát triển",
    listCourses: [
      {
        course: "C++ Cơ bản dành cho người mới học lập trình",
        aboutCourse: "Bắt đầu học lâp trình bằng ngôn ngữ C++",
        author: "Le Tran Dat",
        totalTime: "10.5",
        totalLesson: "92",
      },
      {
        course: "Lập trình Hướng đối tượng với C++ cơ bản đến nâng cao",
        aboutCourse: "Hiểu rõ phương pháp lập trình hướng đối tượng với C++",
        author: "Khoa Nguyen",
        totalTime: "12",
        totalLesson: "93",
      },
      {
        course: "React Ultimate - React.JS Cơ Bản Từ Z Đến A Cho Beginners",
        aboutCourse: "Hiểu và Làm Chủ React (Chỉ Học Những Thứ Cần Thiết)",
        author: "Hỏi dân It vs Eric",
        totalTime: "20.5",
        totalLesson: "124 ",
      },
      {
        course: "Khóa học Java Online Tiếng Việt toàn tập (VietJack)",
        aboutCourse: "Học Java với lập trình viên chuyên nghiệp",
        author: "Nguyễn Tuyển, Ken Jack",
        totalTime: "18",
        totalLesson: "98",
      },
    ],
  },
  {
    id: 7,
    image: "/public/Categories-list/phattriencanhan.jpg",
    nameCategory: "Phát triển cá nhân",
    listCourses: [
      {
        course: "Nghệ Thuật Thuyết Trình Bằng Câu Chuyện",
        aboutCourse: "Kỹ năng thuyết trình thuyết phục bằng câu chuyện",
        author: "Nora Academy, Ngoc Thu Buy",
        totalTime: "2.5",
        totalLesson: "23 ",
      },
      {
        course: "Bí Mật Đàm Phán",
        aboutCourse:
          "Làm chủ Nghệ Thuật Đàm Phán, Thấu Hiểu Đối Tác, Am tường Thuật Thao Túng Tâm Lý, 60 Nguyên Tắc Đàm Phán Đỉnh Cao.",
        author: "Jessica Thao Nguyen",
        totalTime: "5.5",
        totalLesson: "86 ",
      },
      {
        course: "Personal branding - Xây dựng thương hiệu cá nhân",
        aboutCourse:
          "Personal branding - Xây dựng thương hiệu cá nhân để thăng tiến trong cuộc sống và sự nghiệp",
        author: "Bung Trần",
        totalTime: "3",
        totalLesson: "25 ",
      },
      {
        course: "Kể Chuyện Bằng Dữ Liệu - Data Storytelling",
        aboutCourse: "Khám Phá Sức Mạnh của Dữ Liệu và Câu Chuyện",
        author: "Nora Academy, Ngoc Thu Bui",
        totalTime: "3",
        totalLesson: "28 ",
      },
    ],
  },
  {
    id: 8,
    image: "/public/Categories-list/cnttvaphanmem.jpg",
    nameCategory: "CNTT và phần mềm",
    listCourses: [
      {
        course: "AWS Cloud for beginner (Vietnamese)",
        aboutCourse: "AWS Cloud cho người mới bắt đầu (Tiếng Việt)",
        author: "Linh Nguyen",
        totalTime: "23",
        totalLesson: "333 ",
      },
      {
        course: "Viết ứng dụng bán hàng với Java Springboot/API và Angular",
        aboutCourse:
          "Thực chiến, xây dựng ứng dụng bán hàng với Java Springboot API và Angular",
        author: "Nguyen Duc Hoang",
        totalTime: "24",
        totalLesson: "80 ",
      },
      {
        course: "DevOps on AWS for beginner (Vietnamese)",
        aboutCourse:
          "Khoá học DevOps trên AWS dành cho người mới bắt đầu - Tiếng Việt.",
        author: "Linh Nguyen",
        totalTime: "23.5",
        totalLesson: "233 ",
      },
      {
        course: "Docker Container cơ bản (Tiếng Việt)",
        aboutCourse: "Khoá học Docker Container dành cho người mới bắt đầu",
        author: "Hoa Nguyen Huu",
        totalTime: "3",
        totalLesson: "41 ",
      },
    ],
  },
];

export { listCategory };

// dữ liệu list người dùng
export const dataUser = [{ username: "testuser", password: "password" }];

export const userLoggedIn = null;
