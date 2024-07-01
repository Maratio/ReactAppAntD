import { useEffect, useState } from "react";


export const useDebounce = (str, delay) => {
    // Реактивный стейт, который будет отвечать за изменение строки
    const [debounceValue, setDebounceValue] = useState(str);

    useEffect(() => {
        // setTimeout возвращает айди в виде числа в константу timeout
        const timeout = setTimeout(() => {
            // значение применится только тогда, когда пройдет таймер
            setDebounceValue(str)
        }, delay)

        // clearTimeout обращается к предыдущему setTimeout и отменяет его действие
        return () => {
            clearTimeout(timeout)
        }
    }, [str, delay]);

    return debounceValue;
};
