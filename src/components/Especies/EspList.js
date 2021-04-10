import React, {useMemo} from 'react'
import {getEspeciesByPublisher} from '../../selectors/getEspeciesByPublisher';
import Book from './Book';

export const EspList = ({publisher}) => {

    const especies =  useMemo(() => getEspeciesByPublisher(publisher) , [publisher]);
   

    return(
       

 <div className="grid md:grid-cols-3 grid-cols-1 sm:gap-8 gap-5 my-12 mx-auto px-4 md:px-12" >
        {
            especies.map(esp =>(
                <Book key={esp.id}
                    {...esp}
                />
                  
            
            ))
        }
</div>
   

  );
}



