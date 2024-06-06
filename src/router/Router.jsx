import { useRoutes } from "react-router";
import HellowWorld from "../pages/HelloWorld";
import Greeting from "../pages/Greeting";
import FruitList from "../pages/FruitList";
import TodoList from "../pages/TodoList";
import UserList from "../pages/UserList";
import Counter from "../pages/Counter";
import EmailForm from "../pages/EmailForm";
import LandingPage from "../pages/LandingPage";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/helloworld",
      element: <HellowWorld />,
    },
    {
      path: "/greeting",
      element: <Greeting />,
    },
    {
      path: "/counter",
      element: <Counter />,
    },
    {
      path: "/userlist",
      element: <UserList />,
    },
    {
      path: "/emailform",
      element: <EmailForm />,
    },
    {
      path: "/fruitlist",
      element: <FruitList />,
    },
    {
      path: "/todolist",
      element: <TodoList />,
    },
  ];
  return <>{useRoutes(routes)}</>;
};

export default Router;
