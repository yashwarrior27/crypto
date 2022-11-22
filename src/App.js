import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';
import {Navbar,Exchanges,Homepage,CryptoDetails,News,Cryptocurrencies} from './component';
import './App.css';
const App = () => {
  return (
  <div className='app'>
   <div className='navbar'>
    <Navbar/>
   </div>
   <div className='main'>
    <Layout>
      <div className='routes'>
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path="/exchanges" element={<Exchanges/>}/>
          <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
          <Route path="/Crypto/:coinId" element={<CryptoDetails/>}/>
          <Route path="/news" element={<News/>}/>
          </Routes>  
      </div>
    </Layout>
    
  
   <div className='footer'>
    <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
      Cryptoverse <br/>
      All rights reserverd
    </Typography.Title>\
    <Space>
      <Link to="/">Home</Link>
      <Link to="exchanges">Exchanges</Link>
      <Link to="news">News</Link>
    </Space>
   </div>
  </div>
  </div>
  )
}

export default App