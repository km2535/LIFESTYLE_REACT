import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ISTOGGLED } from "../reducer";
const Title = ({ isPlay }) => {
  // toggled 컨트롤러는 width 1000px 이하 일때 활성화 됩니다.
  // dispatch로 state 상태값을 넘기기 위해 사용
  const dispatch = useDispatch();
  const state = useSelector((state) => state.isToggled);
  console.log(state);
  const eventToggledHandler = () => {
    dispatch({
      type: ISTOGGLED,
      isToggled: !state,
    });
  };
  const fishing = () => {
    alert("아무것도 없음..");
  };
  return (
    <>
      <header className={isPlay ? "title play" : "title"}>
        <h1>life style</h1>
        <nav className={state ? "nav_main active" : "nav_main"}>
          <ul className="nav_sub1">
            <li>
              <a href="/">study</a>
            </li>
            <li>
              <a href="/play">play</a>
            </li>
            <li>
              <a href="/work">work</a>
            </li>
          </ul>
          <ul className="nav_sub2">
            <li>
              <a href="/" onClick={fishing}>
                about
              </a>
            </li>
            <li>
              <a href="/" onClick={fishing}>
                news
              </a>
            </li>
          </ul>
        </nav>
        <div
          className={state ? "menuToggle active" : "menuToggle"}
          onClick={eventToggledHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </>
  );
};
export default Title;
