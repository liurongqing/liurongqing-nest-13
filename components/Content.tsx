import { ClientOnly } from "./ClientOnly";

export const Content = ({ children }) => {
  return <ClientOnly>{children}</ClientOnly>;
};
