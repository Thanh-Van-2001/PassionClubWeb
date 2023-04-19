import duca from './Assets/duca.png';
import pc from './Assets/pclogo.png';
import work from './Assets/work.png';

import astro from './Assets/sponsorsLogos/astronaut.png';
import guitar from './Assets/sponsorsLogos/guitar.png';
import heart from './Assets/sponsorsLogos/heart.png';
import mascot from './Assets/sponsorsLogos/mascot.png';
import passion from './Assets/sponsorsLogos/passion1.png';
import piano from './Assets/sponsorsLogos/piano.png';
import uet from './Assets/sponsorsLogos/UET.png';
import thanh from './Assets/team9/Thanh.png';

const TOP_SECTION = {
  TITLE: 'Passion Club',
  Typed_effect: ['Live your music', 'Live your passion'],
  SHORT_DESCRIPTION: 'Câu lạc bộ Nghệ thuật trường Đại học Công Nghệ - ĐHQGHN',
  DISCORD_LINK: '',
  JUDGES_FORM_LINK: '/form',
  PASSION_CLUB_LOOKING_BACK: '/gen11',
  PC_G10: '/gen10',
  PC_G9: '/gen9',
  PC_G8: '/gen8',
  PC_G7: '/gen7',
  DIRECT_GGFORM_LINK: 'https://tinyurl.com/PCTuyenQuanGen11'
};

const SOCIALS = {
  facebook: 'https://www.facebook.com/PCuet',
  youtube: 'https://www.youtube.com/c/PcUET',
  discord: 'https://discord.gg/mxMFH88g',
  tiktok: 'https://www.tiktok.com/@passionclubuet',
  email: 'pc.uet.vnu@gmail.com'
};

const MIDDLE_SECTION = {
  TITLE: 'Giới thiệu về CLB',
  LONG_DESCRIPTION:
    'Passion Club - Đội ngũ văn nghệ nòng cốt của UET. Được thành lập vào 25/3/2013, PC là mái nhà chung cho các bạn sinh viên yêu âm nhạc và vũ đạo trong và ngoài trường đồng thời quảng bá hình ảnh sinh viên UET nhiệt huyết, năng động và sáng tạo. Song hành với việc học tập, nghiên cứu hết mình trên giảng đường, Passion Club là nơi mà những con tim yêu nghệ thuật có thể cháy hết mình với ngọn lửa đam mê 🔥',
  LOGO: pc
};

const NEXT_SECTION = {
  TITLE: 'Thành tích nổi bật',
  LONG_DESCRIPTION:
    'Trong những năm gần đây, PC luôn tích cực tham gia các hoạt động văn nghệ trong và ngoài trường, có thể kể đến như Quán quân văn nghệ UET Clubday, giải nhì văn nghệ VNU hay finalist VNU Got Talent. Bên cạnh đó, nhà [P] đã tổ chức thành công hàng loạt hoạt động và nhận được sự hưởng ứng tích cực của mọi người như: Mini show “Lặng”, Cuộc thi “Thanh âm ngày Tết”, chương trình “Tựa” Radio và hàng loạt những show Du ca giao lưu cùng các CLB âm nhạc, nghệ thuật khác…',
  LOGO: work
};

const THEN_SECTION = {
  TITLE: 'Vào PC, bạn sẽ được...',
  LONG_DESCRIPTION:
    'Đào tạo kiến thức về âm nhạc (thanh nhạc từ pop, ballad nhẹ nhàng cho tới rock, rap; nhạc cụ với organ, guitar, violin, cajon cho tới DJ; vũ đạo với Popping, Locking, Dân gian Đương đại, múa văn nghệ, Dance cover,...); các kỹ năng cần thiết để tổ chức một sự kiện âm nhạc với các quy mô lớn nhỏ (truyền thông - kỹ thuật như quay phim, chụp ảnh, sử dụng adobe, viết bài đăng; Tổ chức sự kiện như lên kế hoạch, ngân sách, quản lý nhân sự, đối ngoại như viết hồ sơ, xin tài trợ,...)',
  LOGO: duca
};

const ADD_SECTION = {
  TITLE: 'Hơn thế nữa...',
  LONG_DESCRIPTION:
    'Các PCer còn được trực tiếp tham gia vào những project của CLB để tạo ra những sản phẩm âm nhạc lưu lại dấu ấn cũng như chứng tỏ niềm đam mê âm nhạc của bản thân (Thu âm - Quay MV, Parody, ShortFilm); Trải nghiệm tham gia các hoạt động phong trào, tình nguyện trong và ngoài UET (Show diễn chuyên nghiệp và bán chuyên nghiệp, du ca,...) và được gặp gỡ nhiều "tiền bối" để học hỏi, trau dồi kiến thức cùng rất nhiều điều thú vị khác nữa.'
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://tinyurl.com/PCTuyenQuanGen11'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://www.facebook.com/groups/459153511738325'
  }
  // Privacy_policy: {
  //   required: true,
  //   src: ''
  // },
  // Terms_of_use: {
  //   required: true,
  //   src: ''
  // }
};

const calenderStartingDate = {
  month: 3,
  year: 2023
};

