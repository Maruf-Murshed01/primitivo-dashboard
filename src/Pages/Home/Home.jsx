import { Link } from "react-router-dom"


import { useState } from 'react';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


function Home() {
  const [selected, setSelected] = useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }



  return (
    <>
      <div className="w-full py-10 flex flex-col">

        <div className="py-10 text-center text-4xl">
          <h1 className=" text-gray-900 dark:text-white font-bold ">Primitivo-eats Dashboard</h1>
        </div>

        <div className='flex flex-row justify-evenly'>
          <iframe style={{ borderRadius: '20%' }} width="400px" height="400px" src="https://maruf-murshed01.github.io/clock/" frameborder="0"></iframe>


          <DayPicker
            style={{ background: 'linear-gradient(to right, hsl(200, 100%, 50%), hsl(175, 100%, 50%))', padding: '50px', borderRadius: '5%', alignItems: 'center', marginTop: '0' }}
            mode="single"
            selected={selected}
            onSelect={setSelected}
          // footer={footer}
          />
        </div>



      </div>
    </>
  )
}

export default Home