"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {

  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(false)



  async function note(event) {
    event.preventDefault();
    setIsLoading(true);


    const one = event.target.one.value;
    const two = event.target.two.value;
    const wea = event.target.wea.value;
    const place = event.target.place.value;

    const response = await axios.post("/api/create-story/create-image", {
      one,
      two,
      wea,
      place,
    });
    console.log(response.data)
    setAnswer(response.data.answer)
    setIsLoading(false);

  }

  return (
    <div>
      <form onSubmit={note} className="flex flex-col">

        <div className="text-yellow-900 text-4xl justify-items-center p-2" >Let's create a fighting scene!💥</div>

        <div className="text-yellow-900 text-2xl justify-items-center p-2 " >In a cartoon style.</div>

       <div className ="border-orange-500 justify-items-center">

         <input className="border-orange-500 p-4 m-2" type="text" maxLength="20" name="one" placeholder="ใคร?" />

         <input className="border-orange-500 p-4 m-2" type="text" maxLength="20" name="two" placeholder="กำลังสู้กับใคร?" />

         <input className="border-orange-500 p-4 m-2" type="text" maxLength="20" name="wea" placeholder="ใช้อาวุธอะไร?" />

         <input className="border-orange-500 p-4 m-2" type="text" maxLength="20" name="place" placeholder="ที่ไหน?" />

        </div>

        <button className="outline outline-offset-2 text-yellow-900 border-yellow-300 m-10" type="submit" disabled={isLoading} >{isLoading ? 'Waiting for an epic fight scene...' : 'Go!'}</button>

      </form>
      <p className="p-4">{isLoading ? 'Loading...' : ''}</p>
      <p className="p-4">{answer}</p>
      {answer && <img src={answer} className="w-full" alt ="AI generated image" />}
    </div>
  );
}
