import styled from '@emotion/styled';

export const Container = styled.main`
width: 100%;
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
justify-content: center;
padding-left: 30px;
padding-right: 30px;
margin-top: 30px;
margin-bottom: 30px;
margin-left: auto;
margin-right: auto;
box-sizing: border-box;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 30px;
`;

export const Wrapper = styled.div`
display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const FieldWrap = styled.div`
display: flex;
flex-direction: column;
// min-width: 30px;
border-radius: 8px;
margin-top: 24px;
padding: 16px;
background-color: #2B3139;
box-sizing: border-box;
`;

export const Label = styled.label`
min-width: 0;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #EAECEF;
`;

export const InputWrap = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`;

export const Input = styled.input`
outline: none;
border: 0;
width: 160px;
padding: 0;
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 20px;
line-height: 24px;
background-color: transparent;
color: #EAECEF;
`;

export const ImageWrap = styled.div`
    display: flex;
    border-radius: 50px;
    padding: 8px;
    background-color: #181A20;
`;

export const Image = styled.img`
max-width: 100%;
border-radius: 9999px;
`;

export const ImageText = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #EAECEF;
margin-left: 8px;
margin-right: 8px;
margin-top: auto;
margin-bottom: auto;
`;

export const Switcher = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    border: 1px solid var(--accent-color);
`;

export const SwitcherLabel = styled.label`
    width: 50%;
`;

export const SwitcherInput = styled.input`
position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked + div {
        background: var(--accent-color);
        color: var(--text-button-color);
    }
    &:hover + div,
    :focus + div {
        // background: rgba(95, 203, 57, 0.2);
        // box-shadow:  var(--shadow);
    }

+ div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 30px;
}
`;

export const SwitcherText = styled.p`
text-align: center;
// color: var(--accent-color);
font-size: 12px;
font-weight: 800;
letter-spacing: 2.5px;
text-transform: uppercase;
`;

export const ResultText = styled.p`
min-width: 0;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #EAECEF;
margin-bottom: 10px;
`;

export const Result = styled.p`
width: 156px;
padding: 0;
box-sizing: border-box;
margin: 0;
min-width: 0;
font-size: 20px;
line-height: 24px;
background-color: transparent;
color: #EAECEF;
`;