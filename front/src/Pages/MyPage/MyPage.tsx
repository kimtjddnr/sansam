import { useEffect, useState } from "react";
import Navbar from "../../Common/Navbar/Navbar";
import axios from "axios";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding-left: 20vw;
  padding-right: 12vw;
  font-family: "GmarketSansLight";
`;

const ReviewCard = styled.div`
  border: 1px solid #238c47;
  border-radius: 8px;
  padding-left: 5vw;
  margin-bottom: 2vw;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    left: -48px;
    top: 50%;
    transform: translateY(-50%);
    width: 3vw;
    height: 3vw;
    border: 5px solid #238c47;
    border-radius: 100%;
    background-color: #238c47;
    opacity: 0.5;
  }
`;

interface courseInfo {
  courseNo?: number;
  courseMtNm?: string;
  courseMtCd?: number;
  courseMtNo?: number;
  courseXCoords?: Array<number>;
  courseYCoords?: Array<number>;
  courseAbsDiff?: string;
  courseUptime?: number;
  courseDowntime?: number;
  courseLength?: number;
  courseLocation?: string;
  reviewDate?: Date;
  reviewTime?: number;
  reviewContent?: string;
}

function MyPage() {
  const accessToken = sessionStorage.getItem("accessToken");
  const refreshToken = sessionStorage.getItem("refreshToken");
  const [reviewCourses, setReviewCourses] = useState<courseInfo[]>([{}]);

  useEffect(() => {
    const getReviewCourse = async () => {
      const res = await axios.get("http://localhost:5000/user/review", {
        headers: {
          "X-ACCESS-TOKEN": accessToken,
          "X-REFRESH-TOKEN": refreshToken,
        },
      });
      console.log(res);
      setReviewCourses(res.data.reviewCourses);
    };
    getReviewCourse();
  }, []);

  console.log(reviewCourses);

  return (
    <div className="MyPage">
      <Navbar />
      <h1>MyPage</h1>
      <StyledDiv>
        <div>
          {reviewCourses.map(review => (
            <ReviewCard key={review.courseNo}>
              <h3>{review.reviewDate?.toString()}</h3>
              <p>
                {review.courseMtNm} {review.courseMtNo}코스{" "}
                {review.courseAbsDiff == "H" ? (
                  <span>⭐⭐⭐</span>
                ) : review.courseAbsDiff == "N" ? (
                  <span>⭐⭐</span>
                ) : (
                  <span>⭐</span>
                )}
              </p>
              <p>소요시간 : {review.reviewTime}분</p>
              <p>{review.reviewContent}</p>
            </ReviewCard>
          ))}
        </div>
      </StyledDiv>
    </div>
  );
}

export default MyPage;
