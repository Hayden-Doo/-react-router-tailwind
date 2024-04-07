import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) =>
    props.default ? props.theme.colors.primary : props.theme.colors.white};
  color: ${(props) =>
    props.default ? props.theme.colors.white : props.theme.colors.black};
  padding: 10px 5px;
  border: 1px solid
    ${(props) =>
      props.default ? props.theme.colors.primary : props.theme.colors.black};
`;

// Button component 상속
export const GhostButton = styled(Button)`
  background: none;
  border: none;
`;

export default Button;
