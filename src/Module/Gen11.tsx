import gen11 from './Assets/team11/Gen11.png';
import hola from './Assets/team11/hola.png';
import live from './Assets/team11/live show.png';
import prize from './Assets/team11/prize.png';
import vong3 from './Assets/vong3.png';

import hieu from './Assets/team11/Hieu.png';
import long from './Assets/team11/Long.png';
import thao from './Assets/team11/Thao.png';

const TUYEN_QUAN = {
  TITLE: 'Welcome home...',
  LONG_DESCRIPTION:
    'Sau 3 vòng tuyển chọn, năm nay đại gia đình PC chào đón các thành viên mới với số lượng lớn chưa từng thấy. Một thế hệ mới, tràn đầy nhiệt huyết và sáng tạo, hứa hẹn sẽ góp phần to lớn vào sự phát triển của CLB. Passion Club đã tổ chức 1 buổi teambuilding ấm áp, là lời chào dành cho những mảnh ghép mới của đại gia đình âm nhạc.',
  LOGO: gen11
};

const CON_TEST = {
  TITLE: 'Nhà leo núi đích thực',
  LONG_DESCRIPTION:
    'Song song các hoạt động nội bộ, Passion Club còn tích cực tham gia các cuộc thi âm nhạc, vũ đạo được tổ chức trong và ngoài trường. Trong năm vừa qua, PC đã vinh dự đạt giải nhất phần thi văn nghệ UET-Clubday, giải nhì hội thi dân vũ VNU và lọt vào chung kết VNU got talents. Đây là những thành tích đáng tự hào và hứa hẹn trong thời gian sắp tới, CLB sẽ tiếp tục phát huy và đạt được nhiều giải thưởng hơn nữa.',
  LOGO: prize
};

const LIVE_SHOW = {
  TITLE: 'Live show: Redamancy',
  LONG_DESCRIPTION:
    'Show ca nhạc là một trong những món ăn tinh thần không thể thiếu của một CLB Nghệ thuật. Tháng 1 vừa qua, Gen11 đã tổ chức thành công minishow "Redamancy", một đêm nhạc ngọt ngào, đong đầy và yêu thương, với sự tham gia của tất cả các thành viên CLB. Hãy cùng chúng mình đón chờ những show ca nhạc tiếp theo của PC nhé!',
  LOGO: live
};

const HOLA = {
  TITLE: 'Hola - Halo',
  LONG_DESCRIPTION:
    'Trong thời gian Gen11 làm minishow Redamancy, các thành viên Gen10 đã lên Hola để học Giáo dục quốc phòng. Đây cũng là cơ hội để cho các thành viên được gắn kết với nhau hơn sau 1 thời gian dài hoạt động online do dịch bệnh. Ở nơi được mệnh danh là "Nơi tình yêu bắt đầu" các PCer đã tổ chức nhiều hoạt động sôi nổi như du ca, Hola Show hay tham gia văn nghệ trong Đêm gala.',
  LOGO: hola
};
const LIVE_SESSION = {
  TITLE: 'Series: PC’s live session',
  LONG_DESCRIPTION:
    'PC’s Live Session là chuỗi Video/MV cover được thực hiện bởi chính các thành viên thuộc Passion Club với mong muốn đem đến cho các bạn khán giả những phút giây thư giãn, một chút động lực xua tan mệt mỏi để bắt đầu một tuần mới thật bùng nổ. Video sẽ được đăng tải vào mỗi tối thứ 7 hàng tuần vào lúc 20h30 trên Fanpage Facebook, kênh Youtube và Tiktok của Passion Club. ',
  LOGO: vong3
};

const LITTLE_THINGS = {
  TITLE: 'Một đại gia đình',
  LONG_DESCRIPTION:
    'Không chỉ năng động trong các sự kiện, PC còn luôn quan tâm tới các thành viên của CLB, có thể kể đến các hoạt động nội bộ như Giáng sinh, 14/2, 8/3,...Những sự kiện ấm áp như vậy giúp các thành viên càng thêm gắn kết, trở thành một tập thể đoàn kết, luôn yêu thương và hỗ trợ nhau.',
  LOGO: vong3
};

const BoardOfDirectors = [
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
];
export {
  TUYEN_QUAN,
  CON_TEST,
  LIVE_SHOW,
  LIVE_SESSION,
  LITTLE_THINGS,
  HOLA,
  BoardOfDirectors
};
