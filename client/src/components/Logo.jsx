import styled from 'styled-components';

const Wrapper = styled.span`
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--primary-500);
  font-weight: 900;
  letter-spacing: -1px;
  span {
    font-weight: 700;
  }
`;

const Logo = () => {
  return (
    <Wrapper>
      &lt;e/&gt;<span>-joblet</span>
    </Wrapper>
  );
};
export default Logo;
