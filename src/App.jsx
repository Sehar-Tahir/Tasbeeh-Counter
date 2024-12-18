import Counter from "./Components/Counter"
import Tasbeeh from "./Components/Tasbeeh"
function App() {


  return (
    <>
      <div className="bg-slate-600 h-screen">
        <nav>
          <h1 className="text-white text-center text-3xl md:text-5xl font-bold pt-12 flex justify-center gap-2">
            Tasbeeh Counter<span>&hearts;</span></h1>
        </nav>
        <section className="flex md:flex-row justify-center items-center md:gap-28 gap-12 mt-20 md:mt-32 flex-col">
          <Counter/>
          <Tasbeeh/>
        </section>
        <footer className="bottom-0 w-full fixed flex justify-center text-red-600 font-bold bg-white py-1">
          Made with &hearts; by ST
        </footer>
      </div>
    </>
  )
}

export default App
