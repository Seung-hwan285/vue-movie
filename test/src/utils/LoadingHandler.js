export const loadingHandler = (isShow) => {
    isShow.value = false;

    setTimeout(() => {
        isShow.value = true;
    }, 2000);
};
