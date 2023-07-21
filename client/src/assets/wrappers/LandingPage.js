import styled from 'styled-components';

const Wrapper = styled.section`
  nav {
    height: var(--nav-height);
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
  .page {
    display: grid;
    height: calc(100vh - var(--nav-height));
    align-items: center;
    grid-template-columns: 1fr;
  }
  .info {
    margin-top: -3rem;
  }
  h1 {
    margin-bottom: 1.5rem;
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 25rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Wrapper;
