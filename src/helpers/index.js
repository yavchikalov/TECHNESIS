export const throttle = (callback, time) => {
    let timer = null;

    return (...params) => {
        if (!timer) {
            callback(...params);
            timer = setTimeout(() => {
                timer = null;
            }, time);
        }
    };
};