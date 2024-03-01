import { UserButton } from "@clerk/nextjs"

const mainLayout = ({children}) => {
  return (
    <div>
<span className="absolute right-6 top-6">
<UserButton afterSignOutUrl="/" />

</span>
        {children}
    </div>
  )
}

export default mainLayout