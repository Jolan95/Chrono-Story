import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user : JSON.parse(localStorage.getItem("user")),
  isLogged : localStorage.getItem("token")? true : false
}

export const counterSlice = createSlice({
  name: 'userStore',
  initialState,
  reducers: {
    deconnexion: (state) => {
      state.user = undefined;
      state.isLogged = false
    },
    connexion: (state,{payload}) => {
      state.user = payload;
      state.isLogged = true
    },
    follow : (state, {payload})=> {
      state.user.abonnement = [...state.user.abonnement , payload]
    },
    unfollow : (state, {payload})=> {
      state.user.abonnement = state.user.abonnement.filter(id => id !== payload)
    }
  },
})
// Action creators are generated for each case reducer function
export const { deconnexion, connexion, follow, unfollow } = counterSlice.actions

export default counterSlice.reducer