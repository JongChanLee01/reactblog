import './App.css';
// import 도라에몽 from "./image02.png";
import {useState} from "react";

function App() {
  // let posts = "강남 고기 맛집";

  // destructuring 문법
  // useState Hooks
  // 글제목 = "변경데이터"
  // 글제목변경("변경데이터")
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남우동맛집",
    "파이썬독학"
  ]);
  

  console.log(글제목);

  function 제목바꾸기(){
    // 글제목변경(["제목1","제목2","제목3"])
    // deep Copy 깊은복사, 스프레드 연산자 사용
    var newArray = [...글제목];
    newArray[0] = "여성복 맞춤";
    newArray[1] = "남성복 맞춤";
    newArray[2] = "리액트 공부";
    글제목변경(newArray);
  }

  function 정렬하기(){
    var newArray = [...글제목];
    const sortArray = newArray.sort();
    글제목변경(sortArray);
  }


  // function 함수(){
  //   return 100;
  // }

  // let style01 = {
  //   border: "2px solid blue",
  //   color: "red",
  //   backgroundColor: "yellow"
  // }

  let [modal, setModal] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  function 따봉변경하기(i){
    let newA = [...따봉];
    newA[i]=newA[i]+1;
    따봉변경(newA);
  }


  let [입력값, 입력값변경] = useState("");
    // 숫자형 상태변수
  let [따봉, 따봉변경] = useState([0,0,0]);

  const addToSave=()=>{
    // 저장할때마다 글제목 추가
    let arrayCopy = [...글제목];
    arrayCopy.unshift(입력값);
    글제목변경(arrayCopy);

    // 저장할때마다 따봉버튼 추가
    let 따봉복사=[...따봉];
    따봉복사.unshift(0);
    따봉변경(따봉복사);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'gold', fontSize: '30px'}}>개발 Blog</div>
      </div>
      {/* onClick = {()=>변경()} */}
      <button onClick={제목바꾸기}>글제목변경</button>
      <button onClick={정렬하기}>정렬하기</button>
      <hr/>
      <div className='publish'>
        {/* 입력할때마다 값이 콘솔창에 나옴 */}
        <input
          onChange={(e)=>{
            console.log(e.target.value);
            입력값변경(e.target.value)
          }}
        />
        <button onClick={addToSave} >저장</button>
        {/* <button onClick={()=>{
          let arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경(arrayCopy);
        }} >저장</button> */}
      </div>

      {/* 반복문 map(): map()은 꼭 key 값을 주어야함 */}
      {
        글제목.map((글,i)=>{
          return(
            // 어떤것을 클릭했는지에 대해서는 i가 가지고있음
            <div className='list' key={i}>
              <h3 onClick={()=>{누른제목변경(i)}}>{글}
                {/* 윈도우키 + ;  이모지 */}
                {/* onclick 자바스크립트, onclick={실행할 함수} */}
                {/* 
                  리액트상의 모든 데이터는 immutable해야한다.
                  직접 수정하면 안된다.
                */}
                <span onClick={()=>따봉변경하기(i)}>👍</span>{따봉[i]}
              </h3>
              <p>2월 26일 발생</p>
            </div>
          )
        })
      }
      <hr/>
      {/* !를 주면 true는 false, false는 true */}
      <button onClick={()=>setModal(!modal)}>모달창</button>
      <button onClick={()=>{누른제목변경(0)}}>버튼1</button>
      <button onClick={()=>{누른제목변경(1)}}>버튼2</button>
      <button onClick={()=>{누른제목변경(2)}}>버튼3</button>
      {/* 제목={글제목}
        props 상위컴포넌트에서 하위로 데이터 전달

        JSX문법
        if문과 for문은 사용 못함
        삼항연산자 사용
      */}
      {/* props로 하면 Modal 함수쪽에 props.글제목 뒤에랑 맞춰주어야함 */}
      {/* <Modal 글제목={변수명} */}
      {/* <Modal 글제목="강남회집" */}
      {modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null}
      {/* {modal === true ? <Modal 제목={글제목} 누른제목={누른제목} /> : null} */}



      {/* <div className='list'>
        <h3>{글제목[1]}
          <span onClick={()=>따봉변경(따봉+1)}>👍</span>{따봉}
        </h3>
        <p>2월 26일 발생</p>
      </div>
      <div className='list'>
        <h3>{글제목[2]}
          <span onClick={()=>따봉변경(따봉+1)}>👍</span>{따봉}
        </h3>
        <p>2월 26일 발생</p>
      </div> */}


      {/* JSX 문법 */}
      {/* <h4 style={style01}>{posts}</h4>
      <h4>{함수()}</h4>
      <img src="imgs/image01.jpg" alt="도라에몽 사진"/>
      <img src={도라에몽} alt="도라에몽2 사진" /> */}
      {/* function -> 컴포넌트는 대문자로 시작 Modal */}

    </div>
  );
}

// 프로퍼티(props)
// - 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터

// state
//  - 컴포넌트의 state를 저장하고 변경할 수 있는 데이터

// 컨텍스트
// - 부모컴포넌트에서 생성하여 모든 자식 컴포넌트에 전달하는 데이터

// 리덕스
//  - 서버에서 받은 데이터를 앱 전체에 전달하거나 관리한다.
function Modal(props){
  console.log(props);
  return(
    <div className='modal'>
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
// function Modal({제목, 누른제목}){
//   return(
//     <div className='modal'>
//       <h2>{제목[누른제목]}</h2>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>
//   )
// }

// 다른곳에서 재활용 하려면 아래를 선언 해주어야 함
// JSX 문법
export default App;
