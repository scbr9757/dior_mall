import { Container } from 'react-bootstrap';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate, setAuthenticate] = useState(false)

  /* 
    useEffect(()=> {})
    - 인자로 함수를 받음 -> 콜백함수
    - Mount --> 화면에 첫 렌더링
    - Update --> 다시 렌더링
    - UpMount --> 화면에서 사라짐

    1) useEffect(() => {}[])
    -> 화면에 처음 렌더링 될 때 실행 -> 빈배열값을 전달하면 화면에 첫 렌더링 할때 만 실행

    2) useEffect(() => {},[value])
    --> value의 값이 바뀔 때마다 실행
  */

  useEffect(()=> {
    //console.log(authenticate)
  }, [authenticate])

  return (
    <Container>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<ProductAll />}></Route>
        {/* <Route path='/product/:id' element={<ProductDetail />}></Route> */}

        {/* privateRoute 설정 */}
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />}></Route>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
