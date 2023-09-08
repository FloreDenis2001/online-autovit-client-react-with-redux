import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Masina from "../../models/Masina";
import ServiceCar from "../../services/Api";
import { Car } from "./Car/Car";
import { useDispatch, useSelector } from "react-redux";
import { loadMasini,retrieveMasiniLoading,retriveMasiniError,retriveMasiniSucces } from "../../store/cars/cars.reducers";
import { selectCars, selectRetrieveCarsState } from "../../store/cars/cars.selectors";
import { Button, Space, DatePicker, version, Spin, Result } from "antd";
import { LoadingState } from "../../ActionTypes/LoadingState";

const Home: React.FC = () => {
  let masini = useSelector(selectCars);
  let retriveState=useSelector(selectRetrieveCarsState);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(retriveState==LoadingState.NONE){
      retrieveCars();
    }
  }, []);

  let serviceCar = new ServiceCar();

  // let getAllCars = async (): Promise<void> => {

  //     let data = await serviceCar.getAllCars();

  //     setCars(data);
  // }

  let retrieveCars = async (): Promise<void> => {
   
      dispatch(retrieveMasiniLoading());

    try {
      let res = await serviceCar.getAllCars();
      dispatch(retriveMasiniSucces());
      dispatch(loadMasini(res));
     
    } catch (error) {
      console.log(error);
      dispatch(retriveMasiniError());
    }
  };

  let addHandler = () => {
    navigate("/add");
  };

  return (
    <>
      {retriveState==LoadingState.SUCCES && ( <div> <h1>Cars</h1>
            <p><a>Cars</a></p>

            <table>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Model</th>
                        <th>Culoare</th>
                        <th>Anul</th>
                    </tr>
                </thead>
                <tbody>
                    {   masini &&
                        masini.map(car=>{
                            return <Car car={car} key={car.id}/>
                        })
                    }
                </tbody>
            </table>

            <button type='button' onClick={addHandler}>Add Car</button>
            
        </div>) }

       {
          retriveState===LoadingState.LOADING&&(
            <Space>
               <Spin />
          </Space>
          )
       }



       {
 retriveState==LoadingState.ERROR&&(
    <Space>
    <Result
    status="error"
    title="Submission Failed"
    subTitle="Please check and modify the following information before resubmitting."/>
    </Space>
    )
     }
       
    </>
  );
};

export default Home;
