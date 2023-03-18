import duca from './Assets/team9/duca.png';
import picnic from './Assets/team9/picnic.png';
import show from './Assets/team9/show noi bo.png';
import sn from './Assets/team9/sn.png';
import recruit from './Assets/team9/tuyen quan.png';
import online from './Assets/team9/vethica.png';

import kien from './Assets/team9/kien.png';
import thanh from './Assets/team9/Thanh.png';

const VE_THI_CA = {
  TITLE: 'Bùng cháy🔥',
  LONG_DESCRIPTION:
    'Nhiệm kỳ thứ 9 của chúng mình bắt đầu với sự hợp tác giữa PC và Chủ Động Skydio để tổ chức cuộc thi âm nhạc giữa các CLB Nghệ Thuật sinh viên trên địa bàn thành phố Hà Nội. Cuộc thi có sự tham gia của các CLB lớn tên tuổi như FGC-FTU, CGC-TMU, HGGC-Đại học Mỏ, AC-SOL, cùng nhiều các band nhạc sinh viên nổi tiếng tham gia với vai trò khách mời như Purple Berry, Ezpain,...Cuộc thi không chỉ tạo sân chơi cho các band nhạc bùng cháy trên sân khấu mà còn đưa các CLB lại gần nhau hơn, góp phần tạo nên một cộng đồng sinh viên năng động và sáng tạo.',
  LOGO: online
};

const TUYEN_QUAN = {
  TITLE: 'Anh tài hội tụ🎉',
  LONG_DESCRIPTION:
    'Sau sự thành công của cuộc thi Vethica, PC bước vào đợt tuyển quân lần thứ 9, với chủ đề - We need talents. Trải qua 3 vòng thi đầy chông gai và thử thách, hơn 70 ứng viên xuất sắc đã chính thức trở thành những mảnh ghép tiếp theo của đại gia đình nhà [P], hứa hẹn một thế hệ mới năng động, nhiệt huyết và sáng tạo, tạo nên luồng sinh khí mới cho CLB.',
  LOGO: recruit
};

const LIVE_SHOW = {
  TITLE: 'Show tập huấn🎸',
  LONG_DESCRIPTION:
    'Để nâng cao khả năng chuyên môn của các thành viên, Ban chủ nhiệm đã tổ chức một buổi show nội bộ để các band có thể thể hiện tài năng của mình, đồng thời cũng đưa ra các góp ý, nhận xét để các band có thể hoàn thiện hơn trong các buổi show sắp tới. LiveShow được tổ chức tại Xóm Cà Phê, với sự tham gia của 10 band và rất nhiều các anh chị cựu thành viên.',
  LOGO: show
};

const DU_CA = {
  TITLE: 'Phố đã lên đèn🏮',
  LONG_DESCRIPTION:
    'Du ca Phố đi bộ luôn là một đặc sản của mọi CLB Nghệ thuật, và năm nay, PC chúng mình đã hợp tác với CLB Âm nhạc trường ĐH Kinh tế - ĐHQGHN - SOS để tổ chức một buổi du ca cho thành viên của cả 2 CLB. Sự kiện đã thu hút đông đảo sự quan tâm của người dân trên phố cũng như làm tăng sự gắn kết mật thiết của SOS và PC.',
  LOGO: duca
};

const PIC_NIC = {
  TITLE: 'Trở về với thiên nhiên',
  LONG_DESCRIPTION:
    'Tháng 1 đánh dấu bằng chuyến đi du lịch đáng nhớ của chúng mình tới Bản Rõm, nhằm gắn kết giữa các thế hệ trong CLB, từ nóc nhà đến chân nhà, từ những chú "gà tơ" cho tới các bậc "già gân". Các thành viên có cơ hội được tổ chức cắm trại, chơi game, thưởng thức các món ăn ngon, và có thể thư giãn trong thiên nhiên xanh mát.',
  LOGO: picnic
};

const TANT = {
  TITLE: 'PC on the MIC🎙️',
  LONG_DESCRIPTION:
    'Tiếp nối sự thành công của PC cover mùa 1 và mùa 2, vào mùa xuân năm nay, PC chúng mình chính thức phát động cuộc thi âm nhạc "Thanh âm ngày Tết", với chủ đề "Đa sắc". Cuộc thi được tổ chức trên quy mô toàn quốc và đã nhận được hơn 200 video gửi về từ khắp nơi trên Việt Nam. Cuộc thi đã mang đến cho các bạn học sinh sinh viên một cơ hội để thể hiện tài năng của mình, cũng như là một cơ hội để các bạn có thể gặp gỡ và kết nối với những người có cùng sở thích.'
};

const LODESTAR = {
  TITLE: 'Tuổi mới🎂',
  LONG_DESCRIPTION:
    'Cứ mỗi dịp 25/3 hàng năm, các thế hệ PC lại tề tựu để cùng tham dự buổi tiệc sinh nhật ấm áp của CLB. Năm nay, chúng mình đã tổ chức 1 bữa tiệc sinh nhật đặc biệt với chủ đề "LodeStar", kết hợp với liveshow tại Harley the Coffee, mang tới cho các thành viên cũng như khách mời một không gian thoải mái, đề cùng hoài niệm về hành trình đã qua của CLB, cũng như những dự định mới trong tương lai.',
  LOGO: sn
};

const BoardOfDirectors = [
  [
    //Array 1
    {
      Name: 'Kien',
      role: 'Chủ nhiệm - Đặng Trung Kiên',
      facebook: 'https://www.facebook.com/dtkien182',
      instagram: '',
      img: kien
    },
    {
      Name: 'Thanh',
      role: 'Phó chủ nhiệm - Nguyễn Văn Thành',
      facebook: 'https://www.facebook.com/felicenguyen2001/',
      instagram: '',
      img: thanh
    }
  ]
];

export {
  VE_THI_CA,
  TUYEN_QUAN,
  LIVE_SHOW,
  DU_CA,
  TANT,
  LODESTAR,
  PIC_NIC,
  BoardOfDirectors
};
