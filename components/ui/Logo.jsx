import { Sparkles } from "lucide-react"

const Logo = () => {
  return (
    <>
        <div className="flex justify-center items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center">
                <Sparkles className="text-white w-5 h-5" />
            </span>
            <h1 className="text-white font-bold text-2xl">Draftly</h1>
        </div>
    </>
  )
}

export default Logo