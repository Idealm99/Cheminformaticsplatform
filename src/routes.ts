import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import StepLayout from "./components/steps/StepLayout";
import FinalDashboard from "./components/steps/FinalDashboard";
import HomePage from "./components/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "step/1", Component: () => <StepLayout stepNumber={1} /> },
      { path: "step/2", Component: () => <StepLayout stepNumber={2} /> },
      { path: "step/3", Component: () => <StepLayout stepNumber={3} /> },
      { path: "step/4", Component: () => <StepLayout stepNumber={4} /> },
      { path: "step/5", Component: FinalDashboard },
    ],
  },
]);