import styled from 'styled-components';

export const SofaImageComponent = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  align-self: start;
  transition: 300ms all;
  flex: 1;

  img {
    margin: -52px 0 0 32px;
    width: 90%;
    object-fit: cover;

    @media (min-width: 1800px) {
      width: 100%;
    }
  }

  @media (max-width: 1190px) {
    display: none;
  }
`;
