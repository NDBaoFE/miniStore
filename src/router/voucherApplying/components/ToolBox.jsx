import { ToolContainer,SearchBtn ,StyledSearch} from "./style"
function ToolBox() {
    const onSearch = (e) => {
  
        console.log(e.target.value);
      }
  return (
    <ToolContainer>
        <SearchBtn> 
            <StyledSearch placeholder="input Product name, category.."  onChange={onSearch}   />
            </SearchBtn>
    </ToolContainer>
  )
}

export default ToolBox