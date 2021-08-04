import styled from 'styled-components';







export const printLinksSimple = (links) =>{
    const j = Object.values(links.data.items);

   return(
        <div>
           {j.map((item,index) =>
               <div key={index}>
                   <h2_small>{item.name}</h2_small>
                   <ul >
                       {item.items.map((finalLink,finalLinki) =>
                           <li key={finalLinki}>
                               <a href={finalLink.url} target="_blank">{finalLink.title}</a>
                           </li>
                       )}
                   </ul>
               </div>
           )}
        </div>
    );

}