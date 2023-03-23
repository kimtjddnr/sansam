import styled from "styled-components";
import { ItemInfo } from "../../store/mainSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const StyledH = styled.p`
  font-family: "GmarketSansLight";
  font-weight: bold;
  font-size: 4vw;
  text-align: left;
  margin-bottom: 5px;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const StyledSlide = styled(SwiperSlide)`
  width: 30vw;
  height: 22vw;
  background-color: #cfe2c8;
  border: none;
  border-radius: 5px;
`;

function ListItem({ courseName, userAge, userGender, courseList }: ItemInfo) {
  const url = "https://www.forest.go.kr/images/data/down/mountain/";

  return (
    <div className="ListItem">
      {userAge && userGender ? (
        <StyledH>
          {userAge}대 {userGender}분들이 선호하는 코스
        </StyledH>
      ) : (
        <StyledH>{courseName}</StyledH>
      )}

      <StyledDiv>
        <Swiper
          modules={[FreeMode]}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          freeMode={true}
        >
          {courseList.map(course => (
            <StyledSlide key={course.courseNo}>
              {course.courseMtNm} {course.courseMtNo}코스
            </StyledSlide>
          ))}
        </Swiper>
      </StyledDiv>
    </div>
  );
}

export default ListItem;
