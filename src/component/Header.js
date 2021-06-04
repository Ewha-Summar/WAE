import styled from "styled-components"
import logo from "../asset/logo.png"
import alarm from "../asset/alram.PNG"
import add from "../asset/add.PNG"
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
const Wrapper = styled.div`
    background-color: #24292e;
    height:70px;
    width:100%auto;
    display:flex;
`
const InputHere = styled.input`
 background-color: #24292e;
 border-radius: 10px;
 border: 2px solid #646568;
 color: #b6b7b8;
 font-family: inherit;
 font-size: 1rem;
 width: 320px;
 height:30px;
 margin-top:20px;
 margin-left: 15px;
outline:none;
`
const Button1 = styled.button`
position:absolute;
top:15px;
right:60px;
    width:40px;
    height:40px;
     border: none;
    outline:none;
    background-image:  url(${(props) => props.src});
`
const Button2 = styled.button`
position:absolute;
top:25px;
right:30px;
    width:25px;
    height:25px;
     border: none;
    outline:none;
    background-image:  url(${(props) => props.src});
`

function Header() {
    const history = useHistory();
    const { friends, url } = useSelector((plan) => ({ friends: plan.friends, url: plan.profile }));
    return (
        <Wrapper>
            <img src={logo} style={{ height: "200px", marginTop: "-63px" }} onClick={() => { history.push('/') }} />
            <Button2 src={add} onClick={() => history.push("/addfriends")}></Button2>
        </Wrapper>
    );

}

export default Header;