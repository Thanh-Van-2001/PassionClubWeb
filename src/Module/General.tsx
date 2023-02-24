import duca from './Assets/duca.png';
import pc from './Assets/pclogo.png';
import thu from './Assets/thu am.png';
import work from './Assets/work.png';
// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import pass from './Assets/sponsorsLogos/1pass.png';
import ACF from './Assets/sponsorsLogos/ACF.png';
import egg from './Assets/sponsorsLogos/egg.png';
import glimpse from './Assets/sponsorsLogos/glimpse.png';
import heart from './Assets/sponsorsLogos/heart.png';
import interviewC from './Assets/sponsorsLogos/interview-cake.jpg';
import ll from './Assets/sponsorsLogos/ll.png';
import passion from './Assets/sponsorsLogos/passion1.png';
import qoom from './Assets/sponsorsLogos/qoom.svg';
import Replit from './Assets/sponsorsLogos/replit.png';
import taskade from './Assets/sponsorsLogos/taskade.png';
import uet from './Assets/sponsorsLogos/UET.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import hieu from './Assets/teami/Hieu.png';
import long from './Assets/teami/Long.png';
import thanh from './Assets/teami/Thanh.png';
import thao from './Assets/teami/Thao.png';

const TOP_SECTION = {
  TITLE: 'Passion Club',
  Typed_effect: ['Live your music', 'Live your passion'],
  SHORT_DESCRIPTION: 'Câu lạc bộ Nghệ thuật trường Đại học Công Nghệ - ĐHQGHN',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  JUDGES_FORM_LINK: 'https://www.facebook.com/groups/1744414188904755',
  PASSION_CLUB_REGISTRATION_FORM_LINK: 'https://www.facebook.com/PCuet'
};

const SOCIALS = {
  facebook: 'https://www.facebook.com/PCuet',
  youtube: 'https://www.youtube.com/c/PcUET',
  discord: 'https://discord.com/invite/XHHuNDzm',
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
  TITLE: 'Một số thành tích nổi bật',
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
    'Các PCer còn được trực tiếp tham gia vào những project của CLB để tạo ra những sản phẩm âm nhạc lưu lại dấu ấn cũng như chứng tỏ niềm đam mê âm nhạc của bản thân (Thu âm - Quay MV, Parody, ShortFilm); Trải nghiệm tham gia các hoạt động phong trào, tình nguyện trong và ngoài UET (Show diễn chuyên nghiệp và bán chuyên nghiệp, du ca,...) và được gặp gỡ nhiều "tiền bối" để học hỏi, trau dồi kiến thức cùng rất nhiều điều thú vị khác nữa.',
  LOGO: thu
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://tinyurl.com/PCTuyenQuanGen11'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://www.facebook.com/groups/459153511738325'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 2,
  year: 2023
};

