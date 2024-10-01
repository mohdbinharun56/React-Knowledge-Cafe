import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className=''>
        <div className='md:flex items-center justify-between mx-60 my-5 gap-3'>
          <Blogs ></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </main>
    </>
  )
}

export default App
