import {Avatar,Divider} from 'antd'
import '../public/style/components/Auther.css'

const Auther=()=>{
    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1580012182&di=013b81229972e0fa7e366ad206a07037&src=http://www.imuyang.com/uploads/allimg/171030/195Z34927-2.jpg"/>
            </div>
            <div className="author-introduction">
                50元跟着猫哥学一年，掌握程序的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不
                <Divider>社交账号</Divider>
                <Avatar sizi={28} icon="github" className="account" />
                <Avatar sizi={28} icon="qq" className="account" />
                <Avatar sizi={28} icon="wechat" className="account" />
            </div>
        </div>
    )
}


export default Auther