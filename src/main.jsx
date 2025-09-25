import {createRoot} from 'react-dom/client'
import Container from "./components/Container.jsx";
import TaskBar from "./components/TaskBar.jsx";
import Main from "./components/Main.jsx";

createRoot(document.getElementById('root')).render(<>
    <Container>
        <Main />
        <TaskBar />
    </Container>
</>)
