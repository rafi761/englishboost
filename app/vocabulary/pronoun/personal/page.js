'use client'

import ButtonLevel from "@/components/loggedpage/ButtonLevel";
import { db } from "@/db/firebaseConfig"
import { collection, getDocs, where, query } from "firebase/firestore"; 
import { useState, useEffect } from "react";

const Personal = () => {
    const [pronoun, setPronoun] = useState([])
    useEffect(() => {
      const fetchPronoun = async () => {
        try {
          const q = query(collection(db, "pronoun"), where("level", "==", "1"));

          const querySnapshot = await getDocs(q);
          const pronounData = querySnapshot.docs.map((doc) => doc.data());
          setPronoun(pronounData);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }
      fetchPronoun()
    }, [])
  return (
    <div className="flex flex-col mt-28 max-w-7xl mx-auto px-8 xl:px-0">
      <div className="flex gap-x-4">
        <ButtonLevel link='/vocabulary/pronoun/personal' title='Personal'/>
        <ButtonLevel link='/vocabulary/pronoun/possessive' title='Possessive'/>
      </div>
      <h1 className="text-center text-3xl font-semibold text-gray-700 mt-8">Personal Pronoun</h1>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {pronoun.map(prn => {
          return (
            <div key={prn.word} className='h-20 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] grid place-content-center'>
              <p className="text-center">{prn.word} / {prn.arti}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Personal