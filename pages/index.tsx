import React from 'react'
import Layout from '../components/Layout'
import fetch from 'node-fetch';
import styled from 'styled-components';
import TestContainer from '../containers/testContainer';
function Index(props){
  const {data} = props;
  return (
    <Layout title="Home">
      <Test>
        <img src={data.message} />
      </Test>
      <div>
        mobx
        <TestContainer />
      </div>
    </Layout>
  )
}

export async function getStaticProps(context){
  const res = await fetch(
    'https://dog.ceo/api/breeds/image/random'
  );
  const data = await res.json();

 return {
    props: { data }
  };
}

const Test = styled.div`
  &>img{
    width:100px;
    height:100px;
  }
`;
export default Index;