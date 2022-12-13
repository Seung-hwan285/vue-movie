export const checkIsTitle = (textValue) => {
    const regex = /^[a-zA-Z]+$/;

    if (!regex.test(textValue)) {
        alert('영어로 입력해주세요');
        // 로딩스피너 리렌더링 방지용
        throw new Error('error');
    }
};

export const checkIsYear = (year) => {
    if (isNaN(parseInt(year))) {
        alert('숫자만 입력해주세요');
        throw new Error('error');
    }
};
