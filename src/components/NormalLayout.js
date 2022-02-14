import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

const NormalLayout = ({ children, current = "1", breadcrumbs = ["Admin"] }) => {
  return (
    <Layout className="layout  h-screen">
      <Header>
        <div className="logo" />
        <Menu
          className="lg:ml-7 "
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[current]}
        >
          {["Home"].map((i, index) => {
            return <Menu.Item key={index + 1}>{i}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content className="px-2 lg:w-11/12 lg:mx-auto">
        <Breadcrumb className="rounded p-2 my-2 bg-slate-200">
          {breadcrumbs &&
            breadcrumbs.map((b, i) => (
              <Breadcrumb.Item key={i}>{b}</Breadcrumb.Item>
            ))}
          {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
        </Breadcrumb>

        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        St-Jude Choir ©2022 Created by Pekstar Coders
      </Footer>
    </Layout>
  );
};

export default NormalLayout;
