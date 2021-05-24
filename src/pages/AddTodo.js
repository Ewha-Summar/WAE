import {React, useState} from 'react';
import styled from 'styled-components';
import Header from "../component/Header";
import 'antd/dist/antd.css';
import {TimePicker, DatePicker, Rate} from "antd";
import moment from 'moment';
import handleTodos, {insert} from '../modules/todos'; 
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom"

const Input = styled.input`
    width : ${(props) => props.width || 100}%;
    border : 1px solid;
    margin-left:30px;
    height:40px;
` 
const Wrapper = styled.div`
  width:120rem;
  height: 100%;
  padding:30px;
  display: flex;
  flex-direction: column;
  margin: 10 auto;
`;

const List = styled.form`
  width: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`

const Item = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`
const Name = styled.div`
    font-size: 20px;
    width:${(props)=> props.width || 50}px;
    height: 70px;
    text-align: center;
    padding-top: auto;
    line-height:70px;
`

const Button = styled.button`
    width:70px;
    font-size: 20px;
    background: black;
    color:white;
`
const Line = styled.div`
margin-top: 10px;
border: 1px solid #646568;
width: ${props => props.width || 200}px;
margin-bottom: 20px;
`

const AddTodoList = ({match}) => {
    const {todos, date} = useSelector((plan) => ({todos:plan.todos, date:plan.date}));
    const dispatch = useDispatch();
    const history = useHistory();
    const [todo, setTodo] = useState({
        content:'',
        date:'',
        place:'',
        starttime:'',
        endtime:'',
        importance:0,
        friends:{}
    });

    const onInputChange = async (e) => {
        const {name, value} = e.target;
        setTodo({
            ...todo,
            [name]: value
        });
        console.log(todo);
    }

    const onStartTimeChange = async (e) => {
        const value = e._d.toString().substring(16,21);
        setTodo({
            ...todo,
            starttime: value
        });
        console.log(todo);
    }

    const onEndTimeChange = async (e) => {
        const value = e._d.toString().substring(16,21);
        setTodo({
            ...todo,
            endtime: value
        });
        console.log(todo);
    }

    const onDateChange = async (date, dateString) => {
        setTodo({
            ...todo,
            date: dateString
        });
    }

    const onImportanceChange = async (e) => {
        setTodo({
            ...todo,
            importance: e
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(insert(todo));
        console.log("제출");
        console.log(todos);
        console.log(date);
        history.push("/plan");
    }

    const format = 'HH:mm';

    return (
      <div>
        <Header/>
        <Wrapper>
            <List onSubmit={onSubmit}>
            <Item>
                <h2>Add New Plan</h2>
            </Item>
            <Line style={{width:"100%"}}/>
            <Item>
                <Name width="130">Content</Name>
                <Input placeholder="Input your schedule" name='content' value={todo.content} onChange={onInputChange} ></Input>
            </Item>
            <Item>
                <Name width="130">Date</Name>
                <DatePicker style={{marginLeft:'15px', fontSize:'30px', border:"1px solid black", width:"170px"}} onChange={onDateChange}/>
            </Item>
            <Item>
                <Name width="130">Start Time</Name>
                <TimePicker style={{marginLeft:'15px', fontSize:'30px', border:"1px solid black", width:"170px"}}defaultValue={moment('12:00', format)} format={format} onChange={onStartTimeChange}/>
            </Item>
            <Item>
                <Name width="130">End Time</Name>
                <TimePicker style={{marginLeft:'15px', fontSize:'30px', border:"1px solid black", width:"170px"}}defaultValue={moment('12:00', format)} format={format} onChange={onEndTimeChange}/>
            </Item>
            <Item>
                <Name width="130">Place</Name>
                <Input placeholder="Input the location" name='place' value={todo.place} onChange={onInputChange} ></Input>
            </Item>
            <Item>
                <Name width="130">Importance</Name>
                <Rate style={{marginLeft:"15px"}} allowHalf defaultValue={0.0} onChange={onImportanceChange}/>
            </Item>
            <Item>
                <Name width="130">Friends</Name>
                <Input></Input>
            </Item>
            <Button style={{margin:"30px 10px auto auto"}}>완료</Button>
            </List>
        </Wrapper>
      </div>  
    );
}

export default AddTodoList;