import SideBar from './components/sidebar/SideBar';
import NavBar from "./components/navbar/NavBar";
import HomeComponent from "./components/home/Home";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden">
      <div className="min-w-[238px] hidden lg:flex md:flex border-gray-light border-r" id="side-bar">
        <SideBar />
      </div>
      <div className="lg:flex flex-1 flex-col md:flex" id="main-body">
        <NavBar />
        <div className="p-5">
          <HomeComponent />
        </div>
      </div>
    </main>
  );
}
