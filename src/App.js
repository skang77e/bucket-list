import React from "react";

import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Progress from "./Progress";
import Spinner from './Spinner';

// 리덕스 스토어와 연결하기 위해 connect라는 친구를 호출할게요!
import {connect} from 'react-redux';
// 리덕스 모듈에서 (bucket 모듈에서) 액션 생성 함수 두개를 가져올게요!
import {loadBucketFB, addBucketFB} from './redux/modules/bucket';

// 이 함수는 스토어가 가진 상태값을 props로 받아오기 위한 함수예요.
const mapStateTopProps = (state) => ({
  bucket_list: state.bucket.list,
  is_loaded: state.bucket.is_loaded
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadBucketFB());
  },
  create: (new_item) => {
    dispatch(addBucketFB(new_item));
  }
});

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
     
    };
    // ref는 이렇게 선언합니다!
    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.props);
    this.props.load();
  }

  addBucketList = () => {
    const new_item = this.text.current.value;
    this.props.create(new_item);
  };

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        {!this.props.is_loaded ? (<Spinner/>) : (
          <React.Fragment>
            <Container>
              <Title>내 버킷리스트</Title>
              <Progress/>
              <Line />
              {/* 컴포넌트를 넣어줍니다. */}
              {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
              {/* Route 쓰는 법 2가지를 모두 써봅시다! */}
              <Switch>
                <Route path="/" exact component={BucketList} />
                <Route path="/detail/:index" component={Detail} />
                <Route component={NotFound} />
              </Switch>
            </Container>
            {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
            <InputContainer>
              <InputWrapper>
              <Input type="text" ref={this.text} />
              <AddButton onClick={this.addBucketList}>추가하기</AddButton>
              </InputWrapper>
            </InputContainer>
            <button onClick={() =>{
              window.scrollTo({top:0, left:0, behavior: "smooth"});
            }}>위로가기</button>
          </React.Fragment>
        )}

      </div>
    );
  }
}

const AddButton = styled.button`
  background-color:#A773FF;
  color:#fff;
  margin-left:30px;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width:100%;
`

const Input = styled.input`
  width: 70%;
  &:focus{
    outline: 2px solid #673AB8;
  }
`

const InputContainer = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display:flex;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;
// withRouter 적용
// connect로 묶어줬습니다!
export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));