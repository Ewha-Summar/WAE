import {React, useState} from 'react';
import styled from 'styled-components';
import Header from "../component/Header";

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

const AddTodoList = ({match}) => {
    const [todo, setTodo] = useState({
        content:'',
        date:'',
        place:'',
        importance:0,
        friends:{}
    });
    return (
      <div>
        <Header/>
        <Wrapper>
            <List onSubmit={() => {console.log("제출")}}>
            <Item>
                <h2>Add New Plan</h2>
            </Item>
            <Item>
                <Name width="130">Content</Name>
                <Input></Input>
            </Item>
            <Item>
                <Name width="130">Date</Name>
                <Name style={{marginLeft:"50px"}}>Year</Name><Input width="30"></Input>
                <Name style={{marginLeft:"50px"}}>Month</Name><Input width="30"></Input>
                <Name style={{marginLeft:"50px"}}>Date</Name><Input width="30"></Input>
            </Item>
            <Item>
                <Name width="130">Place</Name>
                <Input></Input>
            </Item>
            <Item>
                <Name width="130">Importance</Name>
                <Input></Input>
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