const TaskBar = () => {
    return <>
        <footer className={"taskbar-bg h-7.5 fixed bottom-0 right-0 w-screen"}>
            <button className={"cursor-pointer active:brightness-75 focus-visible:outline-none"}>
                <img src="/start.png" alt=""/>
            </button>
        </footer>
    </>
}

export default TaskBar;