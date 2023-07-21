import styled from 'styled-components';

const Wrapper = styled.nav`
  height: var(--nav-height);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  .nav-center {
    display: flex;
    margin: 0 auto;
    height: 100%;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .logo-text {
    display: none;
  }
  .logo span {
    font-size: clamp(2rem, 5vw, 2.5rem);
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
