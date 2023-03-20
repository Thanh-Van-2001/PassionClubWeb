import show from './Assets/team8/7pm.png';
import duca from './Assets/team8/du ca.png';
import hola from './Assets/team8/hola.png';
import human from './Assets/team8/human of pc.png';
import sn from './Assets/team8/sinhnhat.png';
import recruit from './Assets/team8/talkshow.png';
import thu from './Assets/team8/thu am.png';

import dung from './Assets/team8/aDung.png';
import anh from './Assets/team8/aDuyAnh.png';
import manh from './Assets/team8/aManh.png';
import vu from './Assets/team8/aVu.png';
import tien from './Assets/team8/cTien.png';

const BAMI_BER = {
  TITLE: 'Bamib3r🥖',
  LONG_DESCRIPTION:
    'Sự ra đời của Band Bamib3r đánh dấu sự chuyển mình mạnh mẽ của PC, khi giờ đây tất cả các thành viên của Ban chủ nhiệm đều là sinh viên năm 2, cùng với việc tái cơ cấu và tổ chức lại bộ máy CLB. Bên cạnh đó, CLB cũng hướng tới việc thành lập các Band nhạc, được phân chia theo các cấp độ phù hợp với năng lực chuyên môn của thành viên, với cấp cao nhất là loại A - những band nhạc mũi nhọn, có thể đại diện cho CLB trình diễn tại các sân khấu lớn.'
};

const TUYEN_QUAN = {
  TITLE: 'PC talk show🎙️',
  LONG_DESCRIPTION:
    'Song song chiến dịch tuyển thành viên, năm nay PC còn tổ chức talkshow dành riêng cho các bạn sinh viên năm nhất và năm hai và liveshow chào mừng Gen 8 PCoustic. Nội dung của talkshow là những câu chuyện của các anh chị khóa trước, những người đã trải qua sự khó khăn trong việc cân bằng giữa học tập, làm việc và sinh hoạt ngoại khóa. Buổi talkshow đã thu hút được đông đảo sự quan tâm của các bạn sinh viên trong và ngoài UET.',
  LOGO: recruit
};

const LIVE_SHOW = {
  TITLE: '7pm ☕',
  LONG_DESCRIPTION:
    '7pm chính là liveshow chúng mình hợp tác với SGC - CLB Guitar sinh viên. Không những vậy, khách mời đặc biệt của 7pm chính là anh Văn Thọ - Nghệ nhân sao trúc nối tiếng. Sự kiện đã tạo nên một không gian thoải mái, nhẹ nhàng, đầy ấm áp cho các bạn sinh viên yêu âm nhạc cũng như thắt chặt mối quan hệ giữa 2 CLB.',
  LOGO: show
};

const DU_CA = {
  TITLE: 'Phố đã lên đèn🏮',
  LONG_DESCRIPTION:
    'Du ca Phố đi bộ luôn là một đặc sản của mọi CLB Nghệ thuật, và năm nay, PC chúng mình đã hợp tác với CLB Guitar trường ĐH Mỏ - HGGC để tổ chức một buổi du ca cho thành viên của cả 2 CLB. Sự kiện đã thu hút đông đảo sự quan tâm của người dân trên phố cũng như làm tăng sự gắn kết mật thiết của HGGC và PC.',
  LOGO: duca
};

const HOLA = {
  TITLE: 'Lên Hòa Lạc thôi🎻',
  LONG_DESCRIPTION:
    'Chuyến đi quân sự đáng nhớ của các “chiến sĩ” PC tại Hòa lạc. “Hola - Nơi tình yêu bắt đầu” không phải chỉ nói đến tình yêu đôi lứa mà ở đây còn là sự khởi đầu của tình đồng chí, đồng đội, tình bạn trong sáng. Hai tuần là khoảng thời gian không ngắn cũng chẳng dài, đủ để lưu giữ những kỉ niệm đẹp trong mỗi UETers.',
  LOGO: hola
};

const THU_AM = {
  TITLE: 'PCs Saturday📻',
  LONG_DESCRIPTION:
    'Một series các bài hát được thu âm kỹ càng và chỉnh chu được các band của PC chúng mình thực hiện. Mỗi ca khúc sẽ kể một câu chuyện riêng của tuổi thanh xuân, những kỷ niệm đẹp, những cảm xúc đầy ấm áp. Hãy cùng chúng mình đón xem những ca khúc được đăng tải trên fanpage của Passion Club vào mỗi tối thứ 7 hàng tuần nhé.',
  LOGO: thu
};

const HUMAN = {
  TITLE: 'PC kể chuyện📽️',
  LONG_DESCRIPTION:
    'Humans of PC sẽ kể những câu chuyện về các ban, về những thành viên đầy nhiệt huyết và năng động của nhà [P]. Mỗi câu chuyện sẽ mang một sắc thái, một cảm xúc riêng, nhưng đều có một điểm chung là đề cao sự đoàn kết, sự hòa hợp, sự tôn trọng và sự yêu thương của một đội ngũ đầy nhiệt huyết và năng động.',
  LOGO: human
};

const SINH_NHAT = {
  TITLE: 'Tuổi mới🎂',
  LONG_DESCRIPTION:
    'Cứ mỗi dịp 25/3 hàng năm, các thế hệ PC lại tề tựu để cùng tham dự buổi tiệc sinh nhật ấm áp của CLB. Năm nay, chúng mình đã tổ chức 1 bữa tiệc sinh nhật đặc biệt với chủ đề "Convergence", kết hợp với liveshow tại Gemini Coffee, mang tới cho các thành viên cũng như khách mời một không gian thoải mái, đề cùng hoài niệm về hành trình đã qua của CLB, cũng như những dự định mới trong tương lai.',
  LOGO: sn
};

const BoardOfDirectors = [
  [
    //Array 1
    {
      Name: 'Vu',
      role: 'Chủ nhiệm - Vũ Hữu Hải Vũ',
      facebook: 'https://www.facebook.com/vuhuuhaivu992000',
      instagram: '',
      img: vu
    },
    {
      Name: 'Dung',
      role: 'Phó chủ nhiệm - Nguyễn Mạnh Dũng',
      facebook: 'https://www.facebook.com/nmd2000',
      instagram: '',
      img: dung
    },
    {
      Name: 'Manh',
      role: 'Phó chủ nhiệm - Bùi Xuân Mạnh',
      facebook: 'https://www.facebook.com/alexandermanhbovo',
      instagram: '',
      img: manh
    }
  ],
  [
    //Array 2
    {
      Name: 'Tien',
      role: 'Cựu phó chủ nhiệm - Chu Thủy Tiên',
      facebook: 'https://www.facebook.com/tengg.tengg',
      instagram: '',
      img: tien
    },
    {
      Name: 'Anh',
      role: 'Cựu phó chủ nhiệm - Vũ Duy Anh',
      facebook: 'https://www.facebook.com/biusnotbiuf',
      instagram: '',
      img: anh
    }
  ]
];

export {
  BAMI_BER,
  TUYEN_QUAN,
  LIVE_SHOW,
  DU_CA,
  SINH_NHAT,
  HUMAN,
  THU_AM,
  HOLA,
  BoardOfDirectors
};
