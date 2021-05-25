import Header from "../component/Header"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import {useState} from 'react';
import { IoStarHalf, IoStar } from "react-icons/io5";
import {useSelector, useDispatch} from 'react-redux';
import handleTodos, { remove } from '../modules/todos'; 

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
    height:700px;
    width:850px;
    display:flex;
    flex-direction: column;
`
const ProfileImage = styled.image`
margin-top: 20px;
border: 2px solid #646568;
border-radius: 50%;
height: 180px;
width: 180px;
background: url(${(props) => props.src});
background-size: 180px;
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
const Card = styled.div`
border: 2px solid #646568;
border-radius: 10px;
box-shadow: rgba(23, 25, 29, 0.3) 0 2px 10px;
display: flex;
flex-direction: column;
margin-left: 40px;
width:1000px;
margin-bottom: 50px;
padding: 15px;
background-color: #EEEEEE;
svg{
    font-size:20px;
}
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
const Button = styled.button`
    width: 70px;
    font-size: 20px;
    background: ${props => props.background1 || "#01784A"};
    color:white;
    border-radius:10px;
    margin-left: auto;
    cursor: pointer;
    transition: 0.1s background ease;
    &:hover{
        background: ${props => props.background2 || "#239A6C"};
    }
`

function Plan() {
    const {todos, date, url} = useSelector((plan) => ({todos:plan.todos, date:plan.date, url:plan.profile}));
    const history = useHistory();
    const dispatch = useDispatch();

    let today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth()+1)).slice(-2);
    let date1 = ("0" + today.getDate()).slice(-2);
    let hour = ("0" + today.getHours()).slice(-2);
    let minute = ("0"+ today.getMinutes()).slice(-2);
    let ymd = year+"-"+month+"-"+date1;
    let hm = hour+":"+minute;
    console.log(ymd);
    console.log(date);
    const deleteTodo = (id) => {
        dispatch(remove(id));
        console.log(todos);
    }

    console.log(todos);
    console.log(date);
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
                    <Button style={{width:"150px"}} onClick={() => history.push("/addTodo")}>+Add Plan</Button>
                    {date?.map((day, i) => {
                        console.log(day);
                        console.log(ymd);
                        if(ymd > day) return null;
                        else return(
                            <div>                  
                            <h1>&emsp;{day}</h1>
                            <LittleRow>
                                <Card>
                                    {todos?.map((todo, i) => {
                                        if(todo.date===day){
                                            console.log(todo.endtime);
                                            console.log(hm);
                                            return(
                                                <div style={{display:"flex", flexDirection:"column"}}>
                                                <div>
                                                    {hm > todo.endtime && ymd ===todo.date
                                                    ?
                                                    <h2 style={{display:"inline-block", textDecoration:"line-through", color:"gray"}}>{todo.content}</h2>
                                                    :
                                                    <h2 style={{display:"inline-block"}}>{todo.content}</h2>
                                                    }
                                                    <div style={{display:"inline-block", marginLeft:"50px"}}>
                                                    {[...Array(parseInt(todo.importance))].map((n, i) => {
                                                        return(<IoStar/>)
                                                    })}
                                                    {todo.importance !== parseInt(todo.importance) ? <IoStarHalf/> : null}
                                                    </div>
                                                </div>
                                                <div style={{display:"flex", flexDirection:"row"}}>
                                                    {hm > todo.endtime && ymd===todo.date 
                                                    ?
                                                    <p style={{fontSize:"20px", display:"inline-block", textDecoration:"line-through", color:"gray"}}>time : {todo.starttime}-{todo.endtime}</p>
                                                    :
                                                    <p style={{fontSize:"20px", display:"inline-block"}}>time : {todo.starttime}-{todo.endtime}</p>
                                                    }
                                                    <Button background1="#CC3333" background2="#AA0000"style={{width:"100px", height:"40px", display:"inline-block"}} onClick={() => deleteTodo(todo.id)}>Delete</Button>
                                                </div>
                                                </div>
                                            )
                                        }
                                    })}
                                    </Card>
                            </LittleRow>
                            </div>
                        );
                    })}
                </Content>
            </Row>
        </div>
    );
}

export default Plan;
