const theme = {
  color:{
    primaryColor:'#ff385c',
    secondaryColor:'#00848a'
  },
  mixin:{
   boxShadow: `
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,.18);
    }`
  }
}
export default theme

//可以弄不同主题
// const lightTheme = {

// }
// const darkTheme = {

// }
