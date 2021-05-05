import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0%,
  50%,
  100% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(-10px);
  }

  75% {
    transform: translateY(-5px);
  }
`;

export const Container = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #f1efef;
  z-index: 9999;
  border-top: 2px solid #ddd;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  align-items: center;

  nav {
    max-width: 1200px;
    width: 100%;

    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;

      li {
        position: relative;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 5px;
          color: #b7b5b5;

          svg {
            font-size: 24px;
          }

          span {
            display: block;
            font-weight: 600;
          }

          img {
            width: 24px;
            height: 24px;
            border-radius: 50%;
          }

          &:hover {
            svg {
              animation: ${animate} 0.5s linear;
            }
          }

          &.active {
            color: #2d5491;

            svg {
              animation: none;
            }
          }
        }

        > div {
          position: absolute;
          background: #c72525;
          border-radius: 50%;
          pointer-events:none
          display: flex;
          justify-content: center;
          align-items: center;
          color: #f3f8ff;
          font-size: 8px;
          right: 0;
          top: 8px;
          padding: 3px 6px 0px 6px;
          z-index: 100;
          font-weight: bold;
        }
      }
    }
  }
`;
