import './App.css';
import 도라에몽 from "./image02.png";

function App() {
  let posts = "강남 고기 맛집";

  function 함수(){
    return 100;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* JSX 문법 */}
      <h4>{posts}</h4>
      <h4>{함수()}</h4>
      <img src="imgs/image01.jpg" alt="도라에몽 사진"/>
      <img src={도라에몽} alt="도라에몽2 사진" />
    </div>
  );
}

// 다른곳에서 재활용 하려면 아래를 선언 해주어야 함
// JSX 문법
export default App;
