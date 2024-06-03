import React,{ useState,useEffect }  from 'react'
import pictures,{MenuItems} from './Pictures.jsx'
import {Blurhash} from 'react-blurhash'

const PictureCard = () => {
  

  const[activeMenu, setActiveMenu] = useState("All");




 //Creates the Menu above the gallery
  function createPictureMenu(text) {

    function handleClick(e) {
      setActiveMenu(e.target.innerText);
    }

    return (
      <div onClick={handleClick} className={activeMenu==text?"bg-[#178376] rounded hover:duration-300 hover:ease-in-out hover:cursor-pointer text-white px-4 py-2":"hover:duration-300 hover:ease-in-out hover:cursor-pointer hover:bg-[#178376] hover:rounded text-[white] px-4 py-2"}  key={text}>
        <p>{text}</p>
      </div>
    )
  }





  //Creates each picture card in the gallery
  function createPictureCard(image) {

    const [moused, setMoused] = useState(false)

    const [imageLoaded,setImageLoaded] = useState(false)

    useEffect(()=>{
      const img = new Image();
      img.src = image.imgURL;
      img.onload = () => {
        setImageLoaded(true)
      }
    },[image.imgURL,imageLoaded])

    function mousedOver() {
      setMoused(!moused)
    }

    return (
      <div key={image.id} className={activeMenu==image.text || activeMenu=="All" ?"flex justify-center items-center text-center p-8 relative":"hidden"}>
          {true && <Blurhash hash={image.blurhash} width="100%" height="100%" resolutionX={32} resolutionY={32} punch={1} />}
          {imageLoaded && <img loading="lazy"
          className="sm:w-[90vw] md:w-[80vw] w-[20vw] hover:opacity-70 hover:scale-125 hover:duration-500 duration-500 rounded-2xl"
            onMouseOver={mousedOver}
            onMouseOut={mousedOver}
            src={activeMenu==image.text || activeMenu=="All" ?image.imgURL:null}
            alt={activeMenu==image.text|| activeMenu=="All" ?image.text:null}
          />}
        {moused && (
          <p className="pointer-events-none text-center text-white font-bold transform-150 absolute ">
            {activeMenu==image.text || activeMenu=="All" ?image.dept:null}
          </p>
        )}
      </div>
    )
  }



  
  //Rendering both the menu and the gallery
  return (
    <div className="flex flex-col mr-10 ml-10 items-center">
      <div className="flex justify-around text-center flex-wrap w-[80vw] mb-10">
        {MenuItems.map(createPictureMenu)}
      </div>
      <div className="flex flex-wrap text-center justify-center ">
        {pictures.map(createPictureCard)}
      </div>
    </div>
  )

}

export default PictureCard
export { pictures }
