import Button from "./Button"


const Header = ({onAdd, showAddTask}) => {

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button  text={showAddTask?'Close':'Add'} color={showAddTask?'red':'green'} onClick={onAdd}/>
        </header>
    )
}

export default Header
