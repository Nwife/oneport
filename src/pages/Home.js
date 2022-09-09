//components
import Sidebar from "../component/sidebar/Sidebar"
import Content from "../component/content/Content"

export default function Home() {
  return (
    <div class='flex font-inter min-h-screen bg-red-100'>
        <Sidebar />
        <Content />
    </div>
  )
}
