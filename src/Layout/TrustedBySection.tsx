import Header2 from "../Components/Header2"

const TrustedBySection = () => {
  return (
        <div className=" bg-white text-left  w-full flex flex-wrap mx-auto min-h-40   p-8 md:p-16 pt-24 pb-0 md:pt-32">
            <div className=" w-full p-8  ">
                <Header2 h2Class={'text-center uppercase text-3xl'} text={"Trusted by your favorite companies"} innerIcon={undefined}/>
            </div>
        </div>  
    )
}

export default TrustedBySection