import { ClientOnly } from "./ClientOnly";
export const Layout = ({ children }) => (
  <div className="px-5 sm:px-10 max-w-screen-lg mx-auto">
    <ClientOnly>{children}</ClientOnly>
  </div>
);
