import mua from './Assets/team10/4mua.png';
import hola from './Assets/team10/Gen9hola.png';
import rococo from './Assets/team10/rococo.png';
import online from './Assets/team10/tuyenquanonline.png';

import hong from './Assets/team10/chau.png';
import duc from './Assets/team10/duc.png';
import duong from './Assets/team10/duong.png';

const TUYEN_QUAN = {
  TITLE: 'Lần đầu làm chuyện ấy...',
  LONG_DESCRIPTION:
    'Lần đầu tiên, PC chúng mình tổ chức sự kiện tuyển quân online. Và Gen10 đã ra đời như vậy đó. Một kỳ recruit đặc biệt và cũng đầy cảm xúc, lần đầu tiên được nghe giọng hát, tiếng đàn của các bạn qua video, lần đầu tiên tổ chức các trò chơi trên các nền tảng họp trực tuyến. Rất nhiều ký ức đáng trân trọng đã bắt đầu từ cái lần "đầu tiên" ấy...',
  LOGO: online
};

const TUA_RADIO = {
  TITLE: 'Tựa...',
  LONG_DESCRIPTION:
    'Có phải hôm nay cậu mệt lắm không? Ngồi xuống tựa vào PC và kể cho chúng mình nghe nhé! Thế giới khắc nghiệt như vậy, có lẽ đôi khi chúng ta cũng cần được trò chuyện, có những muộn phiền, những bức bối, âu lo hay những vấn đề trong cuộc sống cần được giãi bày. Vì vậy mà chúng mình mang đến một chương trình radio có tên “TỰA” với hy vọng giúp bạn giải quyết những vấn đề khó khăn, có những cái nhìn lạc quan, tích cực hơn trong cuộc sống, hay chỉ đơn giản là giúp bạn cảm thấy được lắng nghe, giải tỏa những bức bối trong lòng. '
};

const LIVE_SHOW = {
  TITLE: '"Lặng" trong "Bốn mùa"',
  LONG_DESCRIPTION:
    'Đúng như cái tên “Lặng” và "Bốn mùa", 2 đêm nhạc của chúng mình là sự kết hợp phá cách vừa độc đáo lại vừa hài hòa với những khúc ca ballad dịu dàng, như ủi an, như vuốt ve tâm hồn thính giả sau một ngày dài đầy mệt mỏi. Buổi tối cuối tuần, hãy dành chút thời gian bên ly cà phê, tán gẫu với những người bạn thân thiết và cùng nhau thưởng thức âm nhạc của PC nhé. ',
  LOGO: mua
};

const ROCOCO = {
  TITLE: 'Thổi nến cùng PC nhé...',
  LONG_DESCRIPTION:
    'Sau tất cả, buổi tiệc ấm cúng đánh dấu sự trưởng thành với chặng đường 9 năm thành lập, phát triển của CLB Nghệ thuật Trường ĐH Công nghệ - Passion Club tối Chủ nhật vừa qua đã chính thức khép lại. Qua buổi tiệc, chúng ta đã được ôn lại những câu chuyện cũ, những kỉ niệm khó có thể nào quên cùng những người anh, người chị và bạn bè, tận hưởng không khí âm nhạc với giai điệu nhẹ nhàng, sâu lắng và hoài niệm về chặng đường 9 năm đã qua của PC.',
  LOGO: rococo
};

const HOLA = {
  TITLE: 'Nơi tình yêu bắt đầu',
  LONG_DESCRIPTION:
    'Chuyến đi quân sự đáng nhớ của các “chiến sĩ” PC tại Hòa lạc. “Hola - Nơi tình yêu bắt đầu” không phải chỉ nói đến tình yêu đôi lứa mà ở đây còn là sự khởi đầu của tình đồng chí, đồng đội, tình bạn trong sáng. Hai tuần là khoảng thời gian không ngắn cũng chẳng dài, đủ để lưu giữ những kỉ niệm đẹp trong mỗi UETers.',
  LOGO: hola
};

const BoardOfDirectors = [
  [
    //Array 1
    {
      Name: 'Duc',
      role: 'Chủ nhiệm - Đào Văn Đức ',
      facebook: 'https://www.facebook.com/d4lic',
      instagram: '',
      img: duc
    },
    {
      Name: 'Hong',
      role: 'Phó chủ nhiệm - Phùng Thị Thúy Hồng',
      facebook: 'https://www.facebook.com/ptthdc',
      instagram: '',
      img: hong
    },
    {
      Name: 'Duong',
      role: 'Phó chủ nhiệm - Đỗ Thị Ánh Dương',
      facebook: 'https://www.facebook.com/dtad105',
      instagram: '',
      img: duong
    }
  ]
];

export {TUYEN_QUAN, TUA_RADIO, LIVE_SHOW, ROCOCO, HOLA, BoardOfDirectors};
