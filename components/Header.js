import React,{useEffect,useState} from 'react'
import '../public/style/components/header.css'
import {Row,Col,Menu,Icon} from 'antd'
import Router from 'next/router'
import axios from 'axios'
import servicePath from '../config/apiurl'

const Header=()=>{
    const [navArray,setNavArray]=useState([])
    useEffect(()=>{
        const axiosData=async ()=>{
            const result=await axios.get(servicePath.getTypeInfo)
            .then((res)=>{
                return res.data.data
            })
            setNavArray(result)
        }
        axiosData()
    },[])

    const handleClick=(e)=>{
        if(e.key==0){
            Router.push('/index')
        }else{
            Router.push('/list?id='+e.key)
        }
    }

    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={10} md={10} lg={15} xl={12}>
                    <span className="header-logo">Yangshu</span>
                    <span className="header-txt">专注前端开发,每年100集免费视频。</span>
                </Col>
                <Col className="header-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="0">
                            <Icon type="home" />
                            博客首页
                        </Menu.Item>
                        {
                            navArray.map((item,index)=>{
                                return (
                                    <Menu.Item key={item.Id}>
                                        <Icon type={item.Icon} />
                                        {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                        
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header