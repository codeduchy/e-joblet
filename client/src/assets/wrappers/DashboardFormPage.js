import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  .form-title {
    margin-bottom: 2rem;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    display: grid;
    row-gap: 1rem;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: center;
    margin-top: 1rem;
  }
  @media (min-width: 992px) {
    .form-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
`;

export default Wrapper;
