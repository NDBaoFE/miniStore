
import { useSelector,useDispatch } from "react-redux";
import { NoteWrapper } from "./styled"
import { StyledInput,StyledTextArea } from "./styled"
import { selector } from "../../home/components/slice/selector";
import { useState } from "react";
import { updateNote } from "../../home/components/slice";
function Note() {
  const dispatch=useDispatch();
  
  const {note}=useSelector(selector)
  const [value,setValue] = useState(note);
  const handleChangeNote=(e)=>{
    setValue(e.target.value);
    dispatch(updateNote(e.target.value));
  }
  return (
    <NoteWrapper>
            <h3>Note</h3>
        <StyledInput>
        <StyledTextArea rows={4}  value={value} onChange={handleChangeNote}/>
        </StyledInput>
    </NoteWrapper>
  )
}

export default Note