import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import Header from '../components/Header.js'
import Auther from '../components/Auther.js'
import Advert from '../components/Advert.js'
import Footer from '../components/Footer.js'
import {Row,Col,List,Icon,Breadcrumb} from 'antd'
import axios from 'axios'
import Link from 'next/link'

import '../public/style/pages/comm.css'
import '../public/style/pages/list.css'
import servicePath from '../config/apiurl'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css';

const list = (list) => {
  const [mylist,setMylist]=useState(list.data)
  useEffect(()=>{
    setMylist(list.data)
  })
  const renderer=new marked.Renderer()

  marked.setOptions({
    renderer: renderer, 
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });
  return(
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row type="flex" justify="center" className="comm-main">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
              <div className="bread-box">
                <Breadcrumb>
                  <Breadcrumb.Item href="/">
                    <Icon type="home" />
                    <span>首页</span>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Icon type="user" />
                    <span>点滴</span>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <List 
                header={<div>最新日志</div>}
                itemLayout="vertical"
                dataSource={mylist}
                renderItem={(item,index)=>(
                  <List.Item>
                    <div className="list-title">
                      <Link href={{pathname:'/datailed',query:{id:item.id}}}>
                        <a>{item.title}</a>
                      </Link>
                    </div>
                    <div className="list-icon">
                        <span><Icon type="calendar" />{item.addTime}</span>
                        <span><Icon type="folder" />{item.typeName}</span>
                        <span><Icon type="fire" />{item.view_count}人</span>
                    </div>
                    <div className="list-context"
                    dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
                    >  
                    </div>
                  </List.Item>
                )}
              />
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={8} lg={6} xl={5}>
              <Auther />
              <Advert />
          </Col>
      </Row>
      <Footer />
    </div>
  )
}

list.getInitialProps=async (context)=>{
  const id=context.query.id
  const promise=new Promise((resolve)=>{
      axios.get(servicePath.getListById+id)
      .then(res=>resolve(res.data))
  })
  return await promise
}

export default list
