import { signOut } from "../utils/auth"
import { requireUser } from "../utils/hooks"

const DashboardPage = async () => {

    const session = await requireUser()    

  return (
    <>
        <div>DashboardPage</div>
        
        {/* SignOut button */}
        <form
        action={async () => {
            "use server"
            await signOut()
        }}
        >
        <button type="submit">Sign Out</button>
        </form>
    </>
  )
}

export default DashboardPage