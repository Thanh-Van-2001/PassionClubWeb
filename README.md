# Passion Club website 🎸

#### Demo view

https://user-images.githubusercontent.com/81580234/221159301-54828775-a238-4d24-bf9f-897fcd4a8619.mp4

**Our Club Page [click here](https://www.facebook.com/PCuet)**

Just change `src/Module/general.js` to get your portfolio. Customize and your sponsors, team-member and development team by adding images in `src/Module/Assets` . 

## [Prerequisites]()

- Node js : 8.1.0
- NPM : 8.1.0

## [Netlify configuration variables](https://docs.netlify.com/configure-builds/environment-variables/)

- CI: false
- NODE_VERSION: 8.1.0
- NPM : 8.1.0


---

## [Đôi lời của anh Thành gửi tới CLB]()
* 10 năm ròng rã, PC đã đi qua nhiều khó khăn và thử thách, nhưng với sự cố gắng và nỗ lực của các thành viên, CLB đã trưởng thành và phát triển vượt bậc ❤️

* Nhân dịp kỷ niệm sinh nhật lần thứ 10 của Passion Club, anh xin được gửi tới CLB một món quà tinh thần đặc biệt - 1 trang web dành riêng cho PC mình.

* Tại sao 1 CLB lại cần website? Bởi vì các thông tin trên các nền tảng mạng xã hội thường bị trôi và liên tục cập nhật bài đăng mới, giả sử một sinh viên muốn tìm hiểu về CLB sẽ không biết nên bắt đầu từ đâu để có thể nắm được các thông tin cần thiết về CLB. Website sẽ giải quyết tất cả các vấn đề đó, như cung cấp cho các bạn cái nhìn tổng quan về PC (lịch sử, hoạt động, FaQ,...)

* Đây cũng là mong muốn, dự định của nhiều thế hệ BCN, bản thân anh cũng là một thành viên của PC, anh nhận thấy rằng khi mình có khả năng để phát triển web cho CLB thì mình nên làm. Anh hy vọng rằng, đây sẽ là viên gạch đầu tiên, rồi sau đó cứ mỗi năm, các em lại tiếp tục đóng góp công sức của mình để web của CLB luôn được cập nhật, nhiều tính năng và đẹp mắt hơn. Các em cũng có thể coi đây là cơ hội để mình nâng cao khả năng lập trình, có thể giúp ích cho kinh nghiệm của các em.

* Chúc PC có một sinh nhật thật vui vẻ và ý nghĩa, chúc tất cả các thành viên sẽ luôn gắn bó, đoàn kết và tiếp tục xây dựng nên những thành công mới cho CLB. Happy birthday 🎂


## [Một số dự định phát triển tương lai]()
* Nút "tuyển thành viên" sẽ link đến page giới thiệu các vòng tuyển quân của CLB, trong page đó sẽ có 1 nút "đăng ký ngay" link tới gg form đăng ký. Tại sao lại không thiết kế form trong page đó luôn? (vì sau này nếu muốn chỉnh nội dung thì không phải ai cũng biết code, chỉ cần chỉnh trong gg form là được)
* Nút "kể chuyện PC" sẽ link tới câu chuyện - timeline các sự kiện trong năm của Gen mới nhất, cuối trang đó lại có 1 nút link đến Gen trước đó, cứ như thế cho tới Gen 1. Anh chỉ viết được từ gen 8 cho tới bây giờ thôi, các gen trước các em cần phải hỏi anh chị khóa trước nhé. Cái này cần thiết vì thành viên PC thì nên biết được lịch sử hoạt động của CLB, từ đó có cái nhìn tổng quan hơn về PC và định hướng phát triển tương lai.
* Tạo dịch vụ tài khoản cho các thành viên để có thể truy cập 1 số dịch vụ độc quyền như các khóa học âm nhạc, tài liệu học tập. Sẽ có trang profile riêng cho member (Cái này là tương lai xa, chưa cần thiết lắm). Sau này nếu có tính năng này thì cần làm BE để lưu trữ in4 của thành viên, nhà tài trợ,...
* Note: Lúc ae bắt đầu code thì a sẽ để repo thành private và mời mail các chú nhé, ae tạo branch riêng rồi code trên đó, cử ra 1 2 người code chắc tay để review và merge và master. Tầm khoảng gần tuyển quân mùa sau thì deploy web là ok. 


## [Getting Started]()

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need `Git` and `Node.js` (which comes with npm) installed on your computer.

```bash
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher

```

1. Clone the repo.

```bash
git clone https://github.com/Thanh-Van-2001/PassionClubWeb.git
```

2.Starting the Client application.

```bash
cd PassionClubWeb

# install all packages

yarn install

# start the server
yarn start
```

`This will start client app on localhost:3000`

## [Linking Portfolio to your Github]()

In order to deploy the website in github pages you need to set you few things.

Make sure you are on the root directory.

```bash
#remove the remote repository
git remote rm origin

git remote -v
```

1. Then create your [own repository on GitHub]() (don't initialise repo with README)
2. After creating the repository, copy the repo URL.

```bash
> git remote add origin "YOUR REPO URL"

# you should see your repo here
> git remote -v

# Now you can push/publish it to your own repository!
git push origin master

# Wolla! It’s committed to your GitHub repository.
```

If you are having any difficulties [click here](https://dev.to/dance2die/push-git-cloned-repository-to-your-own-on-github-1ili)



## [Technologies Used]()

<p>

<img src ="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>

<img src ="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

<img src ="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>

<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>

<img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"/>

</p>

- [React]()
- [Bootstrap]()
- [React Routers]()
- [Material UI]()


</table>
