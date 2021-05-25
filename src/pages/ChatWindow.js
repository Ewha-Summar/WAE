import Header from "../component/Header"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux';
import {useState, useRef, useEffect} from 'react';
import handleTodos, {sendMessage} from '../modules/todos';

const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;

    margin-left:300px;
    margin-right:300px;
`
const LittleRow = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

const Profile = styled.div`
    height:600px;
    width:350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`
const Content = styled.div`
    width:850px;
    display:flex;
    flex-direction: column;
`
const ProfileImage = styled.image`
margin-top: 20px;
border: 2px solid #646568;
border-radius: 50%;
height: ${(props) => props.height || 180}px;
width: ${(props) => props.width || 180}px;
background: url(${(props) => props.src});
background-size: ${(props) => props.pictureSize || 180}px;
`
const Group = styled.div`
margin-top: 20px;
border: 2px solid #646568;
border-radius: 50%;
height: 40px;
width: 40px;
display:flex;
justify-content: center;
align-items: center;
margin:10px;
`
const Line = styled.div`
margin-top: 10px;
border: 1px solid #646568;
width: ${props => props.width || 200}px;
margin-bottom: 20px;
`
const GrayButton = styled.button`
  margin-right:10px;
  background: ${props => props.theme.default || '#F8F9F9'};
  color:${props => props.theme.fontColor || 'black'};
  border: 1px solid #646568;
  outline:none;
  margin-top:30px;
  height:35px;
  padding-left:20px;
  padding-right:20px;
  border-radius:10px;
`
const MenuButton = styled.button`
  margin:30px;
  background: ${props => props.theme.default || '#F8F9F9'};
  color:${props => props.theme.fontColor || 'black'};
  border: none;
  margin-top:30px;
  height:35px;
  padding-left:20px;
  padding-right:20px;
  border-radius:10px;
  font-size: 25px;
  font-weight: bold;
`
const Dialog = styled.div`
min-height: 500px;
max-height: 500px;
display:flex;
flex-direction: column;
padding-left:30px;
padding-right:30px;
border: 1px solid #999999;
border-radius:20px;
overflow-y : auto;
padding-top:0px;
`
const Datebox = styled.div`
  width: 180px;
  background: #F8F9F9;
  color: black;
  border: 1px solid #646568;
  outline:none;
  margin: 30px auto 20px auto;
  height : 35px;
  text-align: center;
  padding-top:5px;
  border-radius:10px;
  `

const You = styled.div`
border: 2px solid #CCCCCC;
background-color: #ffffff;
border-radius: 10px;
display: flex;
flex-direction: column;
margin-right: 20px;
max-width:400px;
height:auto;
padding: 10px 10px;
margin-bottom: 10px;
text-align:left;
`
const Me = styled.div`
border: 2px solid #ff8e80;
background-color: #ffdfdb;
border-radius: 10px;
display: flex;
flex-direction: column;
margin-left: 20px;
max-width:400px;
height:auto;
padding: 10px 10px;
margin-bottom: 10px;
text-align:left;
`
const Warn = styled.div`
border: 2px solid red;
border-radius: 10px;
box-shadow: rgba(23, 25, 29, 0.3) 0 2px 10px;
display: flex;
flex-direction: column;
margin-left: 40px;
width:750px;
height:100px;
margin-bottom: 50px;
`
const InputHere = styled.textarea`
 width: 90%;
 height: 50px;
 background-color: #F8F9F9;
 border-radius: 10px;
 border: 1px solid #646568;
 font-family: inherit;
 font-size: 1rem;
 margin-top:20px;
 padding: 10px 10px 10px 10px;
`
const Button = styled.button`
    width: 10%;
    height: 50px;
    font-size: 20px;
    background: ${props => props.background1 || "#01784A"};
    color:white;
    border-radius:10px;
    margin-top: 20px;
    margin-left: 10px;
    cursor: pointer;
    transition: 0.1s background ease;
    &:hover{
        background: ${props => props.background2 || "#239A6C"};
    }
`
const ChatWindow = ({match}) => {
    const {friend_id} = match.params;
    const history = useHistory();
    const {friends, url} = useSelector((plan) => ({friends:plan.friends, url:plan.profile}));
    const dispatch = useDispatch();
    const [friend] = friends?.filter(friend => friend.id == friend_id);
    const [mymessage, setMymessage] = useState('');
    let date = friend.chattings[0].date;
    const scrollRef = useRef();
    const focus = useRef();

    const onInputChange = (e) => {
        setMymessage(e.target.value);
    }

    const onKeyPress = (e) =>{
        if(e.key=='Enter') onSend();
    }

    const onSend = () => {
        dispatch(sendMessage({id:friend_id, content:mymessage}));
        setMymessage('');
    }

    useEffect (() => {
        const {scrollHeight} = scrollRef.current
        scrollRef.current.scrollTop = scrollHeight;
        focus.current.focus();
    },[friend]);

    return (
        <div>
            <Header></Header>
            <Row>
                <Profile>
                    <ProfileImage src={url}></ProfileImage>
                    <h2 style={{ color: "#24292e" }}>Ahyeon Joung</h2>
                    <GrayButton>Edit Profile</GrayButton>
                    <h3 style={{ color: "#24292e" }}>25 Friends</h3>
                    <Line />
                    <LittleRow>
                        <Group>HCI</Group>
                        <Group>AI</Group>
                        <Group>CSE</Group>
                    </LittleRow>
                </Profile>
                <Content>
                    <LittleRow>
                        <MenuButton onClick={() => history.push("/")}>Overview</MenuButton>
                        <MenuButton onClick={() => history.push("/plan")}>Plan</MenuButton>
                        <MenuButton onClick={() => history.push("/friends")}>Friends</MenuButton>
                        <MenuButton onClick={() => history.push("/chatting")}>Chatting</MenuButton>
                    </LittleRow>
                    <Line width={850} />
                    <div style={{display:"flex", flexDirection:"row", marginBottom:"50px"}}>
                        <ProfileImage src = {friend.profile} height="80" width="80" pictureSize="80" style={{marginLeft:"40px"}}/>
                        <h1 style={{margin: "40px auto auto 30px"}}>{friend.name}</h1>
                    </div>
                    <Dialog ref={scrollRef}>
                    <Datebox>{date}</Datebox>
                    {friend.chattings?.map((message, i) => {
                        let flag = false;
                        if(date !== message.date){
                            flag = true;
                            date = message.date;
                        }
                        return(
                            <div>
                                {flag? <Datebox>{date}</Datebox> : null}
                                {message.isMe?
                                <div style={{display:"inline-block", width:"100%", textAlign:"right"}}> 
                                    <p style={{display:"inline-block", fontSize:"10px"}}>{message.time}</p>
                                <Me style={{display:"inline-block"}}>
                                    {message.content}
                                </Me>
                                </div>
                                :
                                <div style={{display:"inline-block"}}>
                                <You style={{display:"inline-block"}}>
                                    {message.content}
                                </You>
                                <p style={{display:"inline-block", fontSize:"10px"}}>{message.time}</p>
                                </div>}
                            </div>
                        )})}
                    </Dialog>
                    <div style={{display:"flex", flexDirection:"row"}}>
                    <InputHere value = {mymessage} onChange={onInputChange} onKeyPress={onKeyPress} ref={focus}/>
                    <Button onClick={onSend} onKeyPress={onKeyPress}>send</Button>
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                </Content>
            </Row>
        </div>
    );
}

export default ChatWindow;
