import { apiConnector } from "../apiconnector";
import {appraisalEndpoints} from '../apis'
import { Toast } from "react-toastify/dist/components";


export const creatingAppraisal = async(formData) => {
    try { 
        const toastId = Toast.loading()
    }
    catch(err){
        console.log(err)
        
    }
}