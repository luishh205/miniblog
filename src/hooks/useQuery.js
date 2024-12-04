import { useLocation } from "react-router-dom";
import { useMemo } from "react";

//pega o parametro da url

export function useQuery() {
    const {search} = useLocation();

    return useMemo(()=> new URLSearchParams(search),[search])
}