import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyle>
      <CorpList>
        <li>
          <Link to="/">이용약관</Link>
        </li>
        <li>
          <Link to="/">개인정보처리방침</Link>
        </li>
        <li>
          <Link to="/">고객센터</Link>
        </li>
      </CorpList>
      <div className="copright">Copyright © company. All rights reserved.</div>
    </FooterStyle>
    // <footer>
    //   <p>&copy; 2024</p>
    // </footer>
  );
};

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  /* background-color: #eee; */
  /* background-color:${(props) => props.theme.colors.primary}}; */
  background-color: ${(props) => props.theme.colors.gray[200]};
  /* font-family: 'Black Han Sans', sans-serif; */
  .copright {
    opacity: 0.5;
    margin: 20px;
  }
`;

const CorpList = styled.ul`
  display: flex;
  li {
    &::before {
      content: '|';
      margin: 0 3px;
    }
    &:first-child::before {
      content: '';
    }
  }
  a {
    color: #1b1414;
    /* display: block; */
    size: 40px;
    padding: 10px;
  }
`;

export default Footer;
