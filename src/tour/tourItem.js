// 정보입력

const TourItem = ({ article }) => {
  const {
    MAIN_TITLE /* 콘텐츠명 */,
    TITLE /* 제목 */,
    GUGUN_NM /* 구군 */,
    HOMEPAGE_URL /* 홈페이지 */,
    MAIN_IMG_NORMAL /* 이미지 URL */,
    ADDR1 /* 주소 */,
  } = article;

  // line.forEach(item => {
  //     item.style.display = 'block'
  // });
  const myClick = () => {
    let my = document.querySelectorAll(".my");
    let line = document.querySelectorAll(".line");
    let fill = document.querySelectorAll(".fill");

    line.forEach((item) => {
      item.style.display = "block";
    });

    for (let i = 0; i < my.length; i++) {
      // my[i].onclick = function(){
      //     if (line[i].style.display === 'block') {
      //       line[i].style.display = 'none';
      //       fill[i].style.display = 'block';
      //     } else {
      //       line[i].style.display = 'block';
      //       fill[i].style.display = 'none';
      //     };
      //   };
      my[i].onclick = () => {
        if (line[i].style.display === "none") {
          line[i].style.display = "block";
          fill[i].style.display = "none";
        } else {
          line[i].style.display = "none";
          fill[i].style.display = "block";
        }
      };
    }
  };

  return (
    <div className="item">
      <div className="inner">
        <div className="title">
          <span>{GUGUN_NM}</span>
          <div className="my" onClick={myClick}>
            <span>MY</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="line"
            >
              <path
                d="M11.322 2.923C11.448 2.664 11.712 2.5 12 2.5C12.289 2.5 12.552 2.664 12.678 2.923C13.652 4.921 15.328 8.363 15.328 8.363C15.328 8.363 19.139 8.887 21.35 9.192C21.753 9.247 22 9.588 22 9.939C22 10.129 21.928 10.322 21.769 10.475C20.159 12.013 17.387 14.666 17.387 14.666C17.387 14.666 18.064 18.433 18.456 20.618C18.539 21.08 18.181 21.5 17.714 21.5C17.592 21.5 17.47 21.471 17.359 21.411C15.391 20.363 12 18.56 12 18.56C12 18.56 8.609 20.363 6.641 21.411C6.53 21.471 6.407 21.5 6.285 21.5C5.82 21.5 5.46 21.079 5.544 20.618C5.937 18.433 6.614 14.666 6.614 14.666C6.614 14.666 3.841 12.013 2.232 10.475C2.072 10.322 2 10.129 2 9.94C2 9.588 2.249 9.246 2.651 9.192C4.862 8.887 8.672 8.363 8.672 8.363C8.672 8.363 10.349 4.921 11.322 2.923ZM12 4.956L9.639 9.748L4.393 10.467L8.241 14.11L7.293 19.365L12 16.86L16.707 19.365L15.756 14.129L19.607 10.467L14.293 9.711L12 4.956Z"
                fill="#FF6347"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill"
            >
              <path
                d="M11.322 2.923C11.448 2.664 11.712 2.5 12 2.5C12.289 2.5 12.552 2.664 12.678 2.923C13.652 4.921 15.328 8.363 15.328 8.363C15.328 8.363 19.139 8.887 21.35 9.192C21.753 9.247 22 9.588 22 9.939C22 10.129 21.928 10.322 21.769 10.475C20.159 12.013 17.387 14.666 17.387 14.666C17.387 14.666 18.064 18.433 18.456 20.618C18.539 21.08 18.181 21.5 17.714 21.5C17.592 21.5 17.47 21.471 17.359 21.411C15.391 20.363 12 18.56 12 18.56C12 18.56 8.609 20.363 6.641 21.411C6.53 21.471 6.407 21.5 6.285 21.5C5.82 21.5 5.46 21.079 5.544 20.618C5.937 18.433 6.614 14.666 6.614 14.666C6.614 14.666 3.841 12.013 2.232 10.475C2.072 10.322 2 10.129 2 9.94C2 9.588 2.249 9.246 2.651 9.192C4.862 8.887 8.672 8.363 8.672 8.363C8.672 8.363 10.349 4.921 11.322 2.923Z"
                fill="#FF6347"
              />
            </svg>
          </div>{" "}
          {/* .my end */}
        </div>{" "}
        {/* .title end */}
        <h4>{MAIN_TITLE}</h4>
        <figure>
          <img src={MAIN_IMG_NORMAL} alt={MAIN_TITLE} />
        </figure>
        <div className="text">
          <h5>{TITLE}</h5>
          <p>{ADDR1}</p>
          {/* noreferrer : 해당페이지로 넘어가기 위해 http에게 요청함 */}
          {HOMEPAGE_URL && (
            <a href={HOMEPAGE_URL} target="_blank" rel="noreferrer">
              홈페이지
            </a>
          )}
        </div>{" "}
        {/* .text end */}
      </div>
      {/* .inner end */}
    </div> /* .item end */
  );
};

export default TourItem;
