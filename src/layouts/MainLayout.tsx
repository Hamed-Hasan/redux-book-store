import { Outlet } from 'react-router-dom';


export default function MainLayout() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}
