'use client'

import ButtonLevel from "@/components/loggedpage/ButtonLevel";
import { db } from "@/db/firebaseConfig"
import { collection, getDocs, where, query } from "firebase/firestore"; 
import { useState, useEffect } from "react";

const Level3 = () => {
    const [verbs, setVerbs] = useState([])
    useEffect(() => {
      const fetchVerbs = async () => {
        try {
          const q = query(collection(db, "verbs"), where("level", "==", "3"));

          const querySnapshot = await getDocs(q);
          const verbsData = querySnapshot.docs.map((doc) => doc.data());
          setVerbs(verbsData);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }
      fetchVerbs()
    }, [])
  return (
    <div className="flex flex-col mt-28 max-w-7xl mx-auto px-8 xl:px-0">
      <div className="flex gap-x-4">
        <ButtonLevel link='/vocabulary/verb/level1' title='Level 1'/>
        <ButtonLevel link='/vocabulary/verb/level2' title='Level 2'/>
        <ButtonLevel link='/vocabulary/verb/level3' title='Level 3'/>
      </div>
      <h1 className="text-center text-3xl font-semibold text-gray-700 mt-8">Verb Level 3</h1>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {verbs.map(verb => {
          return (
            <div key={verb.word} className='h-20 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] grid place-content-center'>
              <p className="text-center">{verb.word} / {verb.arti}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Level3