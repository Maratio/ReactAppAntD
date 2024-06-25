import { useContext } from "react";
import {AuthContext} from '../utils/context.js'

export function useAuth(){
    return useContext(AuthContext)
}