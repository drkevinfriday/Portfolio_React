import React , {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Gallery from './components/Gallery'
import Header from './components/Header';
// import Footer from './components/Footer';


function App() {

  const  [categories] = useState([
    { name: 'About', description: 'Portraits of people in my life' },
    { name: 'Contact', description: 'Portraits of people in my life' },
    { name: 'Projects', description: 'Photos of grocery stores, food trucks, and other commercial projects' },
    { name: 'Resume', description: 'Portraits of people in my life' },
  ]);


  const[currentCategory, setCurrentCategory]= useState(categories[0]);
  const[contactSelected, setContactSelected] = useState(false);
  const[AboutSelected, setAboutSelected] = useState(false);
  const[resumeSelected, setResumeSelected] = useState(false);


  return (
    <div>

    <Header></Header>
      <Nav
      categories={categories}

      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}

      contactSelected = {contactSelected}
      setContactSelected = {setContactSelected}

      AboutSelected={AboutSelected}
      setAboutSelected={setAboutSelected}

      resumeSelected={resumeSelected}
      setResumeSelected ={setResumeSelected}
      ></Nav>
      <main>
        {currentCategory.name === "Contact"  ? (
        <>
        <ContactForm></ContactForm>
        </>
      ):(currentCategory.name === "Resume"  ? (
        <>
        <Resume></Resume>
        </>
      ):(currentCategory.name === "Projects"  ? (
        <>
        <Gallery></Gallery>
        </>
      ):(
        
        <About></About>
        )
        
        )
        )}
      </main>
    </div>

  );
}

export default App;
