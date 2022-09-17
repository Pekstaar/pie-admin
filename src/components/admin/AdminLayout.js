import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import MenuBar from "./Menu";
import { AdminRoutes } from "../../utils/AdminRoutes";
import Header from "../Header";

const { Content, Sider } = Layout;
const AdminLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider theme="light" width={250}>
        <div className="logo h-14 flex items-center justify-center font-semibold text-xl text-blue-900">
          PIE ADMIN PANEL
        </div>
        <MenuBar />
      </Sider>

      <Layout className="site-layout">
        <Header />

        <Content className=" ">
          <div className="bg-slate-200 min-h-[93.5vh] container">
            {/* {children} */}
            <Routes>
              {AdminRoutes.map((r, index) => (
                <Route key={index} path={r.path} element={r.element} />
              ))}
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
