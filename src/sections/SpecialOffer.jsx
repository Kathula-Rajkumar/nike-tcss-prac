import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Buton"


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
          <img src={offer}
          width={773}
          height={687}
          className="object-contain w-full" 
          />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
       
          <span className="text-coral-red"> Special</span>
          <span> Offer</span> 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with unbeatable deals. Crafted for
          durability, comfort, and effortless movement.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Redefining activewear
          with sleek design and lasting comfort. Designed to deliver unmatched
          style, comfort, and performance.</p>
        <div className="mt-11 w-auto flex flex-wrap gap-4">
            <Button label="Shop now" 
            iconURL={arrowRight}
            />
            <Button label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"

            />
        </div>
      </div>
        
    </section>
  )
}

export default SpecialOffer
