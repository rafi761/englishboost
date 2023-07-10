import ButtonLevel from "@/components/loggedpage/ButtonLevel"

const Listen2 = () => {
  return (
    <div className="flex flex-col gap-[32px] mt-28 max-w-7xl mx-auto px-8 xl:px-0">
        <div className="flex gap-x-4">
            <ButtonLevel link='/listening/level1' title='Level 1'/>
            <ButtonLevel link='/listening/level2' title='Level 2'/>
            <ButtonLevel link='/listening/level3' title='Level 3'/>
        </div>
        <div className="lg:mx-auto">
            <iframe className="w-full h-[300px] sm:h-[400px] lg:w-[768px] lg:h-[400px]" src="https://www.youtube.com/embed/PEsRL_LIaXc" title="YouTube video" allowFullScreen></iframe>
        </div>
    </div>
  )
}

export default Listen2






