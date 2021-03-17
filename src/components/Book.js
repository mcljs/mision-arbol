import React from 'react'


const Book = (  ) => {
    
    return(
  <>
  <ul className="grid md:grid-cols-3 grid-cols-1 sm:gap-8 gap-5 my-12 mx-auto px-4 md:px-12">



       
      
<li className="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                           Saman 
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        14/4/19
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                
                        <p className="ml-2 text-sm">
                           Elit molestiae sapiente incidunt qui deserunt! Ab ipsa nihil ipsa atque possimus in dolorum! A at harum unde architecto dolorem Aliquid amet iste eius ut expedita facilis? Quas a consequuntur.
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </footer>

            </li>
<li className="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                           Saman 
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        14/4/19
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                        <p className="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </footer>

            </li>
  
  </ul>
  
  </>
  );
}
export default Book



