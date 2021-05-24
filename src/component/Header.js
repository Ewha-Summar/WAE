import styled from "styled-components"
import logo from "../asset/logo.png"
import alarm from "../asset/alram.PNG"
import {useHistory} from "react-router-dom";

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
const Button = styled.button`
position:absolute;
top:15px;
right:50px;
    width:40px;
    height:40px;
     border: none;
    outline:none;
    background-image:  url(${(props) => props.src});
`

function Header() {
    const history = useHistory();
    return (
        <Wrapper>
            <img src={logo} style={{ height: "200px", marginTop:"-63px" }} onClick={() => {history.push('/')}}/>
            <InputHere type="text" placeholder="Find Your Friends"></InputHere>
            <Button src={alarm}></Button>
        </Wrapper>
    );

}

export default Header;