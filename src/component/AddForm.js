import { useState } from "react"

const AddForm = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit=(e)=>{
        e.preventDefault()

        if(!text){
            alert('please fill the fields')
            return
        }
        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className="form-control">
                <label>Add Text</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Add text here...' />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" value={day} onChange={(e)=>setDay(e.target.value)} placeholder='Add Day & time...' />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="Sumbit" className='btn btn-block' />

        </form>
    )
}

export default AddForm
