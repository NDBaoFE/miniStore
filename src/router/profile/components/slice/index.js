import { injectReducer } from "../../../../store/index";
import generateActions from "../../../../utils/generateActions";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userId: 0,
  name: "",
  email: "",
  dob:"",
  phone: "",
  userImg:"",
  address: "",
  roles: ["Admin", "Employee", "Guard"],
  roleId:1,
  genders:["Male", "Female"],
  gender: true,
  password: 0,
  info: {},
  payslip: 0
};

export const name = "editProfile";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...generateActions(initialState),

    modal_confirm: (state, action) => {
      state.modal.confirm = action.payload;
    },

    setPayslip:(state,action)=>{
      state.payslip = action.payload.payslip;
    },

    setSalary:(state,action)=>{
      state.salary = action.payload.salary;
    },

    getPayslipInfo: (state) =>{
      state.info={
        payslip: state.payslip
      }
    },

    getSalaryInfo: (state) =>{
      state.info ={
        salary: state.salary
      }
    },

    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.name = action.payload.name;
      state.dob = action.payload.dob
      state.email = action.payload.email;
      state.userImg = action.payload.userImg;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
      state.gender = action.gender== true ? 1: 0;
      state.password = action.payload.password;

  
    },
    getProfileInfo: (state) => {
      state.info = {
        name: state.name,
        email: state.email,
        userImg: state.userImg,
        dob: state.dob,
        phone: state.phone,
        address: state.address,
        roleId:state.roleId,
        gender: state.gender,
        password: state.password,

      };
    },
  },
});

injectReducer(name, slice.reducer);

export const { actions } = slice;