const schedule = [
  {
    day: '6-1-2023',
    events: [
      {
        title: 'MiniShow: Redamancy',
        timings: '7 PM - 10 Pm',
        link: 'https://www.facebook.com/PCuet/posts/pfbid02ZG6cZ58EDQ4Cjk2abf5cnY6KaXMaaNpu8yf42FDQQzhMawUdt1PToPixJSCzrKrsl'
      },
      {
        title: 'Ăn xiên bẩn',
        timings: '11 PM - 1 am',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '12-3-2023',
    events: [
      {
        title: 'Team Building',
        timings: '12 AM - 6 Pm',
        link: 'https://www.facebook.com/PCuet/posts/pfbid02s2PKw3J4TAn34ePSPGSDmpmzviRr3Lwzi8rxjHwgeTrtFbcjxmKVN6MJUmUVPNSil'
      }
    ]
  },
  {
    day: '14-2-2023',
    events: [
      {
        title: 'Valentine with PC',
        timings: '12 AM - 1 Pm',
        link: 'https://fb.watch/j2Wd5lXOVO/'
      }
    ]
  },
  {
    day: '25-3-2023',
    events: [
      {
        title: 'Concert: Một-Thập Kỷ',
        timings: '19h - 21h30',
        link: 'https://www.facebook.com/PCuet/posts/pfbid0XTV7jnLiRCp2uJjZT3DE2RwfdzRVaownGWxRFZNcRkpAjremfudrTKYuJkQNvKCHl'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in ClubStructure
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 per array in `ClubStructure`, you can
 * create as many arrays you want all will be rendered
 * in a group of 3.
 */

const ClubStructure = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-headphones"></i>,
      type: 'Ban chủ nhiệm',
      content:
        'Là những người đứng đầu của tổ chức, ban chủ nhiệm gồm những thành viên có năng lực và kinh nghiệm trong việc tổ chức các hoạt động âm nhạc. Ban chủ nhiệm có vai trò quan trọng trong việc đưa ra các quyết định về hoạt động của CLB, đồng thời cũng là người đảm nhận vai trò chủ đạo trong việc quản lý và phát triển PC.'
    },
    {
      icon: <i className=" second fas fa-4x fa-guitar"></i>,
      type: 'Ban chuyên môn',
      content:
        'Được ví như linh hồn của CLB Nghệ thuật, ban chuyên môn bao gồm 2 tiểu ban thanh nhạc và nhạc cụ - những người đảm nhận vai trò chủ đạo trong việc tạo ra những sản phẩm âm nhạc. Các tiết mục trình diễn của Ban luôn đốt cháy sân khấu với những bản phối mới đầy sáng tạo cùng những giai điệu cuốn hút, thanh âm bay bổng và âm sắc đầy độc đáo.'
    },
    {
      icon: <i className=" third fas fa-4x fa-music"></i>,
      type: 'Ban vũ đạo',
      content:
        'Nhắc tới Ban Vũ Đạo, chúng ta đều nghĩ ngay đến những tiết mục đặc sắc, lôi cuốn tạo nên một bầu không khí vô cùng sôi động, náo nhiệt. Những dancer tài năng ai cũng mang một phong cách khác nhau nhưng khi đứng trên cùng một sân khấu, chính sự đa dạng đấy cùng niềm đam mê cháy bỏng đã khiến Ban Vũ Đạo toả sáng trên sân khấu hơn bao giờ hết. '
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fourth fas fa-3x fa-camera"></i>,
      type: 'Ban truyền thông',
      content:
        'Những pháp sư tài năng của ban truyền thông là những người có năng lực nắm bắt những khoảnh khắc tỏa sáng của mọi người. Âm thầm nhưng đầy ý nghĩa, có thể nói Ban Truyền thông chính là “cơ quan ngôn luận” của PC. Từng sự kiện lớn nhỏ đều không thể thiếu sự góp mặt của những chú ong chăm chỉ của Ban Truyền thông'
    },
    {
      icon: <i className="first fas fa-4x fa-book-open"></i>,
      type: 'Ban tổ chức sự kiện',
      content:
        'Đằng sau ánh hào quang sân khấu, luôn tồn tại những con người âm thầm, lặng lẽ cống hiến để tạo nên những sự kiện chuyên nghiệp với quy mô hoành tráng, đó chính là ban tổ chức sự kiện, bao gồm tiểu ban hậu cần và đối ngoại.'
    }
    // {
    //   icon: <i className=" fifth fa-3x fas fa-trophy"></i>,
    //   type: 'Best UI/UX',
    //   content: 'Project with most creative designs will be UI/UX track'
    // }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `BoardOfDirectors`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const DevTeam = [
  [
    //Array 1
    {
      Name: 'Thanh',
      role: 'Nguyễn Văn Thành',
      facebook: 'https://www.facebook.com/felicenguyen2001/',
      linkedin: 'https://www.linkedin.com/in/vthanh2001/',
      img: thanh
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: uet}, {src: heart}, {src: mascot}], //Array 1
  [{src: astro}, {src: piano}, {src: guitar}], //Array 2
  [{src: passion}]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  NEXT_SECTION,
  THEN_SECTION,
  ADD_SECTION,
  SOCIALS,
  FOOTER,
  ClubStructure,
  sponsorLogos,
  DevTeam,
  schedule,
  calenderStartingDate
};
