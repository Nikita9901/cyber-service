import { Homepage, PaymentPage } from "@pages/";

const routesConfig = [
  {
    path: "/",
    exact: true,
    element: <Homepage />,
  },
  {
    path: "/payment",
    exact: true,
    element: <PaymentPage />,
  },
];

export default routesConfig;
