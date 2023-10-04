import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
    const [productList, setProductList] = useState([])
    const [query, setQuery] =  useSearchParams()
    const getProducts  = async() => {
      
        //const url = 'http://localhost:5000/products/'
        //getProduct 함수를 통해서 API를 호출할 때에 쿼리에 있는 값을 넣어줌 
        searchQuery = 232432;
        searchQuery = "asdfasdf";
        var searchQuery = query.get('q')||"";
        const searchQuery = query.get('s')||"";
        //로컬에 설치된 json-server로 데이터를 불러와서 보여주는 주소
        const url = `http://localhost:5000/products?q=${searchQuery}`

        //my-json-server에서 자료를 가져오기
        //const url = `https://my-json-server.typicode.com/scbr9757/dior_mall/products?q=${searchQuery} `
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data)
        setProductList(data)
    }

    useEffect(() => {
        getProducts()
    }, [query])

  return (
    <Container>
      <Row>
        {
            productList.map((menu, idx) => (
                <Col lg={3} key={idx}>
                    <ProductCard item={menu} />
                </Col>
            ))
        }
        </Row>
    </Container>
  )
}

export default ProductAll
