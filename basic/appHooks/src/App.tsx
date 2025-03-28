import { ComponentBasicHooks } from "./hooks/ComponentBasicHooks"
import { ComponentUseActionState } from "./hooks/ComponentUseActionState";
import { ComponentUseReducer } from "./hooks/ComponentUseReducer";


function App() {


  return (
    <>
      <ComponentUseActionState/>
      <br/>
      <ComponentBasicHooks/>
      <br />
      <ComponentUseReducer/>
    </>
  )
}

export default App
