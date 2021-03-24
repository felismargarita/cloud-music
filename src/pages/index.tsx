import React from 'react'
import '@/styles/style.scss';
import Header from '@/components/layout/header/Header'
import Asider from '@/components/layout/asider/Asider'
import Content from '@/components/layout/content/Content'
import Footer from '@/components/layout/footer/Footer'
import Github from './Github'
const IndexPage:React.FC<{}> = ({children})=> {
  return (
    <div className="cloud-music">
      <div className="cloud-music-app">
        <Github/>
        <Header/>
        <Asider/>
        <Content>{children}</Content>
        <Footer/>
      </div>
    </div>
  );
}

export default IndexPage
