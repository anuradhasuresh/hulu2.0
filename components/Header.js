import Image from 'next/Image'
import HeaderItem from "./HeaderItem"

function Header() {
  return (
    <header className = "">
        <div> 
            <HeaderItem title = 'HOME' Icon = {}/>
        </div>
        <div> 
            <Image 
                className = "object-contain"
                src = 'https://links.papareact.com/ua6' 
                width = {200}
                height = {100}
            />
        </div>
    </header>
  )
}

export default Header
