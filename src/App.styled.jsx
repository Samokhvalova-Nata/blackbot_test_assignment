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
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 30px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const FieldWrap = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    margin-top: 24px;
    padding: 16px;
    background-color: var(--secondary-background-color);
`;

export const Label = styled.label`
    line-height: 1.4;
`;

export const InputWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.input`
    outline: none;
    border: 0;
    width: 160px;
    min-width: 0;
    font-size: 20px;
    line-height: 24px;
    background-color: transparent;
    color: var(--primary-text-color);
`;

export const ImageWrap = styled.div`
    display: flex;
    border-radius: 50px;
    padding: 8px;
    background-color: var(--background-color);
`;

export const Image = styled.img`
    max-width: 100%;
`;

export const ImageText = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-left: 8px;
    margin-right: 8px;
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
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
`;

export const ResultWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ResultText = styled.p`
    line-height: 1.4;
    margin-bottom: 10px;
`;

export const Result = styled.p`
    width: 156px;
    font-size: 20px;
    line-height: 1.2;
`;