const schedule = [
  {
    day: '8-11-2021',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '6-1-2023',
    events: [
      {
        title: 'MiniShow: Redamancy',
        timings: '7 PM - 10 Pm',
        link: 'https://google.com'
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
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '14-2-2023',
    events: [
      {
        title: 'Valentine with PC',
        timings: '12 AM - 1 Pm',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '25-3-2023',
    events: [
      {
        title: 'Sinh nhật CLB',
        timings: '7 Pm - 10 Pm',
        link: 'https://google.com'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-headphones"></i>,
      type: 'Ban chủ nhiệm',
      content:
        'Gồm 1 chủ nhiệm và 2 phó chủ nhiệm, chịu trách nhiệm điều hành CLB'
    },
    {
      icon: <i className=" second fas fa-4x fa-guitar"></i>,
      type: 'Ban chuyên môn',
      content:
        'Gồm trưởng ban chuyên môn, 1 phó ban thanh nhạc và 1 phó ban nhạc cụ'
    },
    {
      icon: <i className=" third fas fa-4x fa-music"></i>,
      type: 'Ban vũ đạo',
      content:
        'Gồm trưởng ban và phó ban vũ đạo, phụ trách đội nhảy và đội múa của CLB'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fourth fas fa-3x fa-camera"></i>,
      type: 'Ban truyền thông',
      content:
        'Gồm trưởng ban truyền thông, phụ trách sáng tạo content trên các nền tảng trực tuyến'
    },
    {
      icon: <i className="first fas fa-4x fa-book-open"></i>,
      type: 'Ban tổ chức sự kiện',
      content:
        'Gồm trưởng ban tổ chức sự kiện, lên kế hoạch, quản lý tài chính các sự kiện'
    }
    // {
    //   icon: <i className=" fifth fa-3x fas fa-trophy"></i>,
    //   type: 'Best UI/UX',
    //   content: 'Project with most creative designs will be UI/UX track'
    // }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Hieu',
      role: 'Chủ nhiệm - Phạm Huy Hiệu ',
      facebook: 'https://www.facebook.com/pham.hieu.5030927',
      instagram: '',
      img: hieu
    },
    {
      Name: 'Long',
      role: 'Phó chủ nhiệm - Nguyễn Đức Hoàng Long',
      facebook: 'https://www.facebook.com/profile.php?id=100011751381333',
      instagram: '',
      img: long
    },
    {
      Name: 'Thao',
      role: 'Phó chủ nhiệm - Phạm Ngọc Phương Thảo',
      facebook: 'https://www.facebook.com/pnpt.23',
      instagram: '',
      img: thao
    }
  ]
  // [
  //   //Array 2
  //   {
  //     Name: 'Lyanola',
  //     role: 'Organizer',
  //     github: '',
  //     linkedin: '',
  //     img: lyin
  //   },
  //   {
  //     Name: 'Zoheb',
  //     role: 'Organizer',
  //     github: '',
  //     linkedin: '',
  //     img: zoha
  //   }
  // ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Thanh',
      role: 'Nguyễn Văn Thành - Technical Partner',
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
  [{src: uet}, {src: heart}, {src: passion}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'PC có bao nhiêu ban?',
        content:
          'Nhà [P] chúng mình gồm có các ban: chuyên môn , vũ đạo, truyền thông & tổ chức sự kiện'
      },
      {
        label: 'Ai có thể đăng ký trở thành PCer tiếp theo?',
        content:
          'Tất cả các bạn sinh viên có niềm đam mê nghệ thuật trong và ngoài UET'
      },
      {
        label:
          'Mình không giỏi về đàn hát lắm, liệu mình có thể apply được không?',
        content:
          'Đừng lo lắng, PC ngoài ban chuyên môn ra còn có ban vũ đạo, truyền thông và tổ chức sự kiện dành cho những bạn có thế mạnh riêng. Nhưng nếu bạn vẫn muốn apply vào ban chuyên môn thì hãy chuẩn bị và luyện tập thật kỹ càng để casting thật tốt nhé'
      },
      {
        label: 'Đôi nét về lịch sử PC',
        content:
          'PC được thành lập vào 25/3/2013, bởi thầy Nguyễn Hà Thanh - giảng viên UET - VNU.'
      }
    ],
    [
      {
        label: 'Vào PC có được phát ny không?',
        content: 'Tất nhiên rồi, tại sao lại không chứ'
      },
      {
        label: 'Hằng năm PC tổ chức những sự kiện gì?',
        content:
          'Chúng mình sẽ tổ chức các show, du ca, hola show, sinh nhật, cuộc thi âm nhạc, picnic, thu âm và quay MV.'
      },
      {
        label: 'Mình lo lắng không cân bằng được việc học & hoạt động CLB',
        content:
          'Vào PC, các thành viên sẽ hướng dẫn bạn tạo 1 thời gian biểu để vừa đảm bảo được chất lượng học tập cũng như hoạt động ngoại khóa'
      },
      {
        label: 'Mình sẽ được training chứ?',
        content: 'Các ban của CLB sẽ mở các khóa training dành cho thành viên'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  NEXT_SECTION,
  THEN_SECTION,
  ADD_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
