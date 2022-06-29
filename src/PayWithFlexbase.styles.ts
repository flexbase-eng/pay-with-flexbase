const FlexbaseOrange = '#FF5745';
const FlexbaseOrange2 = '#FF8B7E';

export const PayWithFlexbaseStyle = `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

#flexbase-pay-btn {
    width: 366px;
    height: 52.18px;
    background: linear-gradient(125deg, ${FlexbaseOrange} 40%, ${FlexbaseOrange2} 100%);
    display: flex;
    color: white;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    border-radius: 8px;
    border-color: transparent;
    padding-left: 20px;
    padding-right: 20px;
    font-family: sans-serif;
    text-decoration: none;
}

#flexbase-pay-btn-text {
    font-size: 20px;
}

#flexbase-pay-btn-logo {
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
}

@media screen and (max-width: 480px) {
    #flexbase-pay-btn {
        width: 252px;
    }
`;
