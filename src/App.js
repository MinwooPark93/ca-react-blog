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
  let likeArr = [...글제목];
  console.log(likeArr.length);
  let [like, setLike] = useState(Array(likeArr.length).fill(0));
  console.log(like);
  let [modal, setModal] = useState(false);

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

      {글제목.map((x, i) => {
        return (
          <div className="list" key={i}>
            <h3>
              {x}
              <span
                onClick={() => {
                  let nice = [...like];
                  nice[i] += 1;
                  setLike(nice);
                }}
              >
                <button>🔞</button>
              </span>
              {like[i]}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        버튼
      </button>
      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
