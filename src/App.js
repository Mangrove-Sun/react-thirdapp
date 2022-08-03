import { ThemeProvider } from "styled-components"
// import Button from "./components/Button"
import theme from "./styles/theme"
import GlobalStyle from "./styles/globalStyle";
import TodoList from "./components/TodoList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Button /> */}
      <TodoList />
    </ThemeProvider>
  );
}

export default App
