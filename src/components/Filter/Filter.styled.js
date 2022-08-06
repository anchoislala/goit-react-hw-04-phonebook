import styled from '@emotion/styled';

export const LabelFind = styled.label`
    display: flex;
    align-items: center;
    font-size: 30px;
`;

export const FindInput = styled.input`
    margin-left: 20px;
    font-size: 25px;
    padding: 5px 5px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    &:focus {
    border-color: #2196f3;
    transition-property: border-color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;