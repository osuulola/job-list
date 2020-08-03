import React from 'react';
import * as dataList from './data.json';
import Card from './components/screen/Card'
import './App.css';

function Home() {
  console.log(dataList)
  return (
      <div className= 'container'>
      
      {dataList.default.map(item => <Card job={item} key={item.id}/>)}
     </div>
  );
}

export default Home;
