import axios from "axios";
import { useState, useEffect } from "react";
import TourItem from "./tourItem";

const TourList = () => {
    const key = "wZeUZ%2FgZ5NhsFo0K8jkOXzFSj7EGpzIcpkyrin3fjDAj3G1Zx87yjwq8UvfcP2rM%2B9tHF%2FOYfERVHUZXWpz2gw%3D%3D"
    const [tour, setTour] = useState([]);

    useEffect (() => {
        // 비동기 작업시 사용하는 키워드
        // async
        // await
        const tourData = async () => {
            // try, catch
            // 에러가 발생할 때 스크립트 중단, 콘솔에 출력
            // 에러가 없다면 try안에 코드 실행
            // 에러가 있다면 catch값으로 넘어감
            try {
                const response = await axios.get(`http://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=${key}&numOfRows=10&pageNo=1&resultType=json`)
                setTour(response.data.getAttractionKr.item)
            } catch(error) {
                console.log(error)
            }
        };

        tourData();
    }, []);

    return (
        <div className="list">
            <div className="list_rec">
                <div className="item_rec">부</div>
                <div className="item_rec"><figure><img src="img/seagull.png" alt="갈매기" /></figure></div>
                <div className="item_rec">산</div>
                <div className="item_rec"></div>
                <div className="item_rec"></div>
                <div className="item_rec">명</div>
                <div className="item_rec"><figure><img src="img/beach.png" alt="해변" /></figure></div>
                <div className="item_rec">소</div>
            </div> {/* .list_rec end */}

            <div className="main_list">
                {tour.map((tourMap) => (
                    <TourItem article={tourMap} />
                ))}
            </div> {/* .main_list end */}

        </div> /* .list end */
    )

}

export default TourList;