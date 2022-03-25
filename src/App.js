/* eslint-disable */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "리액트 마스터",
  ]);
  let 글제목arr = [...글제목];
  console.log(글제목arr.length);
  let [like, setLike] = useState(Array(글제목arr.length).fill(0));
  console.log(like);
  let [modal, setModal] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState("");

  // function 반복된UI() {
  //   let 어레이 = [];

  //   for (let i = 0; i < 3; i++) {
  //     어레이.push(<div>안녕</div>);
  //   }

  //   return 어레이;
  // }

  // function 제목바꾸기() {
  //   let newArray = [...글제목];
  //   newArray[0] = "여자 코트 추천";
  //   글제목변경(newArray);
  // }

  // function 제목정렬() {
  //   let newArr = [...글제목];
  //   newArr.sort();
  //   글제목변경(newArr);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={제목바꾸기}>버튼</button>
      <button onClick={제목정렬}>정렬</button> */}

      {글제목.map((cur, idx) => {
        return (
          <div className="list" key={idx}>
            <h3
              onClick={() => {
                누른제목변경(idx);
              }}
            >
              {cur}
              <span
                onClick={() => {
                  let nice = [...like];
                  nice[idx] += 1;
                  setLike(nice);
                }}
              >
                <button>🔞</button>
              </span>
              {like[idx]}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      {/* {입력값} */}
      {/* <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      /> */}

      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            글제목arr.unshift(입력값);
            글제목변경(글제목arr);
          }}
        >
          저장
        </button>
      </div>

      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        열고닫기
      </button>

      <Profile></Profile>

      {modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: "Kim", age: 30 };
  }

  changeName = () => {
    this.setState({ name: "Park" });
  };

  render() {
    return (
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <button onClick={this.changeName.bind(this)}>버튼</button>
      </div>
    );
  }
}

export default App;
