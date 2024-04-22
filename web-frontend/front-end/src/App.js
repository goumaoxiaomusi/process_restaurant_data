import 'bootstrap/scss/bootstrap.scss'

function App() {
  //This controls which page to go true
  const isLanding = true;


  return (
   <>
  
   {isLanding ? <span>This is the landing page</span>: <span>This is the second page</span>}
  
   </>
  );
}

export default App;