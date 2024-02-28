import Header from "../header/header";

export default function Layout ({children}: any) {
    return (
      <div>
        <Header />
        <main>{children}</main>
      </div>
    )
}