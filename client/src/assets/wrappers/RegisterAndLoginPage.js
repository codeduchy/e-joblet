import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;

  .form {
    width: 400px;
    display: grid;
    text-align: center;
  }
  label {
    text-align: left;
  }
  h4 {
    margin: 1rem 0 1.5rem 0;
  }
  .btn {
    margin: 1rem 0;
  }
  .member-btn {
    margin-left: 0.2rem;
    color: var(--primary-500);
  }
`;
export default Wrapper;
