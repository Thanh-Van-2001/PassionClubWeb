import du from './Assets/team7/dulich.png';
import hola from './Assets/team7/hola.png';
import sn from './Assets/team7/sn.png';
import recruit from './Assets/team7/tuyenquan.png';

import aquynh from './Assets/team7/aQuynh.png';
import thang from './Assets/team7/aThang.png';
import cquynh from './Assets/team7/cQuynh.png';

const GOT_TALENT = {
  TITLE: 'Mưa phi trường',
  LONG_DESCRIPTION:
    'Nhiệm kỳ 2018 - 2019 khởi đầu bằng sự kiện PCBand tiến vào chung kết VNU Got Talents. Các thành viên PC đã biểu diễn tiết mục cover bài hát "Mưa phi trường" và nhận được sự ủng hộ nhiệt tình của khán giả cũng như đánh giá cao đến từ ban giám khảo. Hy vọng rằng trong thời gian sắp tới, Passion Club sẽ tích cực tham gia thêm thật nhiều cuộc thi âm nhạc và nghệ thuật.'
};

const TUYEN_QUAN = {
  TITLE: 'Chào đón Gen7🌸',
  LONG_DESCRIPTION:
    'Vậy là một mùa tuyển quân mới lại bắt đầu. CLB đang tất bật chuẩn bị để có thể chào đón các thành viên mới. PC chúng mình rất mong chờ các bạn sinh viên có niềm đam mê, yêu thích âm nhạc, nghệ thuật sẽ tham gia đăng ký ứng tuyển để có cơ hội trở thành một phần của đại gia đình chúng mình.',
  LOGO: recruit
};

const HOLA = {
  TITLE: 'Lên Hòa Lạc thôi🎻',
  LONG_DESCRIPTION:
    'Chuyến đi quân sự đáng nhớ của các “chiến sĩ” PC tại Hòa lạc. “Hola - Nơi tình yêu bắt đầu” không phải chỉ nói đến tình yêu đôi lứa mà ở đây còn là sự khởi đầu của tình đồng chí, đồng đội, tình bạn trong sáng. Hai tuần là khoảng thời gian không ngắn cũng chẳng dài, đủ để lưu giữ những kỉ niệm đẹp trong mỗi UETers.',
  LOGO: hola
};

const DU_LICH = {
  TITLE: 'Tam Đảo here we go',
  LONG_DESCRIPTION:
    'Một chuyến đi dã ngoại đầy thú vị, hấp dẫn và đầy ý nghĩa. Chuyến đi này không chỉ là một chuyến đi dã ngoại mà còn là một chuyến đi để tìm lại bản thân, để tìm lại những giá trị quý giá của cuộc sống. Chúng mình hy vọng rằng những kỉ niệm đẹp, những trải nghiệm mới mẻ sẽ giúp các bạn có thêm nhiều điều để chia sẻ, để trao đổi với nhau.',
  LOGO: du
};

const CONTEST = {
  TITLE: 'PC cover season 2',
  LONG_DESCRIPTION:
    'Tiếp nối thành công của PC cover season 1, Passion Club chính thức phát động music contest "PC cover season 2". Cuộc thi được mở ra cho toàn bộ các bạn sinh viên yêu âm nhạc trên toàn quốc, với mục tiêu tạo ra sân chơi để các bạn trẻ có thể thỏa sức sáng tạo và đam mê của bản thân.'
};

const SINH_NHAT = {
  TITLE: 'Tuổi mới🎂',
  LONG_DESCRIPTION:
    'Cứ mỗi dịp 25/3 hàng năm, các thế hệ PC lại tề tựu để cùng tham dự buổi tiệc sinh nhật ấm áp của CLB. Năm nay, chúng mình đã tổ chức 1 bữa tiệc sinh nhật đặc biệt với chủ đề "Rhythm", kết hợp với liveshow tại Tre Coffee, mang tới cho các thành viên cũng như khách mời một không gian thoải mái, đề cùng hoài niệm về hành trình đã qua của CLB, cũng như những dự định mới trong tương lai.',
  LOGO: sn
};

const BoardOfDirectors = [
  [
    //Array 1
    {
      Name: 'Thang',
      role: 'Chủ nhiệm - Trần Mạnh Thắng',
      facebook: 'https://www.facebook.com/thang.ceo.legendteam',
      instagram: '',
      img: thang
    },
    {
      Name: 'Quynh',
      role: 'Phó chủ nhiệm - Nguyễn Hương Quỳnh',
      facebook: 'https://www.facebook.com/profile.php?id=100027277850661',
      instagram: '',
      img: cquynh
    },
    {
      Name: 'Manh',
      role: 'Phó chủ nhiệm - Tạ Văn Quỳnh',
      facebook: 'https://www.facebook.com/TaVanQuynh.BBG',
      instagram: '',
      img: aquynh
    }
  ]
];

export {
  GOT_TALENT,
  TUYEN_QUAN,
  CONTEST,
  DU_LICH,
  SINH_NHAT,
  HOLA,
  BoardOfDirectors
};
