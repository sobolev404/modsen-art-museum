import { useState } from "react";

type CallbackFunction = () => Promise<void>;

export default function useFetching(callback: CallbackFunction): [() => Promise<void>, boolean, string] {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError(String(e)); 
            }
        } finally {
            setIsLoading(false);
        }
    };

    return [fetching, isLoading, error];
}
