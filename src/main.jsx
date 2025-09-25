import {createRoot} from 'react-dom/client'
import Container from "./components/global/Container.jsx";
import TaskBar from "./components/global/TaskBar.jsx";

createRoot(document.getElementById('root')).render(<>
    <Container>
        <TaskBar />
    </Container>
</>)
