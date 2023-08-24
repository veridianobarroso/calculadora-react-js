import { ButtonContainer } from "./styles";

const Botton = ({label,onClick}) =>{
    return(
      <ButtonContainer onClick={onClick}>
      {label}   
      </ButtonContainer>
    );
  }
  export default Botton