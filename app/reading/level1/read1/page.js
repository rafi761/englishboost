import Image from "next/image"

const Read1 = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-24">
        <div>
            <div className="mx-auto flex justify-center mb-16">
                <Image 
                    src='/images/read-level1-1.png'
                    width={200}
                    height={200}
                    alt='Reading 1 Level 1'
                />
            </div>
            <div className="h-64 overflow-y-auto">
                <h1 className="text-2xl font-semibold">Title : Everyday Activites</h1>
                <h3>My Daily Routine</h3>
                <p>
                    Hi, my name is Lisa, and I want to share my daily routine with you. I am a student at XYZ Vocational School, and heres what a typical day looks like for me:
                    I usually wake up at 6 oclock in the morning. After getting out of bed, I brush my teeth and wash my face. Then, I get dressed in my school uniform. I have breakfast with my family, and we talk about our plans for the day.
                    At 7:30 a.m., I leave home and walk to the bus stop. I take the bus to school, which usually takes about 30 minutes. Once I arrive at school, I attend my classes, which include subjects like English, math, and computer science. I have a break between classes where I socialize with my friends and have a quick snack.
                    After school, I participate in extracurricular activities such as a dance club. Its a lot of fun, and I enjoy dancing with my friends. Sometimes, I have additional classes or study groups to attend. When I finish all my activities, I head home.
                    Back at home, I help my mom with some household chores like setting the table for dinner or doing the dishes. Then, I do my homework and study for my upcoming tests. After finishing my schoolwork, I relax by watching TV or reading a book. I also spend time with my younger brother, playing games or helping him with his homework.
                    Finally, its time for bed. I brush my teeth, change into my pajamas, and say goodnight to my family. I go to bed around 10 oclock, ready to start a new day tomorrow.
                </p>
                <h2 className="text-lg font-semibold mt-5">Questions :</h2>
                <p>1. What time does Lisa wake up in the morning?</p>
                <p>2. What activities does Lisa do after school?</p>
                <p>3. Name two subjects that Lisa studies at school.</p>
                <p>4. What does Lisa do before going to bed?</p>
                <p>5. Why does Lisa participate in extracurricular activities?</p>
            </div>
        </div>
    </div>
  )
}

export default Read1