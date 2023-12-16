import { useEffect, useState }  from 'react';

function Form ()  {

   const handleSubmit = (e) => {
      console.log(new FormData(e.target));
   }

   return <form onSubmit={handleSubmit}>
      <input type="text" name="country" defaultValue=""/>
      <button>Rechercher</button>
   </form>

}


export default Form;