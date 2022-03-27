import "../_style/content.css";

const PlayContent = () => {
  const study = () => {
    alert("어디가 공부해야지");
  };
  return (
    <>
      <section>
        <div className="wrapper">
          <div className="bg_play"></div>
          <div className="bycle" />
          <div className="board" />
          <div className="sub_title">
            <a href="/" onClick={study}>
              <div>
                <div>놀</div>
                <div>러</div>
              </div>
              <div>
                <div>가</div>
                <div>자</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default PlayContent;
