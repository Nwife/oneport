//components
import Sidebar from "../component/sidebar/Sidebar"
import Content from "../component/content/Content"

export default function Home() {
  return (
    <div className='flex font-inter min-h-screen'>
        <Sidebar />
        <Content />
    </div>
  )
}
