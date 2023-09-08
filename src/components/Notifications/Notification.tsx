import { useSelector } from "react-redux";
import { selectAddCarsState, selectRetrieveCarsState } from "../../store/cars/cars.selectors";
import { LoadingState } from "../../ActionTypes/LoadingState";
import { errorNotification, successNotification } from "./notifications";


const Notification : React.FC = ()=>{

    let retriveState=useSelector(selectRetrieveCarsState);
    let addMasinaState=useSelector(selectAddCarsState);


    return (
        <>
        {
         retriveState===LoadingState.SUCCES && 
         successNotification("Masinile  au fost gasite","masina","topRight")
        }

        {
         retriveState===LoadingState.ERROR && 
         errorNotification("Masinile nu au fost gasite","masina","topRight")
        }
        {
         addMasinaState===LoadingState.SUCCES && 
         successNotification("Masina a fost adaugata","masina","topRight")
        }

        {
         addMasinaState===LoadingState.ERROR && 
         errorNotification("Masina nu a fost adaugata","masina","topRight")
        }
      </>
    )
}

export default Notification;